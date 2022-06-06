import "../public/css/style.css";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import OurService from "../components/OurService";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import GettingStarted from "../components/GettingStarted";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Homepage() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <OurService />
            <WhyUs />
            <Testimonial />
            <GettingStarted />
            <FAQ />
            <Footer />
        </div>
    );
}

export default Homepage;
