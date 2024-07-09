import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import PizzaImage from "/public/assets/pizza.png";

/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <section className="grid grid-cols-2 py-20">
      <div className="space-y-4">
        <h1 className="text-slate-700 text-5xl font-bold leading-normal">
          Everything's Better with <span className="text-red-500">Pizza</span>
        </h1>
        <p className="text-slate-500 my-4 text-lg">
          Pizza is the delightful indulgence that completes any day. It's the
          simple pleasure that brings immense joy to life, one delicious slice
          at a time.
        </p>

        <div className="flex items-center gap-4">
          <button className="flex uppercase items-center justify-center text-white bg-red-500 shadow rounded-full hover:brightness-105 duration-200 active:bg-red-600 px-6 py-2 gap-2">
            Order now
            <FaRegArrowAltCircleRight />
          </button>

          <button className="flex text-slate-600 items-center justify-center   gap-2">
            Learn more
            <FaRegArrowAltCircleRight />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={PizzaImage}
          layout={"fill"}
          objectFit={"contain"}
          alt="pizza-image"
          className="w-48 h-48"
        />
      </div>
    </section>
  );
};

export default Hero;
