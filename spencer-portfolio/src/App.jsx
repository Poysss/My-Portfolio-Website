import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "./particlesjs-config.json";
import './App.css'

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesConfig}
        />
      )}
      <div className="scroll-container">
        <section className="section home">
          <h1>Welcome</h1>
        </section>
        <section className="section section-one">
          <h1>Section One</h1>
        </section>
        <section className="section section-two">
          <h1>Section Two</h1>
        </section>
        <section className="section section-three">
          <h1>Section Three</h1>
        </section>
      </div>
    </>
  );
}

export default App