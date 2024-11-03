import Image from "next/image";
import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <div className="mt-[75vh] mb-[25vh] relative w-full">
      <div>
        <h1 className="text-[20px] font-[600] font-Sora text-center text-[#36394A]">
          Multichain support
        </h1>

        <div className="mt-[30px] space-y-[10px]">
          <div className="flex justify-center items-center gap-[20px]">
            <Image
              className="object-contain"
              width={160}
              height={56}
              src="/brand.svg"
              alt="brand"
            />
            <Image
              className="object-contain"
              width={160}
              height={56}
              src="/brand.svg"
              alt="brand"
            />
            <Image
              className="object-contain"
              width={160}
              height={56}
              src="/brand.svg"
              alt="brand"
            />
            <Image
              className="object-contain"
              width={160}
              height={56}
              src="/brand.svg"
              alt="brand"
            />
            <Image
              className="object-contain"
              width={160}
              height={56}
              src="/brand.svg"
              alt="brand"
            />
          </div>
          <div className="flex justify-center items-center gap-[20px]">
            <Image
              className="object-contain"
              width={160}
              height={56}
              src="/brand.svg"
              alt="brand"
            />
            <Image
              className="object-contain"
              width={160}
              height={56}
              src="/brand.svg"
              alt="brand"
            />
            <Image
              className="object-contain"
              width={160}
              height={56}
              src="/brand.svg"
              alt="brand"
            />
            <Image
              className="object-contain"
              width={160}
              height={56}
              src="/brand.svg"
              alt="brand"
            />
          </div>
        </div>

        <div className="mt-[60px] flex items-center justify-center gap-[100px]">
          <div className="relative max-w-[564px] w-[40%] h-[300px] rounded-[12px]">
            <div className="relative w-full h-full bg-[#2CAEE9] rounded-[12px] px-[40px] py-[20px]">
              <ul className="text-[13px] text-white leading-[20px]">
                <li>
                  <span className="text-[#687887] mr-[15px]">1</span> await
                  increase.achTransfers.create
                </li>
                <li>
                  <span className="text-[#687887] mr-[20px]">2</span>{" "}
                  account_id:{" "}
                  <span className="text-[#31F2CC]">
                    'account_in71c4amph0vgo2qllky'
                  </span>
                  ,
                </li>
                <li>
                  <span className="text-[#687887] mr-[20px]">3</span> amount:{" "}
                  <span className="text-[#DDFF33]">81634</span>,
                </li>
                <li>
                  <span className="text-[#687887] mr-[20px]">4</span> currency:{" "}
                  <span className="text-[#31F2CC]">'USD'</span>,
                </li>
              </ul>
            </div>
            <div
              style={{ boxShadow: "0px 49px 100px 0px #1A2B3B99" }}
              className="w-full h-full absolute left-[40px] top-[100px]"
            >
              <Image
                priority
                className="object-cover"
                fill
                src="/gptImg.svg"
                alt="code"
              />
            </div>
          </div>

          <div>
            <h1 className="text-[36px] font-Poppins font-[600] leading-[60px] text-[#000000]">
              Supercharge your <br /> transactions with lightning- <br />
              fast speed using our AI- <br />
              powered platform.
            </h1>
            <p className="mt-[20px] mb-[30px] text-[20px] text-[#000000]">
              Start transforming your on-chain activities effortlessly in <br />{" "}
              just minutes with Cognitive Finance.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
