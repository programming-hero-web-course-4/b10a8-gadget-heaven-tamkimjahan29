import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Categories from "../components/Products";
import Products from "../components/Products";


const Home = () => {
    const data =useLoaderData()
    console.log(data);

    return (
        <div>
            {/* banner */}
            <Banner></Banner>

            {/* heading */}
            <Header></Header>

            <Heading tittle={'Explore Cutting-Edge Gadgets'}></Heading>





            {/* categories */}

        {/* <Products></Products> */}

<Products categories={data}></Products>



            {/* dynamic nested component */}
            <Outlet></Outlet>


        </div>
    );
};

export default Home;