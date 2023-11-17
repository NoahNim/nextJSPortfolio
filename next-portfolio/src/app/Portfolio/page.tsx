import Link from "next/link"
import Image from "next/image"
import NavPageBar from "../Navigation/page"

export default function Page() {
    return (
        <div>
            <div className="flex justify-center">
                <NavPageBar />
            </div>
            <div className="flex flex-col justify-center space-y-3">
                <ul>
                    <li>
                        <div className="max-w-fit">
                            <div className="ml-7">
                                <Link href="https://badbusiness-ai.onrender.com/">
                                    <Image
                                        src="/BadBusinessAI.png"
                                        width={1500}
                                        height={900}
                                        alt="Picture of Bad Business AI"
                                    />
                                </Link>
                            </div>
                            <div>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bad Business</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">     Bad Business AI is an AI app that generates bad business ideas at the click of a button. You can also make an account to store the generated bad ideas.</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="ml-96">
                                <Link href="https://sale-e-w-supabase-mz2q4lmt7-imartinez921.vercel.app/">
                                    <Image
                                        src="/Sale-E-Image.png"
                                        width={1500}
                                        height={900}
                                        alt="Picture of Bad Business AI"
                                    />
                                </Link>
                            </div>
                            <div>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sale-E</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700"> SALE-E is a webapp madefor a Google AI and Square API combined hackathon. It analyzes a customers purchasing habits, and creates an email campaign for inventory items to target specific customers.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}