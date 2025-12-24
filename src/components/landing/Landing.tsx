import Feature from "./Feature";
import Hero from "./Hero";
import Support from "./Support";
import Usecase from "./Usecase";
import WalkthroughSection from "./Walkthrough";



export default function Landing() {
  return (
    <>
      <Hero />
      <Feature />
      <WalkthroughSection />
      <Support />
      <Usecase />
    </>
  );
}
