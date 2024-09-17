import menu from "@/app/assets/offers1.jpg";
import reserveTable from "@/app/assets/offers2.jpg";
import orderOnline from "@/app/assets/offers3.jpg";

const Offers = () => {
  return (
    <div className="pt-10 pb-10 lg:pl-32 lg:pr-32 pl-4 pr-4" id="menu">
      <h1 className="text-black font-serif font-bold text-xl">Our offers</h1>
      <p className="text-gray-400 font-serif text-xl">
        Main services from our restaurant specially for you
      </p>
      <div className="flex flex-col justify-between h-480px pt-10 lg:flex-row lg:h-fit">
        <div className="custom-background2 h-36 w-auto lg:h-700px lg:w-380px">
          <h1 className="text-white text-lg font-bold font-serif lg:text-2xl pt-20 pl-4 lg:pt-660 lg:w-32 lg:pl-4">
            Menu of dishes
          </h1>
        </div>
        <div className="custom-background3 h-36 w-auto lg:h-700px lg:w-380px">
          <h1 className="text-white text-lg font-bold font-serif pt-20 pl-4 lg:text-2xl lg:pt-660 w-56 lg:pl-4">
            Reserve table online
          </h1>
        </div>
        <div className="custom-background4 h-36 w-auto lg:h-700px lg:w-380px">
          <h1 className="text-white text-lg font-bold font-serif pt-20 pl-4 lg:text-2xl lg:pt-660 lg:w-32 lg:pl-4">
            Order online
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Offers;
