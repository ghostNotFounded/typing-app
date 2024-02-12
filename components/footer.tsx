import Link from "next/link";

import { Socials } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-5 lg:px-20 h-16">
      <div className="grid grid-cols-2 gap-2 md:flex md:space-x-5">
        {Socials.map((social) => (
          <Link
            key={social.id}
            href={social.link}
            className="flex space-x-1 items-center text-sm hover:text-white duration-200 ease-in"
          >
            {social.icon} <span>{social.name}</span>
          </Link>
        ))}
      </div>

      <p className="text-sm">
        Created <span className="lg:inline-block hidden">and maintained</span>{" "}
        by:{" "}
        <span className="text-teal">
          Arsheya <span className="lg:inline-block hidden">Singh Parmar</span>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
