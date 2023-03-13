import React from "react";

import MediaItem from "../Media-section/Media-Item/MediaItem.component";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

const MediaSection = () => {
  return (
    <section className="bg-mBlue py-2 col-start-1 col-end-12 flex justify-between items-center">
      <div className="flex justify-start items-center">
        <MediaItem href="#" icon={<FaFacebookF />} />
        <MediaItem href="#" icon={<BsTwitter />} />
        <MediaItem href="#" icon={<BsYoutube />} />
      </div>
      <div className="hidden sm:flex justify-start items-center text-white text-start sm:w-1/2 xl:w-1/3 xl:justify-center">
        <p className="text-xl font-bold tracking-wider">
          New <span className="text-yellow-300">Arrival</span> Up To
        </p>
      </div>
      <div className="hidden xl:flex w-1/3 justify-end text-white text-xl mx-2">
        <div className="flex justify-between items-center mx-2 cursor-pointer hover:text-yellow-300">
          <AiFillPhone className="text-xl mr-2" />
          <p className="tracking-wider">+38 000 000 000</p>
        </div>
        <div className="flex justify-between items-center mx-2 cursor-pointer hover:text-yellow-300">
          <HiMail className="text-xl mr-2" />
          <p className="tracking-wider">mail@mail.com</p>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
