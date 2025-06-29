import { Link } from "react-router-dom";
import LogoFoot from "/src/assets/CaitoBosio_logo-removebg-preview.png"

const Foot = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="container-fluid py-4 bg-light border-top sticky-bottom">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-3 mb-3 mb-md-0">
          <Link
            to="/"
            className="d-block text-center"
            onClick={handleScrollToTop}
          >
            <img
              src={LogoFoot}
              alt="Caito Bosio"
              className="img-fluid"
              width="200"
            />
          </Link>
        </div>

        <div className="col-12 col-md-3 mb-3 mb-md-0">
          <h4 className="text-center">Contacto</h4>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="me-3 mx-2">
              <a
                href="https://www.facebook.com/kito.caobosio?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                <i className="bi bi-facebook" />
              </a>
            </li>
            <li className="me-3 mx-2">
              <a
                href="https://www.instagram.com/caitobosio"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                <i className="bi bi-instagram" />
              </a>
            </li>

            <li className="me-3 mx-2">
              <a
                href="https://wa.me/+5493816755376"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                <i className="bi bi-whatsapp" />
              </a>
            </li>
            <li className="me-3 mx-2">
              <a
                href="mailto:coachcaitobosio@gmail.com"
                style={{ color: "black" }}
              >
                <i className="bi bi-envelope-at-fill" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col text-center">
          <p className="text-muted my-3 mb-0">
            &copy; Todos los derechos reservados - Ignacio Salas - 2025
          </p>
        </div>
      </div>
      <a
        href="https://wa.me/5493816755376"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-success whatsapp-btn"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
};

export default Foot;
