import { Gamepad2, Award, Users, TrendingUp } from "lucide-react";
const features = [{
  icon: Gamepad2,
  title: "Play",
  description: "PiggyPath gamifies your learning and saving with levels and challenges. Build healthy money habits while having fun and unlock achievements along the way.",
  variant: "mint" as const
}, {
  icon: Award,
  title: "Learn",
  description: "Master key financial concepts through interactive lessons. From budgeting to investing, learn at your own pace while building real-world skills.",
  variant: "lavender" as const
}, {
  icon: Users,
  title: "Apply",
  description: "PiggyPath works well with your existing financial accounts, cards, and banks. Track spending with ease, set goals, and watch your progress grow.",
  variant: "mint" as const
}, {
  icon: TrendingUp,
  title: "Build",
  description: "Build lasting financial confidence. Start with the basics, level up to advanced strategies, and create a solid foundation for your future.",
  variant: "lavender" as const
}];
const WhyPiggyPath = () => {
  return <section id="why" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Why PiggyPath?</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <div key={feature.title} className={`${feature.variant === "mint" ? "feature-card-mint" : "feature-card-lavender"} opacity-0 animate-fade-in-up`} style={{
          animationDelay: `${index * 0.1}s`,
          animationFillMode: "forwards"
        }}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.variant === "mint" ? "bg-primary/20" : "bg-secondary/20"}`}>
                <feature.icon className={`w-6 h-6 ${feature.variant === "mint" ? "text-primary" : "text-secondary"}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhyPiggyPath;