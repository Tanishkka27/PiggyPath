import questionMark from "@/assets/question_mark.png";
import fixyMascot from "@/assets/fixy-mascot.jpg";
const MeetFixy = () => {
  return <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            {/* 3D shadow layers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 md:w-72 md:h-72 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{
              animationDelay: "0.5s"
            }} />
            </div>
            
            {/* Mascot container with 3D effects */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-secondary/40 to-primq
              ary/40 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Main mascot image with 3D transform */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-mint-light to-lavender-light p-1 shadow-2xl transform-gpu transition-all duration-500 hover:scale-105" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 60px -15px hsl(142 72% 55% / 0.3)'
            }}>
                <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                  {/* <img src={fixyMascot} alt="Fixy - Your Financial Guide" className="w-full h-full object-cover animate-float drop-shadow-2xl" style={{
                  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
                }} /> */}
                <img
                  src={questionMark}
                  alt="Question Mark"
                  className="
                    w-8/9 h-8/9
                    object-contain
                    mx-auto my-auto
                    animate-question-bounce
                    drop-shadow-xl
                  "
                />

                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce opacity-80" style={{
              animationDelay: "0s"
            }} />
              <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-secondary rounded-full animate-bounce opacity-80" style={{
              animationDelay: "0.3s"
            }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-mint rounded-full animate-bounce opacity-60" style={{
              animationDelay: "0.6s"
            }} />
            </div>

            {/* Speech bubble */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-card px-6 py-3 border border-border animate-fade-in-up z-10">
              <span className="text-sm font-medium text-foreground">In doubt?</span>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-border rotate-45" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Fixy, Your Financial Guide
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Fixy is your friendly sidekick in this journey to financial
                freedom. This virtual helper guides the user through 
                learning to save, budget, invest, track your points, complete missions.
              </p>
              <p>
                By answering your questions, Fixy helps you discover key
                concepts through interactive exercises.
              </p>
              <p>
                <span className="font-semibold text-foreground">Simplifies the Complex</span> – Explains challenging financial topics.
              </p>
              <p>
                <span className="font-semibold text-foreground">Customizes your path</span> – Tracks your progress and provides personalized 
                recommendations on decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MeetFixy;