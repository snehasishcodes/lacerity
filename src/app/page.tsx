"use client";

import { useRef } from "react";
import Image from "next/image";
import Card from "./card";
import SocialLink from "./social";
import VariableFontCursorProximity from "@/components/ui/variable-font-cursor-proximity";

export default function Landing() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<div className="h-screen w-full bg-[#191919] text-white overflow-hidden flex flex-col justify-center items-center gap-16 p-4">
			<div ref={containerRef} className="flex flex-col justify-center items-center gap-4 text-center">
				<div className="flex gap-8 justify-center items-center">
					<Image src="/icon.svg" alt="rounded" height={60} width={60} />
					<h2 className="text-5xl sm:text-7xl text-main font-bold">lacerity</h2>
				</div>

				<p className="text-xl font-medium">building stuff that make a <i>change</i></p>
				<span className="text-sm text-white/60">coming soon™</span>
			</div>

			<div className="flex flex-row justify-center items-center gap-6">
				<SocialLink href="https://discord.com/invite/PGSMXHBCEP">discord</SocialLink>
				<SocialLink href="https://x.com/laceritydev">twitterx</SocialLink>
				<SocialLink href="https://instagram.com/laceritycom">instagram</SocialLink>
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
