const ProblemSection = () => {
  return (
    <section className="py-14 bg-background">
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
            The Problem
          </h2>
          
          <div className="bg-card rounded-3xl p-10 md:p-14 shadow-[0_18px_40px_rgba(178,102,255,0.35)] border border-border">

            
            <p className="text-muted-foreground leading-relaxed text-xl">
              Traditional financial education is broken. Gen Z graduates from college 
              without knowing how to budget, save, or invest. Textbooks are dry, 
              workshops are boring, and social media tips are often misleading. 
              Financial apps exist today but none truly speak the language of 
              our generation or make it genuinely fun to build financial wellness.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
