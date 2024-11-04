import { TikTok } from "@/Icons/Tiktok";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import React from "react";

const Footer = () => {
  return (
    <footer className=" flex flex-col gap-2 text-xs ">
      <div className="flex justify-center gap-7  flex-row items-center">
        <a href="http://www.instagram.com/hashtagobi">
          <InstagramLogoIcon className="size-8" />
        </a>
        <a href="http://www.tiktok.com/@hashtagobi">
          <TikTok className="size-8" />
        </a>
      </div>
      <p className="mt-2">© {new Date().getFullYear()} obi. All rights reserved.</p>
      <p className="mt-2 text-center">made by LightWave</p>
    </footer>
  );
};

export default Footer;
