import NavPageBar from "../Navigation/page"

export default function Page() {
    return (
        <div>
            <div className="flex justify-center">
                <NavPageBar />
            </div>
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                        <defs>
                            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                        </svg>
                        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-indigo-600">Introduction</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Noah</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700"> Hello! My name is Noah Medoff, and I'm a software engineer. My whole life I've loved computers, and I eventually decided that I love coding them too. Nothing quite feels like solving a programming problem, and the sweet release of dopamine you get when you do get something to work in your code. Here, come check out my awesome work.

                                    I was born and raised in Columbia, Maryland. It's a late town that's a suburb of both Baltimore and Washington D.C. It was a real nice place to grow up, but adventure and the road always called to me. When I was 21 I packed all my things in my car and hit the road, driving around the USA. I learned a lot about the world and myself. Eventually I settled down in Seattle, Washington where I reside now. I love these mountains! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}