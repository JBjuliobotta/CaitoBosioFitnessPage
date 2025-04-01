import { useState, useEffect } from "react";
import "../css/asesories.css";
import { carouselImages } from "../../helpers/carouseldata";
import ContactImage from "/src/assets/_MG_9509.jpg";

const Asesories = () => {
  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevImg) =>
        prevImg === carouselImages.length - 1 ? 0 : prevImg + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImg]);

  return (
    <>
      <div
        className=" text-center mb-5 pt-5 bg-black bg-gradient"
        id="asesorias"
      >
        <h1 className="mt-5">ASESORÍAS PERSONALIZADAS</h1>
        <h4 style={{ color: "rgb(160, 160, 160)" }} className="mb-0 pb-0">
          Las asesorías que doy son todas personalizadas, enfocándose en los
          resultados que buscan los alumnos.
        </h4>
      </div>
      <div className="container-main">
        <div className="carousel">
          <div
            className="carouselInner"
            style={{
              backgroundImage: `url(${carouselImages[currentImg].img})`,
            }}
          >
            <div
              className="left"
              style={{ fontSize: 30 }}
              onClick={() => {
                if (currentImg > 0) {
                  setCurrentImg(currentImg - 1);
                } else {
                  setCurrentImg(carouselImages.length - 1);
                }
              }}
            >
              <i className="bi bi-chevron-left"></i>
            </div>
            <div className="center">
              <h2>{carouselImages[currentImg].title}</h2>
            </div>
            <div
              className="right"
              style={{ fontSize: 30 }}
              onClick={() => {
                if (currentImg < carouselImages.length - 1) {
                  setCurrentImg(currentImg + 1);
                } else {
                  setCurrentImg(0);
                }
              }}
            >
              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <div className="custom-hr text-center my-5"></div>
          </div>
          <div className="text-center" style={{ color: "rgb(160, 160, 160)" }}>
            <h4 className="py-0 my-0">
              Mi experiencia como entrenador físico va desde preparar a un
              plantel superior de jugadores de rugby,
            </h4>
            <h4 className="py-0 my-0">
              {" "}
              competidores del Transmontaña, artistas marciales, fisiculturismo,
              jugadores de fútbol, jugadoras de hockey,
            </h4>
            <h4 className="py-0 my-0">
              {" "}
              a personas que quieren mejorar su salud y calidad de vida.
            </h4>
          </div>
          <div className="container">
            <div className="custom-hr text-center my-5"></div>
          </div>
        </div>
        <div className="form-title">
          <h2 className="mx-3">
            ¿Querés una{" "}
            <b style={{ color: "#94c120" }}>asesoría personalizada</b>?{" "}
          </h2>
          <div className="container text-center my-5">
            <img
              src={ContactImage}
              alt=""
              height={540}
              className="rounded"
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
          </div>
          <div className="container text-center mb-5" id="contact">
            <a
              href="https://calendly.com/coachcaitobosio/reunion"
              target="_blank"
              type="button"
              className="btn text-light btn-lg contact-btn"
            >
              <i className="bi bi-calendar"> </i>AGENDAR LLAMADA
            </a>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center">
            Envíame tus datos y voy a responder lo antes posible!
          </h2>
          <div className="form-container">
            <form
              action="https://formsubmit.co/nachsalas93@gmail.com"
              method="POST"
            >
              <div className="mb-3 mt-2">
                <label htmlFor="name-lastname-input" className="form-label">
                  Nombre y Apellido* (requerido)
                </label>
                <input
                  type="text"
                  name="Nombre y Apellido"
                  className="form-control"
                  id="name-lastname-input"
                  minLength={3}
                  maxLength={50}
                  pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone-input" className="form-label">
                  Número de contacto* (requerido, incluir código de provincia)
                </label>
                <input
                  type="tel"
                  name="Número de contacto"
                  className="form-control"
                  id="phone-input"
                  minLength={4}
                  maxLength={30}
                  pattern="[0-9+\s]+"
                  required
                  autoComplete="tel"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email-input" className="form-label">
                  Correo electrónico* (requerido)
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email-input"
                  minLength={10}
                  maxLength={40}
                  required
                  autoComplete="email"
                />
              </div>

              {/* FORMSUBIT CONFIGURATION */}

              <input
                type="hidden"
                name="_autoresponse"
                value="¡Solicitud de Asesoría recibida! Te estaré contactando dentro de las proximas 24 hs - Coach Caito Bosio"
              />

              <input type="hidden" name="_template" value="basic" />
              <input
                type="hidden"
                name="_next"
                value="https://caitobossiocoach.netlify.app/asesories"
              />

              <input
                type="hidden"
                name="_subject"
                value="NUEVA SOLICITUD DE ASESORIA RECIBIDA - CAITOBOSIOCOACH WEB"
              />

              <div className="button-container">
                <button type="submit" className="btn btn-light mb-2">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Asesories;
