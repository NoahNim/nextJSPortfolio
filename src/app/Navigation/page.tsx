import Link from "next/link";

export default function NavPageBar() {
    return (
        <div className="flex">
            <Link href={"../Introduction"} className="flex-auto w-64">Intro</Link>
            <Link href="../Portfolio" className="flex-auto w-64">Portfolio</Link>
            <Link href="../Contact" className="flex-auto w-64">Contact</Link>
        </div>
    )
}