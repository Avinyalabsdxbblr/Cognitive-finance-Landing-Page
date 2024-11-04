import Image from "next/image";
import Link from "next/link";
import { FaYoutube as Yt, FaLinkedinIn as Ln } from "react-icons/fa";
import { FaXTwitter as Tw } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full min-h-[478px] bg-[#14171F] text-[#DDDDDE] flex flex-col justify-between">
      <div className="flex-1 w-full py-[100px] xmd:py-0 px-[20px] vsm:px-[50px] xl:px-[100px] xmd:flex space-y-[50px] xmd:space-y-0 justify-between items-center">
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

        <div className="flex flex-col md:flex-row justify-between xmd:justify-start gap-[30px] xmd:gap-[70px]">
          <div className="links">
            <h1>Company</h1>
            <Link href="#reason">Why Us?</Link>
            <Link href="#contact">Contact Us</Link>
            <Link href="">Blog</Link>
            <Link href="">FAQ</Link>
          </div>
          <div className="links">
            <h1>Solutions</h1>
            <Link href="">Personal information removal</Link>
            <Link href="">Cloaking alias profiles</Link>
            <Link href="">Cloaking alias profiles</Link>
          </div>
          <div className="links">
            <h1>Legal</h1>
            <Link href="">Terms of Service</Link>
            <Link href="">Privacy Policy / GDPR</Link>
            <Link href="">Cookie Policy</Link>
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
