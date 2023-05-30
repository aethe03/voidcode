"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "./icons/logo";
import Link from "next/link";
import { Container } from "./container";
import { Button } from "./ui/button";
import { Hamburger } from "./icons/hamburger";
import classNames from "classnames";

export const Header: React.FC = ({}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", active);
  }, [active]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setActive(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setActive]);

  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link href="/" className="flex items-center text-lg">
          <Logo className="w-[2.8rem] h-[2.8rem] mr-4" /> VoidCode
        </Link>
        <div
          className={classNames(
            "transition-[visibility] md:visible",
            active ? "visible" : "invisible delay-500"
          )}
        >
          <nav
            className={classNames(
              "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:overflow-hidden md:bg-transparent md:translate-x-0 md:opacity-100 md:transition-none",
              active
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100vw]"
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "ease-in [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:items-center [&_a]:text-lg [&_a]:transition-[colors, transform] [&_a]:md:transition-colors  [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-md [&_a:hover]:text-grey",
                active ? "[&_a]:translate-y-0" : "[&_a]:translate-y-8"
              )}
            >
              <li key="features">
                <Link href="#">Features</Link>
              </li>
              <li key="method">
                <Link href="#">Method</Link>
              </li>
              <li key="customers" className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li key="changelog" className="md:hidden lg:block">
                <Link href="#">Change log</Link>
              </li>
              <li key="integrations" className="md:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li key="pricing">
                <Link href="#">Pricing</Link>
              </li>
              <li key="company">
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center h-full ml-auto">
          <Button href="/signup">Signup</Button>
        </div>
        <button className="ml-6 sm:hidden" onClick={() => setActive(!active)}>
          <span className="sr-only">Toggle Menu</span>
          <Hamburger active={active} />
        </button>
      </Container>
    </header>
  );
};
