import "../public/css/style.css";
import Navbar from "../components/Navbar";
import FormSearch from "../components/SearchCar";
import Footer from "../components/Footer";
import CardCar from "../components/CardCar";

function Cars() {
    return (
        <div className="App">
            <Navbar />
            <FormSearch />
            <CardCar />
            <Footer />
        </div>
    );
}

export default Cars;
