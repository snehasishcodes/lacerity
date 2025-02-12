import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";
import { FaXTwitter, FaInstagram, FaDiscord, FaEnvelope, FaGithub } from "react-icons/fa6";
import SocialLink from "./social";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Landing() {
	return (
		<div className="h-dvh w-dvw overflow-hidden flex flex-col justify-center items-center gap-4 p-8">
			<MagicCard
				className="w-full sm:w-96 h-fit flex flex-col gap-6 p-6"
				gradientSize={75}
				gradientColor={"#262626"}
				gradientFrom={"#9F8FFF"}
				gradientTo={"#9F8FFF"}
			>
				<div className="w-full h-fit flex flex-row justify-start items-center gap-4">
					<Image src={"/square.svg"} alt="icon-lacerity" height={60} width={60} className="rounded-xl object-center object-cover" />

					<div className="w-full h-full flex flex-col gap-2 p-1">
						<h2 className="text-main text-2xl font-semibold leading-none">lacerity</h2>
						<p className="text-white/75 text-sm leading-none">@lacerity</p>
					</div>
				</div>

				<div className="w-full flex flex-col py-2">
					<h2 className="text-white/75">creative developers building stuff. soon to be an internet company.</h2>
				</div>

				<div className="w-full flex flex-row justify-start items-center flex-wrap gap-6 pt-2">
					<SocialLink href="mailto:mail@lacerity.com"><FaEnvelope size={20} /></SocialLink>
					<SocialLink href="https://x.com/laceritycom"><FaXTwitter size={20} /></SocialLink>
					<SocialLink href="https://instagram.com/laceritycom"><FaInstagram size={20} /></SocialLink>
					<SocialLink href="https://discord.com/invite/PGSMXHBCEP"><FaDiscord size={20} /></SocialLink>
					<SocialLink href="https://github.com/lacerity"><FaGithub size={20} /></SocialLink>
				</div>
			</MagicCard>

			<Link href="https://mongocat.lacerity.com" target="_blank" className="w-full sm:w-96 h-fit">
				<MagicCard
					className="w-full sm:w-96 h-fit flex flex-col gap-6 p-6 cursor-pointer"
					gradientSize={50}
					gradientColor={"#011F2B"}
					gradientFrom={"#01EC64"}
					gradientTo={"#01EC64"}
				>
					<div className="w-full h-fit flex flex-row justify-start items-center gap-2">
						<Image src={"/mongocat.svg"} alt="icon-lacerity" height={30} width={30} className="rounded-lg object-center object-cover" />

						<div className="w-full h-full flex flex-col gap-2 p-1">
							<h2 className="text-mongocat text-lg font-semibold leading-none flex items-center gap-2">
								mongocat
								<Badge className="text-xs bg-mongocat hover:bg-mongocat text-black px-[12px] py-[1px]">alpha</Badge>
							</h2>
						</div>
					</div>

					<div className="w-full flex flex-col pt-2">
						<p className="text-white/75 text-sm">mongodb-based, user-friendly, content management system with no-code setup.</p>
					</div>
				</MagicCard>
			</Link>
		</div>
	);
}
