import Image from "next/image";
import PizzaImage from "/public/assets/pizza.png";

const MenuItem = () => {
  return (
    <div className="flex-col justify-center items-center bg-white shadow p-3 border rounded-lg cursor-pointer hover:bg-slate-100 transition-all">
      <div className="flex justify-center">
        <Image
          src={PizzaImage}
          width={100}
          Height={100}
          alt="pizza-image"
          className=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-center text-lg font-semibold text-slate-600">
          Pepperoni Pizza
        </h3>
        <p className="text-center text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="mt-4 w-full py-2 px-4 bg-red-500 text-white rounded-full hover:brightness-105 duration-200 active:bg-red-600">
          Add to cart $12
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
