import { ShieldHalf, Code, Laptop, School, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Web Developer & Computer Science Student
            </h3>

            <p className="text-muted-foreground">
              I’m a 3rd-year Computer Science student at De La Salle Lipa with a strong passion for creating functional, responsive, and visually engaging websites. 
              I enjoy turning ideas into interactive digital experiences and continuously explore new tools and technologies to improve my craft.
            </p>

            <p className="text-muted-foreground">
              I am currently pursuing a degree in Computer Science, where I am
              honing my skills in algorithms, data structures, and software
              engineering principles. My passion for coding drives me to
              continuously learn and adapt to new challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className=  "font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Developing responsive websites and interactive applications through academic projects and self-initiated work, 
                    using HTML, CSS, JavaScript, and modern frameworks like React.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                   Designing intuitive and visually appealing user interfaces, applying principles of accessibility and usability to 
                   enhance project outcomes.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldHalf className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Collaboration</h4>
                  <p className="text-muted-foreground">
                    Working in team-based academic projects from planning to delivery, 
                    using agile-inspired workflows to ensure timely and effective results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
