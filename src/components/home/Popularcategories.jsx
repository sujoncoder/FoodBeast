import { FaHamburger, FaIceCream, FaPizzaSlice } from "react-icons/fa";

const PopularCategories = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Popular Categories
        </h2>
        <div className="flex flex-wrap">
          {[
            { icon: FaPizzaSlice, name: "Pizza" },
            { icon: FaHamburger, name: "Burgers" },
            { icon: FaIceCream, name: "Desserts" },
          ].map((category, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow text-center duration-300 hover:bg-slate-100">
                <category.icon className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
