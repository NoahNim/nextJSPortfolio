import Link from "next/link";

export default function NavPageBar() {
    return (
        <div>
            <Link href={"../Introduction"}>Intro</Link>
            <Link href="../Portfolio">Portfolio</Link>
            <Link href="../Contact">Contact</Link>
        </div>
    )
}