import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "María González",
      role: "Cliente desde 2023",
      text: "Caito transformó completamente mi rutina de entrenamiento. En solo 3 meses logré resultados que no había conseguido en años. Su método es increíblemente efectivo.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Atleta de Rugby",
      text: "Como jugador de rugby, necesitaba mejorar mi fuerza y potencia. Caito diseñó un plan específico que me ayudó a mejorar mi rendimiento en la cancha.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Cliente Fitness",
      text: "Gracias a Caito logré mi objetivo de perder 15kg y ganar masa muscular. Su enfoque personalizado y su motivación constante fueron clave para mi éxito.",
      rating: 5
    },
    {
      name: "Luis Fernández",
      role: "Entusiasta del Fitness",
      text: "Caito no solo es un excelente entrenador, sino también un gran motivador. Su método Fitness Develop es realmente efectivo y fácil de seguir.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <i key={i} className="bi bi-star-fill text-warning"></i>
    ));
  };

  return (
    <div className="container my-5 py-5">
      <div className="text-center mb-5">
        <h2>LO QUE DICEN MIS CLIENTES</h2>
        <p className="text-muted">Testimonios reales de personas que transformaron su vida con el método Fitness Develop</p>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="testimonial-card bg-dark text-light p-4 rounded">
            <div className="text-center mb-3">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>
            
            <blockquote className="blockquote text-center mb-4">
              <p className="mb-0 fs-5">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </p>
            </blockquote>
            
            <div className="text-center">
              <h5 className="mb-1">{testimonials[currentTestimonial].name}</h5>
              <small className="text-muted">{testimonials[currentTestimonial].role}</small>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <div className="d-flex justify-content-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`btn btn-sm ${index === currentTestimonial ? 'btn-success' : 'btn-outline-success'}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Ver testimonio ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 