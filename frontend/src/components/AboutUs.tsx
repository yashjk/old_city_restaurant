import chef from "@/app/assets/about.jpg";

const AboutUs = () => {
  return (
    <div
      className="pt-10 lg:pl-32 lg:pr-32 pl-4 pr-4 flex flex-col lg:flex-row lg:flex pb-0"
      id="about"
    >
      <div className="lg:w-2/3">
        <h1 className="text-black font-serif font-bold text-3xl w-2/3 pb-5">
          A little about us
        </h1>
        <p className="lg:w-3/4 font-serif pb-5 lg:pb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          optio reprehenderit consectetur, autem atque dignissimos voluptate
          provident? Atque consectetur distinctio illo nostrum ex tempora itaque
          pariatur ipsa maiores. Fuga, exercitationem. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Tempore quod consequuntur delectus,
          explicabo modi quis exercitationem quae odit vitae neque totam ipsa
          officia quia reprehenderit tenetur blanditiis! Totam, velit et. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Illo, molestiae
          culpa aliquid minima at quas quidem ipsam. Itaque aspernatur officiis
          repudiandae, doloribus veniam amet culpa, sequi, laudantium expedita
          sint ad.
        </p>
      </div>
      <div className="h-fit lg:h-96 w-380px lg:pt-5 pb-10">
        <img src={chef.src} />
      </div>
    </div>
  );
};

export default AboutUs;
