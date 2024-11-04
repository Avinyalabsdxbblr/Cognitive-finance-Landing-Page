import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const Reason = () => {
  return (
    <div
      id="reason"
      className="relative bg-[black] text-white py-[100px] grid place-items-center"
    >
      <div className="relative z-[2] w-[90%] xl:w-[80%] min-h-[110vh] pt-[40px] md:pt-[100px] pb-[40px] bg-[#212121] flex flex-col justify-between">
        <h1 className="mx-[5%] lg:mx-[10%] text-[36px] font-Poppins font-bold leading-[50px]">
          Why Choose <br />
          Cognitive Finance
        </h1>

        <div className="mt-[50px] md-mt-0 mx-[5%] lg:mx-[10%] flex flex-col gap-[30px] md:gap-0 md:flex-row justify-between items-center">
          <div className="bg-[#141414] w-full md:w-[60%] rounded-[12px] h-[225px] p-[30px] flex flex-col justify-center">
            <h1 className="mb-[10px] 2xl:text-[20px] text-left">
              Seasoned Team
            </h1>
            <p className="2xl:text-[20px] text-[#FFFFFFB2]">
              At Cognitive Finance, our founding team has a proven track record
              of scaling platforms into multimillion-dollar businesses in the
              past.
            </p>
          </div>

          <div className="relative md:max-w-[300px] w-full md:w-[35%] h-[388px] rounded-[20px] overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full">
              <Image
                className="object-cover"
                src="/vidtmb.png"
                fill
                alt="thumbnail"
              />
            </div>
            <div className="absolute size-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#caca40] grid place-items-center">
              <FaPlay className="size-[30px] text-[black]" />
            </div>
          </div>
        </div>
      </div>

      <Image
        className="absolute right-0 bottom-0"
        width={1048}
        height={594}
        src="/egradient.png"
        alt="gradient"
      />
    </div>
  );
};

export default Reason;
