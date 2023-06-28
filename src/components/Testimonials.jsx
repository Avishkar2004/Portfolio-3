import React from "react";
import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            What other people say
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            earum ea provident obcaecati similique? Corporis illo temporibus
            numquam debitis necessitatibus, officia voluptatem cumque minima
            dignissimos sequi commodi distinctio autem odit.
          </p>
        </div>
        <TestimonialsSlider />
      </div>
    </section>
  );
};

export default Testimonials;
