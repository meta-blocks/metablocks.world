import React, { useState } from "react";
import Marquee from "react-fast-marquee";

import SignupDialog from "./SignupDialog";
import config from "../config";

const { discordInviteLink, twitterLink, gleamLink } = config;

const Join = () => (
  <>
    <a className="mr4 dim" href={discordInviteLink}>
      💬 Say hi on <span className="b blue"> Discord</span>
    </a>
    <a className="mr4 dim" href={twitterLink}>
      🐦 Follows us on <span className="b blue">Twitter</span>
    </a>
  </>
);

const Subscribe = () => {
  return (
    <div>
      <SignupDialog
        subTitle="At Meta Blocks, we are building the NFT upgradation protocol. Drop your details to get notified when we launch 💁🏼‍♀️"
        campaignId={"subscribe-via-post-page"}
        emailLabel={"Enter your best email"}
      />

      <div className="mt2">
        <Marquee gradientWidth={40}>
          <Join />
          <Join />
          <Join />
        </Marquee>
      </div>
    </div>
  );
};

export default Subscribe;
