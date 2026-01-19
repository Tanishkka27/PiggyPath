const teamMembers = [
  { name: "John Smith", role: "CEO & Founder", emoji: "👨‍💼" },
  { name: "David Johnson", role: "CTO", emoji: "👨‍💻" },
  { name: "Mary Johnson", role: "Head of Design", emoji: "👩‍🎨" },
  { name: "Patricia Davis", role: "Lead Developer", emoji: "👩‍💻" },
  { name: "Mary Johnson", role: "Marketing Director", emoji: "👩‍💼" },
];

const MeetTeam = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Meet Our Team
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          A team that works hard behind the scenes to bring you a fun finance experience, building tools that make money management feel effortless.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="w-28 h-28 bg-mint-light rounded-full mx-auto mb-4 flex items-center justify-center shadow-soft">
                <span className="text-4xl">{member.emoji}</span>
              </div>
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
