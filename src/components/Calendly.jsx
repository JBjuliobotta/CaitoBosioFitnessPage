import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/nachsalas93/30min"
        style={{ width: "100%", height: "100%", border: "none" }}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
