import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer I",
      company: "Remo AI LLC",
      location: "Fairfax, VA",
      period: "June 2025 – Present",
      type: "Full-time",
      achievements: [
        "Developing Remo Personal AI assistant using React, Node.js, TypeScript, and AWS Amplify to streamline user interactions",
        "Integrated multi-agent orchestration with AWS Bedrock LLMs to automate task workflows, reducing manual effort by approximately 25%",
        "Building an API dashboard and developer portal aimed at accelerating third-party integration speed, enhancing ecosystem connectivity",
        "Managing cloud infrastructure including AWS Amplify, DynamoDB and EC2, maintaining uptime above 95% with minimal downtime",
        "Contributing to product development efforts that led to strong user satisfaction and steady growth during early beta phases"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS Bedrock", "AWS Amplify", "DynamoDB", "EC2", "React Native", "Stripe", "Google APIs"],
      current: true
    },
    {
      title: "Software Developer Intern",
      company: "Phenom Cloud",
      location: "Irving, TX",
      period: "Jan 2025 – Apr 2025",
      type: "Internship",
      achievements: [
        "Developed a Generative AI product integrating OpenAI LLMs for real-time multi-user chat, boosting user engagement by 30%",
        "Improved AI message clarity and usability through advanced formatting, enhancing response quality by 25%",
        "Built a session-based threaded chat interface with export functionality, increasing offline analysis efficiency by 50%",
        "Implemented role-based access control and collaboration features, enhancing data security and teamwork by 40%"
      ],
      technologies: ["OpenAI LLMs", "FastAPI", "Python", "React.js", "Git", "Uvicorn", "AG Grid", "Material UI", "Plotly.js"],
      current: false
    },
    {
      title: "Project Support – Data Migration",
      company: "Pixentia Solutions India Pvt Ltd",
      location: "Hyderabad, India (Remote U.S.)",
      period: "Aug 2023 – Dec 2023",
      type: "Contract",
      achievements: [
        "Provided remote support for migrating SumTotal to SABA databases, ensuring 100% data accuracy and on-time project completion",
        "Facilitated knowledge transfer and maintained project continuity post-relocation"
      ],
      technologies: ["Database Migration", "SumTotal", "SABA", "Data Analysis", "SQL"],
      current: false
    },
    {
      title: "Software Engineer",
      company: "Pixentia Solutions India Pvt Ltd",
      location: "Hyderabad, India",
      period: "June 2021 – Jul 2023",
      type: "Full-time",
      achievements: [
        "Led a team of 5 developers, ensuring project delivery with a 20% reduction in development time through streamlined workflows",
        "Developed front-end solutions with HTML, CSS, Bootstrap, jQuery, and JavaScript, increasing UI responsiveness by 35%",
        "Created complex reports and dashboards using Jasper Studio, improving decision-making speed by 25%",
        "Refactored legacy codebases, boosting application performance and stability by 30%",
        "Coordinated team activities, improving collaboration and delivery timelines by 15%"
      ],
      technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "JavaScript", "Jasper Studio", "Team Leadership"],
      current: false
    },
    {
      title: "Software Engineer Trainee",
      company: "Pixentia Solutions India Pvt Ltd",
      location: "Hyderabad, India",
      period: "Apr 2021 – June 2021",
      type: "Training",
      achievements: [
        "Completed intensive training on company coding standards, front-end technologies, and software development processes",
        "Assisted senior developers with coding, debugging, and testing, gaining practical experience in agile project environments",
        "Participated in code reviews and collaborated with the team to enhance software quality"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Software Development", "Agile"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            4+ years of delivering impactful solutions in software development, AI integration, and team leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    {exp.current && (
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        Current
                      </Badge>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    {exp.company}
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <Badge variant="outline">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h5 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Key Achievements
                </h5>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="font-semibold text-foreground mb-3">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge 
                      key={i}
                      variant="secondary"
                      className="bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;