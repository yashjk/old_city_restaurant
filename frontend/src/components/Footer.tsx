import insta from "@/assets/insta.png";
import fb from "@/assets/fb.png";
import tiktok from "@/assets/tik-tok.png";
import wa from "@/assets/whatsapp.png";
import yt from "@/assets/yt.png";

const Footer = () => {
	return (
		<div id="footer">
			<div className="bg-black text-white p-10 font-serif flex flex-col justify-between pt-10 pb-10 pr-4 pl-4 lg:pr-32 lg:pl-32 border-b-slate-200 border-b">
				<div className="text-left flex justify-between">
					<div>
						<h1 className="font-serif font-bold text-3xl w-2/3 pb-5">
							Old City Restaurant
						</h1>
						<p className="text-xl font-bold">Working hours</p>
						<p>Monday - Sunday</p>
						<p>6:00 AM - 2:00 AM</p>
						<div className="flex flex-row pt-8 justify-start w-full">
							<img src={insta.src} className="pr-2" />
							<img src={fb.src} className="pr-2" />
							<img src={tiktok.src} className="pr-2" />
							<img src={wa.src} className="pr-2" />
							<img src={yt.src} className="pr-2" />
						</div>
					</div>
					<div className="flex flex-col justify-between w-1/3">
						<div className="text-right flex flex-col lg:flex-row justify-around">
							<p>Career</p>
							<p>Menu</p>
							<p>About us</p>
							<p>Contact us</p>
							<p>Legal</p>
						</div>
					</div>
				</div>
			</div>
			<p className="font-serif text-gray-300 p-3 bg-gray-900 text-center">
				Old City Restaurant - All rights reserved
			</p>
		</div>
	);
};

export default Footer;
