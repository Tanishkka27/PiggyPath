import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient pt-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-mint-light rounded-full blur-3xl opacity-60" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-lavender-light rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 pt-16 pb-24">
        {/* Text content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in-up">
            Stop Guessing.
          </h1>
          <h1
            className="text-4xl md:text-6xl font-bold text-gradient mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Start Playing
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            PiggyPath turns budgeting, saving and investing into a fun game. Level
            up your financial life and build real wealth — Score a win and start
            your adventure!
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg gap-2">
              Join Waitlist <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-lg gap-2 border-border hover:bg-muted"
            >
              <Play className="w-5 h-5" /> Watch Demo
            </Button>
          </div>
        </div>

        {/* Phone mockups */}
        <div className="relative max-w-4xl mx-auto overflow-visible">
          <div className="flex justify-center items-end gap-6">

            {/* Left phone */}
            <div className="relative z-25 animate-float" style={{ animationDelay: "0s" }}>
              <div className="absolute -inset-6 bg-mint/30 blur-3xl rounded-full -z-10" />
              <div className="isolate w-48 h-96 bg-white rounded-3xl border border-border shadow-xl flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-mint/20 rounded-2xl mx-auto mb-3" />
                  <div className="h-3 bg-muted rounded-full w-20 mx-auto mb-2" />
                  <div className="h-2 bg-muted rounded-full w-16 mx-auto" />
                </div>
              </div>
            </div>

            {/* Middle phone (TOP LAYER) */}
            <div className="relative z-50 animate-float" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-8 bg-lavender/50 blur-3xl rounded-full -z-10" />
              <div className="isolate w-56 h-[420px] bg-white rounded-3xl border border-border shadow-2xl flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-2xl mx-auto mb-4" />
                  <div className="h-4 bg-muted rounded-full w-28 mx-auto mb-3" />
                  <div className="h-2 bg-muted rounded-full w-20 mx-auto mb-2" />
                  <div className="h-2 bg-muted rounded-full w-24 mx-auto" />
                </div>
              </div>
            </div>

            {/* Right phone */}
            <div className="relative z-25 animate-float" style={{ animationDelay: "0.4s" }}>
              <div className="absolute -inset-6 bg-mint/30 blur-3xl rounded-full -z-10" />
              <div className="isolate w-48 h-96 bg-white rounded-3xl border border-border shadow-xl flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-mint/20 rounded-2xl mx-auto mb-3" />
                  <div className="h-3 bg-muted rounded-full w-20 mx-auto mb-2" />
                  <div className="h-2 bg-muted rounded-full w-16 mx-auto" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
