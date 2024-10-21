import "./App.css";
import CostumerPage from "./LandingPage/Home/CostumerPage";
import ClientPage from "./LandingPage/Home/ClientPage";
import CommunityPage from "./LandingPage/Home/CommunityPage";
import DemoPage from "./LandingPage/Home/DemoPage";
import Hero from "./LandingPage/Home/Hero";
import Learn2Page from "./LandingPage/Home/Learn2Page";
import LearnPage from "./LandingPage/Home/LearnPage";
import MarketingPage from "./LandingPage/Home/MarketingPage";
import Memberpage from "./LandingPage/Home/Memberpage";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";



function App() {
  return (
    <>
    <Navbar/>
      <Hero />
      <ClientPage />
      <CommunityPage/>
      
      <LearnPage />
      <Memberpage />
      <Learn2Page />
      

      <CostumerPage/>
      
      <MarketingPage />
      <DemoPage />
      <Footer/>
     
    </>
  );
}

export default App;
