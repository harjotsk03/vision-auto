import { BookDetailHome } from "../components/bookDetailHome";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { OurCustomers } from "../components/ourCustomers";
import { OurVision } from "../components/ourVision";

export const Home = () => {

    return(
        <div>
            <Hero />
            <OurVision />
            <OurCustomers />
            <BookDetailHome />
            <Footer />
        </div>
    )
}