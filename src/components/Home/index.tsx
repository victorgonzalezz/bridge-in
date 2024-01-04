import React from "react";
import Navbar from "../Navbar";
import Carrousel from "../Carrousel";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <section>
        <main>
          <Carrousel />
        </main>
      </section>
    </>
  );
};

export default Home;
