import Image from "next/image";
import Card from "./card";
import SocialLink from "./social";

export default function Landing() {
	return (
		<div className="h-screen w-full bg-[#191919] text-white overflow-hidden flex flex-col justify-center items-center gap-16 p-4">
			<div className="flex flex-col justify-center items-center gap-4 text-center">
				<div className="flex gap-8 justify-center items-center">
					<Image src="/icon.svg" alt="rounded" height={60} width={60} />
					<h2 className="text-5xl sm:text-7xl text-main font-bold">lacerity</h2>
				</div>

				<p className="text-xl text-white/90">genz developers building genz stuff</p>
				<span className="text-xs text-white/60">soon™ to be a company</span>
			</div>

			<div className="flex flex-row justify-center items-center gap-6">
				<SocialLink href="">discord</SocialLink>
				<SocialLink href="">twitterx</SocialLink>
				<SocialLink href="">instagram</SocialLink>
			</div>

			<div className="flex flex-col justify-center items-center gap-4">
				<h2 className="text-xl text-main/90">work in progress</h2>
				<Card
					href="https://mongocat.lacerity.com"
					title="mongocat"
					description="mongodb based user-friendly content management system"
					image="mongocat.svg"
				/>

				<span className="text-xs text-white/60">development updates are available on discord</span>				
			</div>
		</div>
	);
}
