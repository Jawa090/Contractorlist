import React from "react";
import { LucideIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReduxHeader from "@/components/ReduxHeader";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

interface Feature {
    title: string;
    description: string;
}

interface ProductServiceTemplateProps {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    features: Feature[];
    benefits: string[];
    ctaText: string;
    ctaLink?: string;
    onCtaClick?: () => void;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    accentColor: string;
    heroImage?: string;
    secondaryImage?: string;
}

const ProductServiceTemplate: React.FC<ProductServiceTemplateProps> = ({
    title,
    subtitle,
    description,
    icon: Icon,
    features,
    benefits,
    ctaText,
    onCtaClick,
    secondaryCtaText,
    secondaryCtaLink,
    accentColor,
    heroImage,
    secondaryImage,
}) => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <ReduxHeader />

            <main className="flex-1 pt-8 pb-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-4 pb-12 lg:pt-8 lg:pb-20">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
                        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                    </div>

                    <div className="container mx-auto px-4 relative">
                        <div className={`grid lg:items-center gap-12 ${heroImage ? 'lg:grid-cols-2 text-left' : 'max-w-4xl mx-auto text-center'}`}>
                            <div>
                                <Badge variant="outline" className="mb-6 px-4 py-1.5 uppercase tracking-widest text-xs font-black border-accent/20 text-accent bg-accent/5 rounded-full">
                                    {subtitle}
                                </Badge>
                                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-foreground mb-8 uppercase leading-tight tracking-tighter">
                                    {title}
                                </h1>
                                <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium">
                                    {description}
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto h-14 px-10 text-lg font-black uppercase tracking-wider bg-accent hover:bg-accent/90 shadow-xl shadow-yellow-500/20"
                                        onClick={onCtaClick}
                                    >
                                        {ctaText}
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="w-full sm:w-auto h-14 px-10 text-lg font-black uppercase tracking-wider border-2 hover:bg-muted"
                                        onClick={() => {
                                            window.location.href = secondaryCtaLink;
                                        }}
                                    >
                                        {secondaryCtaText}
                                    </Button>
                                </div>
                            </div>

                            {heroImage && (
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-accent/10 rounded-[40px] blur-2xl group-hover:bg-accent/20 transition-all duration-500 -z-10" />
                                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-border shadow-2xl">
                                        <img
                                            src={heroImage}
                                            alt={title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-black uppercase mb-4">Core Features</h2>
                            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group p-8 bg-card border border-border rounded-3xl hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-black uppercase mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="bg-foreground text-background rounded-[40px] p-8 lg:p-20 relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-1/3 h-full bg-accent/10 -z-10 blur-3xl opacity-30" />

                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h2 className="text-4xl lg:text-5xl font-black uppercase mb-8 leading-tight">
                                        Why choose <span className="text-accent">{title}</span>?
                                    </h2>
                                    <div className="space-y-6">
                                        {benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start gap-4">
                                                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1 flex-shrink-0">
                                                    <CheckCircle2 className="w-4 h-4 text-foreground" />
                                                </div>
                                                <p className="text-lg font-medium opacity-90">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="aspect-square bg-accent/20 rounded-full blur-3xl absolute inset-0 -z-10" />
                                    <div className="bg-card/10 backdrop-blur-md rounded-3xl border border-white/10 p-4 lg:p-8">
                                        <div className="w-full h-full aspect-[4/3] bg-muted/20 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/5 shadow-2xl">
                                            {secondaryImage ? (
                                                <img
                                                    src={secondaryImage}
                                                    alt="Benefits"
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <>
                                                    <Icon className="w-32 h-32 text-accent/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
                                                    <div className="relative z-10 text-center">
                                                        <p className="text-4xl font-black uppercase tracking-widest text-white/20">Preview</p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProductServiceTemplate;
