import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import ScrollSection from "../components/ScrollSection";
import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {

    // loader state
    const [isLoading, setIsLoading] = useState(true);
    const [link , setlink] = useState("onepop")
    const [link2 , setlink2] = useState("onecon")
    // Let create async method to fetch fake data
    useEffect(() => {
      const fakeDataFetch = () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      };
  
      fakeDataFetch();
    }, []);
  

  return isLoading ? ( <Loader />) : (
    <>
      <Hero link = {link} />
      <ScrollSection />
      <Footer link = {link} link2 = {link2} />
     
 
      <ScrollToTop id="hygfctygjh" svgPath="Scroll up" smooth />
     
    </>
  );
}
