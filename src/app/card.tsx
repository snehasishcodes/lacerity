import Image from "next/image"
import Link from "next/link"

export default function Card({ href, title, description, image }: { href: string, title: string, description: string, image: string }) {
    return (
        <Link href={href} target="_blank" className="h-fit w-full sm:w-[360px] bg-black/50 text-white flex flex-row justify-start gap-4 items-center rounded-2xl shadow-lg cursor-pointer p-4 hover:scale-95">
            <div className="h-full w-[25%] aspect-square relative">
                <Image src={image} alt={title} fill className="object-cover object-center rounded-2xl" />
            </div>

            <div className="h-full w-[75%] flex flex-col gap-1">
                <h2 className="text-xl line-clamp-1">{title}</h2>
                <p className="text-white/85 line-clamp-3">{description}</p>
            </div>
        </Link>
    )
}