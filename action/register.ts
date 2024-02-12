"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schemeas";
import { db } from "@/lib/db";
import { getUserByEmail, getUserByName } from "@/lib/utils";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Something went wrong!" };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const existingUserByName = await getUserByName(name);
  if (existingUserByName) {
    return { error: "Username already in use!" };
  }

  const user = await db.user.create({
    data: { name, email, password: hashedPassword },
  });

  // TODO: Send verification token

  return { success: "Account created!" };
};
