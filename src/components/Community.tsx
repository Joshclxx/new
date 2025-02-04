import ImageContainer from "./ImageContainer";
import React from "react";

const Community = () => {
  const community = [
    {
      imageSrc: "/icon/icon-1.svg",
      imageAlt: "icon-1",
      imageHeight: 80,
      imageWidth: 80,
      title: "Membership Organization",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      imageSrc: "/icon/icon-3.svg",
      imageAlt: "icon-3",
      imageHeight: 80,
      imageWidth: 80,
      title: "National Association",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      imageSrc: "/icon/icon-2.svg",
      imageAlt: "icon-2",
      imageHeight: 80,
      imageWidth: 80,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  return (
    <section className="relative w-full flex items-center justify-center py-[144px] px-[50px] bg-[#FFFFFF]">
      <div className="text-center -mt-4">
        <h1 className="text-[#4D4D4D] semi-bold">
          Manage your entire community
          <br />
          in a single system
        </h1>
        <p className="text-[#717171] bold-18">Who is Nextcent suitable for?</p>
        <div className="flex flex-wrap justify-center items-center gap-14 mt-9">
          {community.map((community, index) => (
            <div
              key={index}
              className=" semi-bold flex flex-col items-center rounded-lg p-6 bg-[#F5F7FA] shadow-lg w-[400px]"
            >
              <ImageContainer
                imageSrc={community.imageSrc}
                imageAlt={community.imageAlt}
                imageHeight={community.imageHeight}
                imageWidth={community.imageWidth}
                title={community.title}
                description={community.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
