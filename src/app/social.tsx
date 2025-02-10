import Link from "next/link";

export default function SocialLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} target="_blank" className="text-lg text-white/75 hover:text-white cursor-pointer hover:scale-95 underline">
            {children}
        </Link>
    )
}