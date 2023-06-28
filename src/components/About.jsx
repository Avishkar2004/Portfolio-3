import React from "react";
import Image from "../assets/img/about.webp";

const About = () => {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img src={Image} alt="" />
          <div className="flex flex-col items-center text-center lg:items-center lg:text-center lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Avishkar
              </h2>
              <p className="mb-4 text-accent ">Freelance web developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                cupiditate excepturi consectetur quos omnis. <br />
                Natus, quod inventore ullam illo possimus quos quas quaerat
                ipsum, excepturi aperiam, cumque facilis nesciunt repellat.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
