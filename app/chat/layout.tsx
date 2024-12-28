import React from "react";
import LeftNav from "./components/LeftNav";
import MenuCover from "./components/MenuCover";

export const generateMetadata = async () => {
  return {
    title: "Chat || Cognitive Finance",
    description: "Chat with our AI",
    icons: {
      icon: "/logo.png",
    },
    openGraph: {
      url: "https://cognitivefinance.vercel.app",
      type: "website",
      title: "Chat || Cognitive Finance",
      description: "Chat with our AI",
      images: [
        {
          url: "https://opengraph.b-cdn.net/production/images/cd5c5f9d-6412-46b5-a6ce-73d20cc53019.png?token=dIJPgO25cuHUoGIUURk-1Hj3xtu0_938sH4k8DSuFVc&height=556&width=1200&expires=33271406122",
          width: 1200,
          height: 693,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://cognitivefinance.vercel.app",
      title: "Chat || Cognitive Finance",
      description: "Chat with our AI",
      images: [
        "https://opengraph.b-cdn.net/production/images/cd5c5f9d-6412-46b5-a6ce-73d20cc53019.png?token=dIJPgO25cuHUoGIUURk-1Hj3xtu0_938sH4k8DSuFVc&height=556&width=1200&expires=33271406122",
      ],
    },
  };
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="chat-page relative flex h-screen max-w-[1900px] mx-auto font-Inter">
      <LeftNav />

      <div className="main flex-1 h-full font-PlusJakartaSans">{children}</div>

      <MenuCover />
    </div>
  );
};

export default layout;
