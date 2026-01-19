const SolutionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            Our Solution
          </h2>
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border">
            <p className="text-muted-foreground leading-relaxed text-lg">
              We believe young people don't lack intelligence — they lack engagement. 
              PiggyPath reimagines finance education with hands-on actions, gamified 
              challenges, and personalized learning that speaks to Gen Z. Think of 
              finance from an addictive app or fitness tracker paired at a practical, fun, and 
              relatable way. No more guesswork, no scary learning, and no pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
