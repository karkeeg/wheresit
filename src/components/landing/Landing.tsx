import Feature from "./Feature";
import Hero from "./Hero";
import Support from "./Support";
import Usecase from "./Usecase";
import WalkthroughSection from "./Walkthrough";
import GroupSharing from "./GroupSharing";


export default function Landing() {
  return (
    <>
      <Hero />
      <Feature />
      <WalkthroughSection />
      <GroupSharing />
      <Usecase />
      <Support />
    </>
  );
}
