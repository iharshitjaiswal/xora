import React from "react";
import { Element } from "react-scroll";
import { details, features } from "../constants";
import Button from "../Components/Button";

const Features = () => {
  return (
    <section>
      <Element name="Features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-none border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3 mt-8">
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
                key={features.id}
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-2 flex items-center justify-center flex-col md:flex-row">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                    />
                  </div>
                </div>
                <p className="caption mb-6 max-md:mb-6">{caption}</p>
                <h2 className="max-w-500 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                <p className=" mb-12 body-2 max-md:mb-8 max-md:body-3">
                  {text}
                </p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}

            <ul className="flex relative justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/25 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 button-0 left-1/2 bg-s3/30 w-[1px] h-full z-10" />
                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-400 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>
                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
