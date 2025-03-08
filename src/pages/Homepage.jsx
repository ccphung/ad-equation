import FoundProperties from "../components/FoundProperties";
import GoogleReviews from "../components/GoogleReviews";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Profile from "../components/Profile";
import WhyDelegate from "../components/WhyDelegate";

function Homepage() {
  return (
    <div>
      <Hero />
      <Process />
      <Profile />
      <WhyDelegate />
      <FoundProperties />
      <GoogleReviews />
    </div>
  );
}

export default Homepage;
