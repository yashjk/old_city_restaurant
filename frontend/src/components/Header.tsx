import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between p-5 items-center">
        <div className="font-serif">
          <h1 className="text-black text-center text-2xl font-bold">
            Old City
          </h1>
          <p className="text-black text-center text-sm font-semibold">
            Restaurant
          </p>
        </div>
        <div className="font-serif hidden lg:flex flex-row space-x-8 h-fit items-center">
          <Link href="#menu">
            <p>Menu</p>
          </Link>
          <Link href="#about">
            <p>About Us</p>
          </Link>
          <Link href="order">
            <p>Order online</p>
          </Link>
          <Link href="#footer">
            <p>Contact Us</p>
          </Link>
        </div>
        <button className="font-serif bg-black text-white p-3 justify-center text-sm text-center">
          Reserve a table
        </button>
      </div>
      <div className="font-serif flex flex-row space-x-8 h-fit items-center w-screen justify-center border border-t-gray-200 border-t-1 border-b-0 border-l-0 border-r-0 pt-3 pb-3 pl-4 pr-4 lg:hidden">
        <p>Menu</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
      <div className="custom-background font-serif">
        <h1 className="text-white text-4xl font-bold p-16 pb-5 lg:text-7xl lg:pb-5 lg:p-32">
          A place to warm your hearts with family and friends
        </h1>
        <p className="text-white text-lg font-normal p-16 pb-5 pt-0 w-auto lg:w-2/3 lg:p-32 lg:pb-5 lg:pt-0">
          Discover a cozy haven where warmth and togetherness flourish, creating
          lasting memories with family and friends in a space that feels like
          home.
        </p>
        <button className="font-serif bg-white text-black font-bold p-3 justify-center text-sm text-center ml-16 mb-32 lg:ml-32">
          Reserve a table
        </button>
      </div>
    </>
  );
};

export default Header;
