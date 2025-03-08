import FoundProperties from "../components/FoundProperties";
import GoogleReviews from "../components/GoogleReviews";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Profile from "../components/Profile";
import ToPorto from "../components/ToPorto";
import Video from "../components/Video";
import WhyDelegate from "../components/WhyDelegate";

function Homepage() {
  return (
    <div>
      <Hero />
      <ToPorto />
      <Process />
      <Profile />
      <WhyDelegate />
      <FoundProperties />
      <GoogleReviews />
    </div>
  );
}

export default Homepage;
