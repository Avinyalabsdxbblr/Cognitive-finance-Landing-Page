import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight as Arrow } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const page = () => {
  return (
    <div className="relative size-full flex flex-col">
      <div className="px-[50px] py-[20px] flex items-center justify-between">
        <Link className="relative z-[6]" href="/">
          <Image width={48} height={44} src="/logo.svg" alt="logo" />
        </Link>

        <button className="w-[161px] h-[40px] flex items-center gap-[5px] justify-center bg-[#1A2B3B] rounded-[8px] text-white">
          <p className="font-[500] text-[14px]">Connect wallet</p>
          <Arrow className="text-[20px]" />
        </button>
      </div>

      <div className="mt-[10px] flex-1 px-[50px] flex flex-col gap-[20px]">
        <div className="w-full flex gap-[15px]">
          <div className="my-[9px] size-[40px] rounded-full border border-[#E2E8F0] grid place-items-center">
            <FaUserAlt color="#91BEF6" size={13} />
          </div>
          <div className="flex-1 h-[60px] px-[20px] border border-[#E2E8F0] rounded-[14px] flex items-center justify-between">
            <p className="font-[600] text-[#1B2559]">
              The advantages of Artificial Intelligence
            </p>
            <button>
              <MdEdit color="#718096" size={20} />
            </button>
          </div>
        </div>

        <div className="w-full flex gap-[15px]">
          <div className="my-[9px] size-[40px] rounded-full border border-[#E2E8F0] grid place-items-center">
            <Image src="/AIAvatar.svg" alt="Ai Avatar" width={40} height={40} />
          </div>
          <div className="flex-1 min-h-[60px] p-[20px] bg-[white] rounded-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            voluptatum. Ad quos deserunt corporis modi magnam animi tempore.
            Blanditiis voluptatum eveniet fuga enim non itaque placeat
            perferendis qui alias minus odio illo error repudiandae incidunt
            quia dicta delectus quisquam laudantium, in praesentium laborum
            quod. Neque mollitia placeat consequuntur culpa error nisi! Rerum
            tenetur quos officiis impedit modi iusto cum alias? Corrupti ad ea
            alias numquam vero vitae laborum, obcaecati deserunt, dolores
            consequuntur minus, libero necessitatibus incidunt recusandae
            molestiae. Nobis possimus illum, temporibus veniam cumque quisquam
            consequuntur impedit molestias repellendus debitis nihil numquam
            reiciendis architecto quibusdam minus consequatur ratione fugiat.
            Maiores.
          </div>
        </div>
      </div>

      <div className="h-[100px] px-[50px] flex justify-end gap-[15px]">
        <input
          type="text"
          className="w-[71%] h-[54px] border border-[#E2E8F0] rounded-[45px] px-[20px] outline-none"
          placeholder="Enter your question"
        />
        <button className="chat-btn w-[192px] h-[54px] rounded-[45px] text-[14px] font-[600] text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;
