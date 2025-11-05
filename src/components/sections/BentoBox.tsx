import { Container } from "../shared/Container";

const features = [
    {
        title: "Effortless Activity Logging",
        description: "Let AI automatically recognize your exercises and record your workouts—no manual entry needed.",
        image: "https://github.com/adrianhajdin/brainwave/blob/main/src/assets/services/service-2.png?raw=true"
    },
    {
        title: "Personalized Workout Plans",
        description: "Receive AI-generated workout routines tailored to your fitness level and goals.",
        image: "https://github.com/adrianhajdin/brainwave/blob/main/src/assets/services/service-2.png?raw=true"
    },
    {
        title: "Real-Time Form Feedback",
        description: "Get instant AI-driven feedback on your exercise form to prevent injuries and improve performance.",
        image: "https://github.com/adrianhajdin/brainwave/blob/main/src/assets/services/service-2.png?raw=true"
    }
];

export default function BentoBox() {
    return (
        <section className="py-12 md:py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div 
                            key={idx}
                            className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 dark:bg-white/5 border border-white/10 shadow-2xl p-6 hover:-translate-y-1 transition-transform"
                        >
                            
                            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-violet-500/10 to-transparent pointer-events-none"></div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-heading-1">{feature.title}</h2>
                                <p className="mt-4 text-heading-3">{feature.description}</p>
                                <img 
                                    src={feature.image} 
                                    alt={feature.title} 
                                    className="mt-10 rounded-2xl w-full object-cover size-full object-top" 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}