import { CustomerReviews } from '../components/customerReviews';
import { Footer } from '../components/footer';
import { GoogleReview } from '../components/googleReview';

export const Reviews = () => {
    return(
        <div>
            <GoogleReview />
            <CustomerReviews />
            <Footer />
        </div>
    )
}