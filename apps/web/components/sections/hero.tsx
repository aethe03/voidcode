import { HeroTitle, HeroSubtitle, Hero } from "../hero";
import { HeroImage } from "../hero-image";
import { CheveronIcon } from "../icons/cheveron";
import { Button, IconWrapper } from "../ui/button";

export const HeroSection = () => (
  <Hero>
    <Button
      className="animate-fade-in opacity-0 translate-y-[-1rem]"
      variant="secondary"
      href="/alpha"
      size="small"
    >
      VoidCode July 2023 - Alpha is out now <IconWrapper>→</IconWrapper>
    </Button>
    <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
      Unleash your coding potential <br className="hidden md:block" /> in the
      Vastness of Space
    </HeroTitle>
    <HeroSubtitle className="animate-fade-in opacity-0 translate-y-[-1rem]">
      Unlock the Universe of Coding Skills and
      <br className="hidden md:block" />
      Launch Your Path to Success with VoidCode's Expert Guidance.
    </HeroSubtitle>
    <Button
      className="animate-fade-in opacity-0 translate-y-[-1rem]"
      size="large"
      href="/get-started"
    >
      Get Started{" "}
      <IconWrapper>
        <CheveronIcon />
      </IconWrapper>
    </Button>
    <HeroImage />
  </Hero>
);
