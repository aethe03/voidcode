import {
  RampLogo,
  LoomLogo,
  VercelLogo,
  DescriptLogo,
  CashAppLogo,
  RaycastLogo,
  MercuryLogo,
  RetoolLogo,
  AlanLogo,
  ArcLogo,
  OpenSeaLogo,
  PitchLogo,
} from "../logos";

export const Clients = () => (
  <>
    <p className="text-lg text-center text-white md:text-xl mb-xl">
      <span className="text-primary-text">
        Powering the world’s best product teams.
      </span>
      <br className="hidden md:block" />
      From next-gen startups to established enterprises.
    </p>
    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
      <RampLogo />
      <LoomLogo className="hidden md:block" />
      <VercelLogo />
      <DescriptLogo className="hidden md:block" />
      <CashAppLogo />
      <RaycastLogo />
      <MercuryLogo />
      <RetoolLogo />
      <AlanLogo className="hidden md:block" />
      <ArcLogo className="hidden md:block" />
      <OpenSeaLogo className="hidden md:block" />
      <PitchLogo className="hidden md:block" />
    </div>
  </>
);
