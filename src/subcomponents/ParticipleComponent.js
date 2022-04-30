import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import styled from 'styled-components'

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`

const ParticipleComponent = (props) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Box>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: props.theme === 'light' ? "#ffffff" : "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.1,
              },
            },
          },
          particles: {
            color: {
              value: props.theme === 'light' ? "#000000" : "#ffffff",
            },
            links: {
              color: props.theme === 'light' ? "#000000" : "#ffffff",
              distance: 150,
              enable: true,
              opacity: 1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: false,
        }}
      />
    </Box>
  )
}

export default ParticipleComponent