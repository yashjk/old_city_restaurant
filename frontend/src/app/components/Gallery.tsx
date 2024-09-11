import food1 from "@/app/assets/food1.jpg";
import food2 from "@/app/assets/food2.jpg";
import food3 from "@/app/assets/food3.jpg";
import food4 from "@/app/assets/food4.jpg";
import food5 from "@/app/assets/food5.jpg";

const Gallery = () => {
  return (
    <div className="pt-10 pb-10 pl-32 pr-32">
      <h1 className="text-black font-serif font-bold text-lg">Gallery</h1>
      <div className="h-614px flex flex-row w-fit justify-center ml-auto mr-auto">
        <div>
          <div className="flex flex-row">
            <img src={food1.src} className="w-72 mr-5 mb-5" />
            <img src={food2.src} className="w-96 mr-5 mb-5" />
          </div>
          <div className="flex flex-row">
            <img src={food5.src} className="w-96 mr-5 mb-5" />
            <img src={food4.src} className="w-72 mr-5 mb-5" />
          </div>
        </div>
        <img src={food3.src} className="w-auto h-600px" />
      </div>
    </div>
  );
};

export default Gallery;
