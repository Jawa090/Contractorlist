import { Link } from "react-router-dom";
import { Check, Smartphone, Users, Shield, Clock, ArrowRight } from "lucide-react";

const GuideAndValueSection = () => {
    const guides = [
        {
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop",
            author: "Robert Tschudi",
            role: "Author/Reviewer",
            date: "Apr 30, 2025",
            title: "Remodel a Kitchen",
            description: "Budget for kitchen remodel costs based on factors like scope, appliances, kitchen size, location, flooring and countertop materials, labor, and more.",
        },
        {
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop",
            author: "Jeff Botelho",
            role: "Author/Reviewer",
            date: "Nov 4, 2025",
            title: "Repair a Water Heater",
            description: "Use this guide to budget for water heater repair costs based on factors such as heater type, repair issue, parts, labor, and more.",
        },
        {
            image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=600&auto=format&fit=crop",
            author: "ContractorsList Team",
            role: "Editorial",
            date: "Dec 11, 2025",
            title: "How Much Does Roof Repair Cost in 2025?",
            description: "Use this guide to budget for roof repair costs based on factors such as roof condition, materials, size, repair type and severity, and more.",
        },
    ];

    const valueProps = [
        {
            icon: Clock,
            title: "Get to a hire faster.",
            description: "Share details about your project in your own words, so we can find your best fit.",
        },
        {
            icon: Users,
            title: "Only see local, trusted pros.",
            description: "We'll only show you pros we're confident can do the job.",
        },
        {
            icon: Shield,
            title: "A job done right—guaranteed.",
            description: "If the job isn't done as agreed you could get up to $2,500 back.",
            link: { text: "Terms apply.", href: "/terms" },
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Guide to Homeowners & Contractors */}
                <div className="mb-20">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                        Guide to Homeowners <span className="text-primary">&amp; Contractors</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {guides.map((guide, index) => (
                            <Link
                                key={index}
                                to={`/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="group block"
                            >
                                {/* Image */}
                                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4">
                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Author & Date */}
                                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                                    <span className="font-semibold text-gray-700">{guide.author}</span>
                                    {" - "}
                                    <span>{guide.role}</span>
                                    {" · "}
                                    <span>{guide.date}</span>
                                </p>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                    {guide.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                                    {guide.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* What ContractorsList.com is Actually! */}
                <div className="bg-gradient-to-br from-orange-50 via-amber-50/50 to-yellow-50/30 rounded-3xl p-8 sm:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Column - Text Content */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                What <span className="text-primary italic">Contractorslist.com</span> is Actually!
                            </h2>
                            <p className="text-gray-600 mb-10 text-base leading-relaxed">
                                Every day, millions of customers like you rely on Contractorslist to care for their residential, commercial and govt. projects—and we've got your back if things don't go as planned.
                            </p>

                            <div className="space-y-8">
                                {valueProps.map((prop, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 w-1 bg-primary/30 rounded-full"></div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                                                {prop.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {prop.description}
                                                {prop.link && (
                                                    <Link to={prop.link.href} className="text-gray-900 underline ml-1 hover:text-primary">
                                                        {prop.link.text}
                                                    </Link>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Phone Mockup */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                {/* Phone Frame */}
                                <div className="w-[280px] sm:w-[320px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                                    {/* Screen */}
                                    <div className="bg-white rounded-[2.5rem] overflow-hidden">
                                        {/* Status Bar */}
                                        <div className="bg-gray-900 text-white px-6 py-2 flex justify-between items-center text-xs">
                                            <span>9:41</span>
                                            <div className="flex gap-1">
                                                <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                                                <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                                                <div className="w-6 h-3 bg-white rounded-sm"></div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 min-h-[400px] bg-white">
                                            {/* Close button */}
                                            <div className="flex justify-end mb-4">
                                                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                                                    <span className="text-gray-400 text-sm">×</span>
                                                </div>
                                            </div>

                                            {/* Avatar Group */}
                                            <div className="flex justify-center mb-4">
                                                <div className="flex -space-x-3">
                                                    {[
                                                        "bg-blue-500",
                                                        "bg-green-500",
                                                        "bg-purple-500",
                                                        "bg-orange-500",
                                                    ].map((color, i) => (
                                                        <div
                                                            key={i}
                                                            className={`w-10 h-10 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-sm font-bold`}
                                                        >
                                                            {String.fromCharCode(65 + i)}
                                                        </div>
                                                    ))}
                                                    <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600 text-xs font-bold">
                                                        30+
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h4 className="text-center text-lg font-bold text-gray-900 mb-6">
                                                Finding top rated pros<br />for your project
                                            </h4>

                                            {/* Checklist */}
                                            <div className="space-y-3 mb-8">
                                                <div className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    <span className="text-sm text-gray-600">Lawn & Garden</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    <span className="text-sm text-gray-600">Irrigation / Sprinkler Repair</span>
                                                </div>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-2/3 bg-primary rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuideAndValueSection;
