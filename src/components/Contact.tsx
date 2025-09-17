import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "rachoorikarthik94@gmail.com",
      href: "mailto:rachoorikarthik94@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(901) 219-1273",
      href: "tel:+19012191273"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Memphis, TN 38111",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/karthikrachoori",
      color: "text-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/KarthikRachoori",
      color: "text-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background text-foreground relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-muted rounded-lg text-foreground">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <div className="text-foreground group-hover:text-primary-foreground transition-colors duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Card */}
          <Card className="p-8 bg-gradient-card border shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you need a skilled developer for your team or want to discuss 
                a new project, I'd love to hear from you. Let's build something amazing together.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={() => window.location.href = 'mailto:rachoorikarthik94@gmail.com'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me an Email
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://www.linkedin.com/in/karthikrachoori', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 text-muted-foreground">
          <p>Located in Virginia, US • Open to new opportunities and exciting projects</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;