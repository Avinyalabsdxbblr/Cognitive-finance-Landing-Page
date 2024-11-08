import Image from "next/image";
import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <div
      id="about"
      className="mt-[100px] md:mt-[0px] mb-[100px] vsm:mb-[25vh] relative w-full"
    >
      <div className="relative w-[90%] xmd:w-[75%] aspect-video mx-auto mt-[-280px]">
        <Image
          fill
          className="object-contain"
          src="/heroImg.png"
          alt="Chat"
          priority
        />
      </div>

      <div className="mt-[100px]">
        <h1 className="text-[20px] font-[600] font-Poppins text-center text-[#36394A]">
          Multichain support
        </h1>

        <div className="hidden lg:block mt-[30px] space-y-[20px]">
          <div className="flex justify-center items-center gap-[30px]">
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
          <div className="flex justify-center items-center gap-[30px]">
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

        <div className="mt-[20px] px-[20px] w-fit mx-auto grid lg:hidden justify-center grid-cols-3 gap-x-[20px] gap-y-[20px]">
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

        <div className="mt-[60px] px-[20px] vsm:px-[40px] flex flex-col-reverse lg:flex-row items-center justify-center gap-[50px] lg:gap-[100px]">
          <div className="relative max-w-[564px] w-full lg:w-[40%] h-[250px] md:h-[300px] rounded-[12px]">
            <div className="hidden vsm:block relative w-full h-full bg-[#2CAEE9] rounded-[12px] px-[40px] py-[20px]">
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
            <div className="boxShadow w-full h-full absolute left-0 vsm:left-[20px] xmd:left-[40px] top-0 vsm:top-[40px] xmd:top-[100px]">
              <Image
                priority
                className="object-contain vsm:object-cover"
                fill
                src="/gptImg.svg"
                alt="code"
              />
            </div>
          </div>

          <div>
            <h1 className="text-[30px] vsm:text-[36px] font-Poppins font-[600] leading-[1.3] lg:leading-[60px] text-[#000000]">
              Supercharge your <br className="hidden lg:block" /> transactions
              with lightning- <br className="hidden lg:block" />
              fast speed using our AI- <br className="hidden lg:block" />
              powered platform.
            </h1>
            <p className="mt-[20px] mb-[30px] text-[20px] text-[#000000]">
              Start transforming your on-chain activities effortlessly in{" "}
              <br className="hidden lg:block" /> just minutes with Cognitive
              Finance.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
