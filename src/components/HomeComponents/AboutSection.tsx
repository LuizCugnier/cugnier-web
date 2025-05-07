import { GlobeIcon, Users } from "lucide-react";


export default function AboutSection() {

    const features = [
        {
            name: "Expert Team",
            description: "Our team consists of certified professionals with decades of collective experience in various industries.",
            icon: Users
        },
        {
            name: "Global Reach",
            description: "With operations across multiple countries, we can provide services no matter where you are located.",
            icon: GlobeIcon
        }
    ]
    return (
        <div id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark-neutral sm:text-4xl">
                        Trust, Integrity, Competence
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-small-text lg:mx-auto">
                        With over 20 years of experience in the TIC industry, we've earned the trust of leading businesses worldwide.
                    </p>
                </div>

                <div className="mt-16">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-light-accent1 text-white">
                                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div className="ml-16">
                                    <h3 className="text-lg font-medium text-dark-neutral">{feature.name}</h3>
                                    <p className="mt-2 text-base text-small-text">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="px-6 py-8 sm:p-10">
                        <div className="text-center">
                            <h3 className="text-2xl font-medium text-dark-neutral">Our Mission</h3>
                            <p className="mt-4 text-lg text-small-text">
                                To provide industry-leading testing, inspection, and certification services that enable our clients to deliver products and services of the highest quality, safety, and reliability to their customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
