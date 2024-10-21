import "./App.css";
import { NavBar } from "./components/Nav-bar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import ArticleSection from "./components/ArticleSection";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default App;
