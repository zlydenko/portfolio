import React from "react";
import styled from "styled-components";

import Particles from "react-particles-js";

const Background = props => (
  <Particles
    style={{
      backgroundColor: props.bg || "white",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -999,
      overflow: "hidden"
    }}
    params={{
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          value: props.color
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#ffffff"
          },
          polygon: {
            nb_sides: 9
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 70.65071747021703,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: props.color,
          opacity: 1,
          width: 3
        },
        move: {
          enable: true,
          speed: 3.206824121731046,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
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
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      retina_detect: true
    }}
  />
);

export default Background;
