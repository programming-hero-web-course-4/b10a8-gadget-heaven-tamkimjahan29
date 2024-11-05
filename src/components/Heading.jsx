

const Heading = ({tittle}) => {
    return (
        <div className="flex flex-col w-full justify-center items-center my-12"> 
        <h1 className=" mb-4 text-xl md:text-2xl  lg:text-3xl font-bold ">{tittle}</h1>
            
        </div>
    );
};

export default Heading;