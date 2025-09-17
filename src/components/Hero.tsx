import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-foreground px-6 pt-20 sm:pt-8 max-w-6xl mx-auto">
        <div className="animate-in fade-in duration-1000 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content - Left Side */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">KARTHIK</span>
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                RACHOORI
              </span>
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <div className="h-px bg-muted-foreground/30 flex-1 max-w-20" />
              <p className="text-xl md:text-2xl font-light tracking-wide text-muted-foreground">
                Software Engineer & AI Developer
              </p>
              <div className="h-px bg-muted-foreground/30 flex-1 max-w-20 lg:hidden" />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Results-driven Full-Stack Software Engineer with expertise in React, Node.js, Python, and AWS cloud technologies. 
              Proven track record of developing scalable web and mobile applications, integrating AI/ML solutions, and building robust cloud infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md"
                onClick={() => scrollToSection('experience')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a 
                href="https://www.linkedin.com/in/karthikrachoori" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-md"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:rachoorikarthik94@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-md"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/KarthikRachoori" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-md"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Profile Photo - Right Side */}
          <div className="flex-shrink-0">
            <img 
              src="/images/profile-photo.png"
              alt="Karthik Rachoori - Professional Photo"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 object-cover border-2 border-border"
            />
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;