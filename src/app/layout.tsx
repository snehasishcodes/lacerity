import "@/styles/globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={`${font.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}

const metadataParams = {
	title: "lacerity",
	description: "building stuff that make a change. coming soon™",
	images: ["/rounded.png"],
	icons: {
		icon: "/rounded.png",
		shortcut: "/rounded.png",
		apple: "/rounded.png"
	},
	siteName: "lacerity.com",
	themeColor: "#9f8fff",
	url: "https://lacerity.com",
	metabase: new URL("https://lacerity.com"),
	keywords: ["lacerity", "laceritydev", "lacerity.com", "laceritycom", "lacerity.dev", "developers", "genz developers"],
	twitter: {
		card: "summary",
		creator: "@laceritydev"
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	}
}

export const metadata = {
	title: metadataParams.title,
	description: metadataParams.description,
	metadataBase: metadataParams.metabase,
	icons: metadataParams.icons,
	openGraph: {
		title: metadataParams.title,
		description: metadataParams.description,
		url: metadataParams.url,
		siteName: metadataParams.siteName,
		images: metadataParams.images,
	},
	twitter: {
		title: metadataParams.title,
		description: metadataParams.description,
		creator: metadataParams.twitter.creator,
		card: metadataParams.twitter.card,
		images: metadataParams.images
	}
}

export const viewport = {
	themeColor: metadataParams.themeColor
}