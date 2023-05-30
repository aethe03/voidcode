"use client";

import React from "react";
import { Container } from "./container";
import Link from "next/link";
import { Logo } from "./icons/logo";
import { DiscordIcon } from "./icons/discord";
import { GithubIcon } from "./icons/github";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of Service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "Github", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t text-md py-14 border-transparent-white">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex flex-row justify-between h-full lg:flex-col">
          <div className="flex items-center text-grey">
            <Logo className="w-4 h-4 mr-4" /> VoidCode
          </div>
          <div className="flex mt-auto space-x-4 text-grey">
            <Link href={"https://github.com/aether6971"} target="_blank">
              <GithubIcon />
            </Link>
            <Link href={"https://discord.gg/5FPY5WBTaX"} target="_blank">
              <DiscordIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="lg:min-w-[18rem] mt-10 lg:mt-0 min-w-[50%]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.href} className="[&_a]:last:mb-0">
                  <Link
                    className="block mb-3 transition-colors text-grey hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
