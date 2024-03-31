import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-1xl text-gray-900 font-bold md:text-4xl">
              A well-designed gallery website serves as a dynamic platform for
              artists to showcase their work, connect with audiences.
            </h2>
            <p className="mt-6 text-gray-600">
              A gallery website is a digital platform designed to showcase and
              display various forms of visual content, such as artwork,
              photography, videos, or any other creative work.
            </p>
            <p className="mt-4 text-gray-600">
              These websites serve as virtual galleries, allowing artists,
              photographers, designers, or curators to exhibit their work to a
              global audience. Here is a breakdown of components typically found
              in a gallery website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
