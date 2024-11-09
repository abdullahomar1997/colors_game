import React, {useCallback} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";

const ParticleComponent = () => {
    // Initialize particles
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    // Explosion effect options
    const particleOptions = {
        fullScreen: {
            enable: true, // Covers the whole screen
            zIndex: -1,
        },
        particles: {
            number: {
                value: 0, // Initial particle count
            },
            shape: {
                type: "circle",
            },
            size: {
                value: {min: 3, max: 7}, // Size of each particle
            },
            opacity: {
                value: 1,
            },
            move: {
                enable: true,
                speed: 15, // Speed of particle movement
                direction: "none",
                random: true,
                straight: false,
                outMode: "destroy", // Particles disappear after exploding outward
            },
            color: {
                value: ["#FF0000", "#FFFF00", "#FFA500"], // Red, Yellow, Orange for explosion colors
            },
        },
        emitters: {
            direction: "none",
            rate: {
                delay: 0,
                quantity: 100, // Number of particles emitted at once
            },
            life: {
                duration: 0.1, // Explosion duration in seconds
                count: 1, // Emit once per trigger
            },
            size: {
                width: 0,
                height: 0,
            },
            position: {
                x: 50, // Center explosion
                y: 50,
            },
        },
    };

    return <Particles id="tsparticles" init={particlesInit} options={particleOptions} />;
};

export default ParticleComponent;
