import "../css/home.css";
import AboutMe from "./AboutMe";
import Asesories from "./Asesories";
import CardImage1 from "/src/assets/_MG_9566.jpg";
import CardImage2 from "/src/assets/_MG_9297.jpg";
import CardImage3 from "/src/assets/_MG_9493.jpg";

const Home = () => {
  return (
    <>
      <div className="container text-center mt-5 pt-5" id="index">
        <h6 className="pb-3" style={{ color: "rgb(160, 160, 160)" }}>
          <b style={{ color: "#94c120" }}>Caito Bosio</b> | Entrenador Coach
        </h6>
        <h1>
        Logra un cuerpo atlético con entrenamientos efectivos en solo 90 días 
        </h1>
        <h6 className="mt-3" style={{ color: "rgb(160, 160, 160)" }}>
          (Sin necesidad de tener experiencia previa en entrenamientos ni de
          eliminar ningún tipo de alimento de tu dieta)
        </h6>
      </div>
      <div className="container text-center my-5">
        <iframe
          width="960"
          height="540"
          src="https://www.youtube.com/embed/C2lBVRPgFMg?autoplay=1&mute=1"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded"
        ></iframe>
      </div>
      <div className="container text-center mb-5">
        <a
          href="https://calendly.com/coachcaitobosio/reunion"
          target="_blank"
          type="button"
          className="btn text-light btn-lg contact-btn"
        >
          <i className="bi bi-calendar"> </i>AGENDAR LLAMADA
        </a>
      </div>
      <div id="method">
        <div className="text-center bg-black bg-gradient pt-5">
          <h1 className="mb-4 mt-5">
            CONOCE EL MÉTODO{" "}
            <b style={{ color: "#94c120" }}>&quot;FITNESS DEVELOP&quot;</b>
          </h1>
          <div className="mx-3">
            <h4 style={{ color: "rgb(160, 160, 160)" }} className="mb-0 pb-0">
            En el vas a explorar todo tu potencial fitness,{" "}
            </h4>
            <h4 style={{ color: "rgb(160, 160, 160)" }} className="mb-0 pb-0">
            lograremos un desarrollo íntegro de tus capacidades,
            </h4>
            <h4 style={{ color: "rgb(160, 160, 160)" }} className="mb-0 pb-0">
            lo que nos dará una mentalidad fuerte para concretar esas metas físicas que tanto buscas.
            </h4>
          </div>
        </div>
        <div className="container">
          <div className="custom-hr text-center my-5"></div>
        </div>
        <div className="text-center mb-5">
          <h2>Constituido por 3 bloques:</h2>
        </div>
        <div className="container">
          <div className="container">
            <div className="row align-items-center "></div>
            <div className="col-md-6 text-center">
              <img
                src={CardImage1}
                alt=""
                height={540}
                style={{objectFit: "cover", maxWidth: "100%"}}
                className="rounded mx-1 mb-5"
              />
            </div>
            <div className="col-md-6 bg-black bg-gradient rounded">
              <h2 className="px-5 py-3" style={{ color: "#94c120" }}>
                1. ANÁLISIS
              </h2>
              <h4 className="px-5">
                Cada persona es diferente, por eso cada entrenamiento va a tener
                estímulos diferentes de acuerdo a tu nivel de experiencia,
                objetivos y disponibilidad.
              </h4>
            </div>
            <div className="container">
              <div className="custom-hr text-center my-5"></div>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center"></div>
            <div className="col-md-6 text-center order-md-2">
              <img
                src={CardImage2}
                alt=""
                height={540}
                style={{objectFit: "cover", maxWidth: "100%"}}
                className="rounded mx-1 my-5"
              />
            </div>
            <div className="col-md-6 order-md-1 bg-black bg-gradient rounded">
              <h2 className="px-5 py-3" style={{ color: "#94c120" }}>
                2. EJECUCIÓN
              </h2>
              <h4 className="px-5">
                Una vez tengamos definida tu idea, conozcamos tu punto de
                partida ahí empezamos a darle forma a tu visión, creamos tu plan
                y lo ponemos en marcha.
              </h4>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center "></div>
            <div className="container">
              <div className="custom-hr text-center my-5"></div>
            </div>
            <div className="col-md-6 text-center">
             <div className="container">
             <img
                src={CardImage3}
                alt=""
                height={540}
                width={360}
                style={{objectFit: "cover", maxWidth: "100%"}}
                className="rounded my-5"
              />
             </div>
            </div>
            <div className="col-md-6 bg-black bg-gradient rounded">
              <h2 className="px-5 py-3" style={{ color: "#94c120" }}>
                3. AJUSTE
              </h2>
              <h4 className="px-5">
                Realizamos chequeos para ver como te va con el plan y lo
                ajustamos aún más a tus requerimientos, siempre trabajando con
                objetivos semanales y diarios
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="custom-hr text-center"></div>
      </div>
      <div className="pb-5">
        <div className="text-center">
          <h2 className="mt-5">ASESORATE HOY MISMO:</h2>
          <h6 className="mb-3" style={{ color: "rgb(160, 160, 160)" }}>
            (Tu consulta es 100% gratuita)
          </h6>
        </div>
        <div className="container text-center ">
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
      <div className="">
        <AboutMe />
      </div>
      <div>
        <Asesories />
      </div>
     
    </>
  );
};

export default Home;
