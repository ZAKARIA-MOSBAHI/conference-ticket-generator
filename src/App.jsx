import { useContext, useEffect } from "react";
import styles from "./App.module.scss";
import Background from "./components/Background";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { AppContext } from "./context/context";
import ResultHero from "./components/ResultHero/ResultHero";

function App() {
  const { userData } = useContext(AppContext);

  return (
    <div className={styles.App}>
      <Background />
      {Object.keys(userData).length !== 5 && (
        <div className={styles.content}>
          <Header />
          <Hero />
          <Form />
        </div>
      )}
      {Object.keys(userData).length === 5 && (
        <div className={styles.content}>
          <Header />
          <ResultHero />
        </div>
      )}
    </div>
  );
}

export default App;
