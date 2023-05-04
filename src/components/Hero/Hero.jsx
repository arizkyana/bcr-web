import { Container } from "react-bootstrap";
import { RentButton } from "../../pages/Home/components/RentButton";
import PropTypes from "prop-types";
import { SearchForm } from "../SearchForm/SearchForm";

const Hero = (props) => {
  const {
    withRentButton = true,
    withSearchForm = false,
    withHeroContent = true,
    withSearchResultForm = false,
  } = props;
  return (
    <section
      id="hero"
      className="mb-3"
      style={{
        position: "relative",
      }}
    >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="logo"></span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#features"
                >
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Container className="hero-content">
        {withHeroContent && (
          <div className="row g-0">
            <div className="col-sm-12 col-lg-6">
              <div className="row">
                <div className="col-lg-10">
                  <h1>Sewa dan Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quos, unde ab! Consequatur culpa perspiciatis doloremque
                    distinctio vero, corrupti sunt ad impedit suscipit optio
                    harum aperiam natus similique esse enim totam?
                  </p>
                  {withRentButton ? <RentButton /> : <></>}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="hero-image">
                <picture>
                  <source
                    media="(max-width: 575px)"
                    srcset="./images/img_car.png"
                  />
                  <source
                    media="(min-width: 800px)"
                    srcset="./images/img_car@3x.png"
                  />
                  <img
                    src="./images/img_car@3x.png"
                    className="img-fluid object-fit-cover"
                    alt="img_car"
                  />
                </picture>
              </div>
            </div>
          </div>
        )}
      </Container>
      {withSearchForm && <SearchForm />}
    </section>
  );
};

// Hero.propTypes = {
//   withRentButton: PropTypes.bool,
//   withSearchForm: PropTypes.bool,
//   withHeroContent: PropTypes.bool,
//   withSearchResultForm: PropTypes.bool,
// };

export default Hero;
