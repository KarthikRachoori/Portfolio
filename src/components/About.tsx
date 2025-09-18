import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Development",
      description:
        "Expert in React, Node.js, TypeScript, and modern web technologies",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Integration",
      description:
        "Specialized in OpenAI APIs, AWS Bedrock, and AI-powered solutions",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Cloud & Databases",
      description:
        "Proficient in AWS, DynamoDB, MySQL, MongoDB, and cloud infrastructure",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description:
        "Led teams of 5+ developers with proven results and process improvements",
    },
  ];

  const skills = [
    "Python",
    "TypeScript",
    "JavaScript",
    "React",
    "Node.js",
    "React Native",
    "HTML",
    "CSS",
    "jQuery",
    "FastAPI",
    "Express.js",
    "Bootstrap",
    "Tailwind CSS",
    "AWS",
    "AWS Bedrock",
    "AWS Amplify",
    "DynamoDB",
    "EC2",
    "Azure",
    "MySQL",
    "MongoDB",
    "MS SQL",
    "OpenAI API",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Git",
    "Figma",
    "Stripe",
    "Google OAuth",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I’m Karthik Rachoori, a results-driven full-stack software engineer
            with a strong foundation in data science and AI/ML. Currently at
            Remo AI, I develop multi-agent AI assistants powered by AWS Bedrock,
            React, and Node.js that automate workflows and improve productivity.
            Previously, I contributed to Phenom Cloud, where I built generative
            AI chat systems, and at Pixentia Solutions, where I led a team
            delivering enterprise applications and large-scale data migration
            projects. My expertise spans React, Node.js, Python, AWS, and
            machine learning frameworks like TensorFlow and PyTorch. I’m
            passionate about creating user-centered, high-performance systems
            that combine AI with scalable cloud infrastructure.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-0 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
