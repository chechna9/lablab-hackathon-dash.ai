import Navbar from "../../components/navbar/navbar";
import HeroSection from "./hero_section";
import WhatWeDoSection from "./what_we_do_section";
// import HeroSection from "./hero_section";

const LandingPage = () => {
    return ( 
        <main className="relative">
           <Navbar/>
           <HeroSection/>
           <WhatWeDoSection/>
        </main>
     );
}
 
export default LandingPage;