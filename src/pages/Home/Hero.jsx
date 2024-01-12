import React from "react";
import TextStrip from "./TextStrip";
import Button from "../../components/Button";
import HeroBg from "./HeroBg";

const Hero = () => {
  return (
    <div className="pt-[200px] overflow-x-clip pb-16 relative z-0">
      <HeroBg />

      <div className="flex flex-col items-center text-center max-w-[1200px] w-full mx-auto gap-8">
        <img src="/logo-text.svg" alt="Shardeum" />

        <h1 className="text-[185px] font-helveticaProCn leading-[0.85] tracking-tight">
          Decentralization for everyone
        </h1>

        <p className="para-1 mt-4">
          Fast, scalable, and forever fair, Shardeum is an EVM-based, truly
          decentralized L1.
        </p>

        <div className="flex gap-8">
          <Button text="Claim Testnet SHM" />
          <Button text="Join Betanet Sphinx" />
        </div>
      </div>

      <TextStrip
        text={[
          "800,000+ Community Members",
          "Est. 100,000+ TPS",
          "Est. $0.01 Transaction Cost",
          "1280 validators",
        ]}
      />

      <div className="flex flex-col items-center text-center gap-4">
        <div className="max-w-[790px] w-[80%] relative">
          <img src="/triangle.png" alt="triangle" className="w-full" />
          <img
            src="/triangle-shadow.svg"
            alt="shadow"
            className="absolute -right-[28%] bottom-0 w-[58.73%]"
          />
        </div>

        <p className="para-1 max-w-[700px] mt-8">
          Welcome to the Layer 1 blockchain where the community runs the nodes,
          and linear scalability means exponential growth.
        </p>

        <Button text="Join our Discord" />
      </div>
    </div>
  );
};

export default Hero;
