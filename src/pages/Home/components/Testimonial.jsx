import { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

export const Testimonial = () => {
  const testimonials = ["AAA", "BBB", "CCC"];

  const [index, setIndex] = useState(0);

  const onSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <section id="testimonial" className="mb-3 py-3">
      <div className="container">
        <div className="text-center">
          <h1>Testimonial</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            doloremque iure ullam.
          </p>
        </div>
        <Carousel activeIndex={index} onSelect={onSelect} slide>
          {testimonials.map((item) => (
            <CarouselItem key={item}>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card p-5">
                    <div className="d-flex flex-column justify-content-center">
                      <div className="text-center">
                        Photo {item} - {index}
                      </div>
                      <div className="text-center">stars</div>
                      <div className="my-2">
                        <p className="fw-bold">
                          "Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorum, cumque neque? Aperiam nihil delectus,
                          et magnam laboriosam molestias a vero commodi
                          distinctio reiciendis fugiat saepe. Iste ullam vero
                          quo labore!"
                        </p>
                      </div>
                      <div>
                        <span>John Dee 32, Bromo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>

        <div className="my-3 d-flex justify-content-center align-items-center gap-2">
          <button type="button" onClick={() => setIndex(index - 1)}>
            Prev
          </button>
          <button type="button" onClick={() => setIndex(index + 1)}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};
