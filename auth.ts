import NextAuth, { DefaultSession } from "next-auth";

import { db } from "./lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "./auth.config";
import { getUserById } from "./lib/utils";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // callbacks: {
  //   async session({ token, session }) {
  //     if (token.sub && session.user) {
  //       session.user.id = token.sub;
  //     }

  //     console.log({ sessionToken: token });

  //     if (token.highestwpm && session.user) {
  //       session.user.highestwpm = token.highestwpm;
  //     }

  //     return session;
  //   },
  //   async jwt({ token }) {
  //     if (!token.sub) return token;

  //     const existingUser = await getUserById(token.sub);

  //     if (!existingUser) return token;

  //     token.highestwpm = existingUser.highestwpm;

  //     return token;
  //   },
  // },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
