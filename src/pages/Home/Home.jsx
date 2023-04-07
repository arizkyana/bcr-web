import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { WhyUs } from "./components/WhyUs";

export const Home = () => {
  return (
    <div className="pb-5">
      <Hero />
      <Features />
      <WhyUs />
      <section id="testimonial" className="mb-3">
        <div className="container">
          <div className="text-center">
            <h1>Testimonial</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              doloremque iure ullam.
            </p>
          </div>
          <div
            id="carouselExampleRide"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card p-5">
                      <div className="d-flex flex-column justify-content-center">
                        <div className="text-center">Photo</div>
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
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card p-5">
                      <div className="d-flex flex-column justify-content-center">
                        <div className="text-center">Photo</div>
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
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card p-5">
                      <div className="d-flex flex-column justify-content-center">
                        <div className="text-center">Photo</div>
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
              </div>
            </div>
          </div>
          <div className="my-3 d-flex justify-content-center align-items-center gap-2">
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              Prev
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <section id="cta" className="mb-3">
        <div className="container">
          <div
            className="card"
            style={{
              height: "25rem",
            }}
          >
            <div
              className="d-flex gap-4 flex-column text-center justify-content-center align-items-center p-5"
              style={{
                height: "100%",
              }}
            >
              <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quae
              </p>
              <div>
                <button type="button" className="btn btn-success">
                  Mulai Sewa Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="mb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="text-center text-lg-start">
                <h2>Frequently Asked Questions</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
            <div className="fw-bold">
              <div className="mb-2">
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </div>
              <div className="mb-2">binarcarrental@gmail.com</div>
              <div>081-233-334-808</div>
            </div>
            <div className="menu">
              <ul>
                <li>Our Services</li>
                <li>Why Us</li>
                <li>Testimonial</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <div className="fw-bold mb-2">Connect with us</div>
              <div className="d-flex gap-2">
                <span className="icon">FB</span>
                <span className="icon">IG</span>
                <span className="icon">TW</span>
                <span className="icon">EM</span>
                <span className="icon">DS</span>
              </div>
            </div>
            <div>
              <div className="fw-bold mb-2">Copyright Binar 2023</div>
              <div>
                <span className="logo"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">
            BCR
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="menu">
            <ul>
              <li>Our Services</li>
              <li>Why Us</li>
              <li>Testimonial</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
