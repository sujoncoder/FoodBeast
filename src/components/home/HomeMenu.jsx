import MenuItem from "./MenuItem";

const HomeMenu = () => {
  return (
    <section>
      <div>
        <h3 className="flex justify-center font-semibold text-slate-600">
          CHECK OUT
        </h3>
        <h2 className="flex justify-center text-4xl italic font-bold text-red-500">
          Menu
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4 py-10">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default HomeMenu;
