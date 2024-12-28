import Image from "next/image";
import React from "react";

const AiMessage = () => {
  return (
    <div className="w-full flex gap-[15px]">
      <div className="my-[9px] size-[40px] rounded-full border border-[#E2E8F0] grid place-items-center">
        <Image src="/AIAvatar.svg" alt="Ai Avatar" width={40} height={40} />
      </div>
      <div className="flex-1 min-h-[60px] px-[20px] py-[10px] bg-[white] rounded-[14px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
        voluptatum. Ad quos deserunt corporis modi magnam animi tempore.
        Blanditiis voluptatum eveniet fuga enim non itaque placeat perferendis
        qui alias minus odio illo error repudiandae incidunt quia dicta delectus
        quisquam laudantium, in praesentium laborum quod. Neque mollitia placeat
        consequuntur culpa error nisi! Rerum tenetur quos officiis impedit modi
        iusto cum alias? Corrupti ad ea alias numquam vero vitae laborum,
        obcaecati deserunt, dolores consequuntur minus, libero necessitatibus
        incidunt recusandae molestiae. Nobis possimus illum, temporibus veniam
        cumque quisquam consequuntur impedit molestias repellendus debitis nihil
        numquam reiciendis architecto quibusdam minus consequatur ratione
        fugiat. Maiores.
      </div>
    </div>
  );
};

export default AiMessage;
