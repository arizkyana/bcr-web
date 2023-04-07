import { Container, Row, Col } from "react-bootstrap";

export const Features = () => {
  return (
    <section id="features" className="mb-3">
      <Container>
        <Row>
          <div className="col-sm-12 col-lg-6">
            <div className="p-5 p-lg-0">
              <img
                src="./assets/images/woman.png"
                className="img-fluid object-fit-cover"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div>
              <ul>
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};
