import Image from "next/image";
import CountDown from "./CountDown";

const Offers= () => {
  return (
    <div className="bg-black w-full h-screen  flex flex-col md:flex-row">
        {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6 ">
        <h1 className=" text-white text-5xl font-bold xl:text-6xl">Delicious Burger & French Fry</h1>
        <p className="text-white xl:text-2xl">Progressively Simplify effective e-toilers and procee-centric methods
            of empowerment. Quickly pontificate parallel.</p>
              <CountDown/>
        <button className="bg-red-500 text-white rounded-md py-3 px-6">Order NOW</button>
      </div>
      {/* IMAGE CONTAINER */}
         <div className="relative w-96 h-96 flex-1">
           <Image src="/assets/offerProduct.png" alt="Offer Product" fill className="object-contain" />
            </div>

  
    </div>
  );
};

export default Offers;
