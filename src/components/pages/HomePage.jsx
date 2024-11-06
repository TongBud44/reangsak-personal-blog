import { NavBar } from "../Nav-bar";
import { HeroSection } from "../HeroSection";
import { Footer } from "../Footer";
import ArticleSection from "../ArticleSection";

function HomePage() {
    return (
      <div>
        <NavBar />
        <HeroSection />
        <ArticleSection />
        <Footer />
      </div>
    );
  }
  
  export default HomePage;