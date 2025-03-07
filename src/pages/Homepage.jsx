import FoundProperties from "../components/FoundProperties";
import GoogleReviews from "../components/GoogleReviews";
import Hero from "../components/Hero";
import Process from "../components/Process";
import WhyDelegate from "../components/WhyDelegate";

function Homepage() {
  return (
    <div>
      <Hero />
      <Process />
      <WhyDelegate />
      <FoundProperties />
      <GoogleReviews />
    </div>
  );
}

export default Homepage;
