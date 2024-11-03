import Image from "next/image";
import { FaYoutube as Yt, FaLinkedinIn as Ln } from "react-icons/fa";
import { FaXTwitter as Tw } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full min-h-[478px] bg-[#14171F] text-[#DDDDDE] flex flex-col justify-between">
      <div className="flex-1 w-full px-[100px] flex justify-between items-center">
        <div>
          <Image src="/logo.svg" width={48} height={44} alt="logo" />
          <p className="mt-[20px] mb-[40px]">
            Make your data invisible by generating <br /> unlimited identities.
            The next-level in <br /> privacy protection for online and travel.
          </p>
          <div className="flex items-center gap-[20px] text-[20px]">
            <Yt />
            <Ln />
            <Tw />
          </div>
        </div>

        <div className="flex gap-[70px]">
          <div className="links">
            <h1>Company</h1>
            <p>Why Us?</p>
            <p>Contact Us</p>
            <p>Blog</p>
            <p>FAQ</p>
          </div>
          <div className="links">
            <h1>Solutions</h1>
            <p>Personal information removal</p>
            <p>Cloaking alias profiles</p>
            <p>Cloaking alias profiles</p>
          </div>
          <div className="links">
            <h1>Legal</h1>
            <p>Terms of Service</p>
            <p>Privacy Policy / GDPR</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>

      <div className="border-t border-t-[#272C39] py-[20px] grid place-items-center">
        <p className="text-[14px] ">
          ©CognitiveFinance 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
