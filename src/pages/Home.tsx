import CustomerTestimonials from "../components/home/CustomerTestimonials";
import FeaturedCars from "../components/home/FeaturedCars";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <FeaturedCars />
      <WhyChooseUs />
      <CustomerTestimonials />
    </div>
  );
};

export default Home;
