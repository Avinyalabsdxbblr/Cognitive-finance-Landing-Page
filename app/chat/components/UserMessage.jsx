import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const UserMessage = () => {
  return (
    <div className="w-full flex gap-[10px] sm:gap-[15px]">
      <div className="my-[9px] size-[35px] sm:size-[40px] rounded-full border border-[#E2E8F0] grid place-items-center">
        <FaUserAlt color="#91BEF6" size={13} />
      </div>
      <div className="flex-1 min-h-[60px] py-[10px] px-[10px] sm:px-[20px] border border-[#E2E8F0] rounded-[14px] flex justify-between items-start">
        <p className="font-[600] text-[#1B2559]">
          The advantages of Artificial Intelligence Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Exercitationem debitis nobis iure
          consequatur quas aspernatur nihil possimus ut, eveniet eaque
          consequuntur quaerat minima magnam id doloremque tempore sapiente, cum
          tenetur reiciendis maiores soluta asperiores incidunt modi. Asperiores
          modi eius facilis.
        </p>
        <button className="hidden sm:block">
          <MdEdit color="#718096" size={20} />
        </button>
      </div>
    </div>
  );
};

export default UserMessage;
