import { useState, useEffect } from "react";
import "../css/asesories.css";
import { carouselImages } from "../../helpers/carouseldata";
import ContactImage from "/src/assets/_MG_9509.webp";
import CalendlyWidget from "../Calendly";

const Asesories = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevImg) =>
        prevImg === carouselImages.length - 1 ? 0 : prevImg + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImg]);

  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(formData.name)) {
      newErrors.name = "El nombre solo puede contener letras y espacios";
    }

    // Validar teléfono
    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    } else if (!/^[0-9+\s-]+$/.test(formData.phone)) {
      newErrors.phone = "El teléfono solo puede contener números, +, espacios y guiones";
    } else if (formData.phone.replace(/[\s-]/g, "").length < 8) {
      newErrors.phone = "El teléfono debe tener al menos 8 dígitos";
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simular envío (en producción esto sería una llamada real a la API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", phone: "", email: "" });
      
      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

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
        <div className="container mb-5">
          <CalendlyWidget />
        </div>
        <div className="container">
          <h2 className="text-center">
            Envíame tus datos y voy a responder lo antes posible!
          </h2>
          
          {submitSuccess && (
            <div className="alert alert-success text-center" role="alert">
              <i className="bi bi-check-circle-fill me-2"></i>
              ¡Mensaje enviado con éxito! Te contactaré dentro de las próximas 24 horas.
            </div>
          )}

          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-2">
                <label htmlFor="name-input" className="form-label">
                  Nombre y Apellido* (requerido)
                </label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  minLength={3}
                  maxLength={50}
                  required
                  autoComplete="name"
                  placeholder="Ej: Juan Pérez"
                />
                {errors.name && (
                  <div className="invalid-feedback">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="phone-input" className="form-label">
                  Número de contacto* (requerido, incluir código de provincia)
                </label>
                <input
                  type="tel"
                  name="phone"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  id="phone-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                  minLength={4}
                  maxLength={30}
                  required
                  autoComplete="tel"
                  placeholder="Ej: +54 381 1234567"
                />
                {errors.phone && (
                  <div className="invalid-feedback">
                    {errors.phone}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email-input" className="form-label">
                  Correo electrónico* (requerido)
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  minLength={10}
                  maxLength={40}
                  required
                  autoComplete="email"
                  placeholder="Ej: juan.perez@email.com"
                />
                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn text-light btn-lg contact-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send"> </i>ENVIAR MENSAJE
                    </>
                  )}
                </button>
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Asesories;
