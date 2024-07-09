import { FaMotorcycle, FaSearch, FaShoppingCart } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="flex flex-wrap -mx-4">
          {[
            {
              icon: FaSearch,
              title: "Find Your Favorite Food",
              description:
                "Search for your favorite dishes and restaurants in your area.",
            },
            {
              icon: FaShoppingCart,
              title: "Place Your Order",
              description:
                "Add your desired items to the cart and place your order.",
            },
            {
              icon: FaMotorcycle,
              title: "Fast Delivery",
              description: "Enjoy fast and reliable delivery to your doorstep.",
            },
          ].map((step, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg border text-center hover:bg-white duration-300">
                <step.icon className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
