const initParticles = () => {
  if (!window.particlesJS) return;

  window.particlesJS("particles-js", {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 900
        }
      },

      color: {
        value: "#9ca3af"
      },

      shape: {
        type: "circle"
      },

      opacity: {
        value: 0.45,
        random: true
      },

      size: {
        value: 2,
        random: true
      },

      line_linked: {
        enable: true,
        distance: 140,
        color: "#9ca3af",
        opacity: 0.18,
        width: 1
      },

      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out"
      }
    },

    interactivity: {
      detect_on: "canvas",

      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },

        onclick: {
          enable: false
        },

        resize: true
      },

      modes: {
        grab: {
          distance: 160,
          line_linked: {
            opacity: 0.4
          }
        }
      }
    },

    retina_detect: true
  });
};

const loadParticles = () => {
  const script = document.createElement("script");

  script.src = "/particles.js";
  script.onload = initParticles;

  document.body.appendChild(script);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadParticles);
} else {
  loadParticles();
}