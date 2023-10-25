
import Banner from "../Components/Banner/Banner";
import Brands from "../Components/Brand/Brands";
import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Fotter/Footer";
import Review from "../Components/Review/Review";
import ShowReview from "../Components/Review/ShowReview";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Brands></Brands>
            <Faq></Faq>
            <Review></Review>
            <ShowReview></ShowReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;