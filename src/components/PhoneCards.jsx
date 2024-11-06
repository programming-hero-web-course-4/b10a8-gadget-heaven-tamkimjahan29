/* eslint-disable react/no-unknown-property */
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const PhoneCards = () => {

    const data = useLoaderData()
    const { category } = useParams()
 


    return (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">{
        //   data.map (phones => (
        //   <Card key={phones.id} phones ={phones}></Card>))
        }

        </div>
    );
};

export default PhoneCards