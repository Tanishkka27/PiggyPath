const teamMembers = [
  { name: "John Smith", role: "CEO & Founder", image: "/team/john.jpg" },
  { name: "David Johnson", role: "CTO", image: "/team/david.jpg" },
  { name: "Mary Johnson", role: "Head of Design", image: "/team/mary-design.jpg" },
  { name: "Patricia Davis", role: "Lead Developer", image: "/team/patricia.jpg" },
  { name: "Mary Johnson", role: "Marketing Director", image: "/team/mary-marketing.jpg" },
];

const MeetTeam = () => {
  // duplicate list for seamless infinite loop
  const loopMembers = [...teamMembers, ...teamMembers];

  return (
    <section
      id="team"
      className="min-h-screen bg-background flex items-center overflow-hidden py-10"
    >
      {/* ALL STYLES INLINE – NO EXTERNAL FILES */}
      <style>{`
        @keyframes waveScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .wave-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: waveScroll 70s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* SVG CLIP PATHS (SMOOTH CURVES) */}
      <svg width="0" height="0">
        <defs>
          {/* Wave A: top IN, bottom OUT */}
          <clipPath id="waveInOut" clipPathUnits="objectBoundingBox">
            <path
              d="
                M0,0.08
                C0.25,0 0.75,0 1,0.08
                L1,1
                C0.75,0.82 0.25,0.82 0,1
                Z
                
              "
            />
          </clipPath>

          {/* Wave B: top OUT, bottom IN */}
          <clipPath id="waveOutIn" clipPathUnits="objectBoundingBox">
            <path
              d="
                M0,0
                C0.25,0.18 0.75,0.18 1,0
                L1,0.88
                C0.75,1 0.25,1 0,0.88
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Meet Our Team
        </h2>

        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
          Smooth motion. Same rhythm. One continuous wave.
        </p>

        {/* WAVE VIEWPORT */}
        <div className="overflow-hidden">
          <div className="wave-track">
            {loopMembers.map((member, index) => {
              const isOdd = index % 2 === 0;

              return (
                <div key={index} className="text-center flex-shrink-0">
                  <div
                    className="
                      bg-mint-light shadow-soft overflow-hidden
                      w-52 h-72
                      sm:w-56 sm:h-80
                      md:w-64 md:h-88
                      lg:w-72 lg:h-96
                    "
                    style={{
                      clipPath: isOdd
                        ? "url(#waveInOut)"
                        : "url(#waveOutIn)",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="mt-4 font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
