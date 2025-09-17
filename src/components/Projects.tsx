import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Users, Database, Smartphone, Brain, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "REMO AI - Personal AI Assistant",
      company: "Remo AI LLC", 
      icon: <Brain className="w-6 h-6" />,
      description: "Comprehensive AI assistant platform featuring multi-agent orchestration system with specialized agents for task management, email handling, content creation, and data analysis.",
      achievements: [
        "Built multi-agent AI system using AWS Bedrock for intelligent task automation",
        "Created full-stack applications using React, Node.js, and TypeScript achieving <200ms response times",
        "Built cross-platform mobile app using React Native with 90% code reuse",
        "Integrated AI services automating workflows and reducing manual effort by 25%",
        "Managed cloud infrastructure using AWS Amplify, DynamoDB, and EC2 maintaining 95%+ uptime"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS Bedrock", "AWS Amplify", "DynamoDB", "EC2", "React Native", "Stripe", "Google APIs"],
      impact: "25% reduction in manual effort",
      featured: true,
      private: true,
      websiteUrl: "https://remo.ai",
      githubUrl: "https://github.com/KarthikRachoori/remo-ai-assistant"
    },
    {
      title: "ShopPlaza E-commerce Mobile Application",
      company: "Personal Project",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Cross-platform e-commerce mobile app using React Native 0.79.2 with TypeScript for iOS and Android platforms, featuring complete RESTful API backend.",
      achievements: [
        "Built RESTful API backend with Node.js, Express.js, and MySQL featuring 10+ endpoints",
        "Implemented complete user authentication system with login, registration, and password recovery",
        "Created responsive product catalog with 4 category filters and integrated shopping cart management",
        "Achieved 99.9% API uptime with <200ms response time and 100% test coverage using Jest"
      ],
      technologies: ["React Native", "TypeScript", "Node.js", "Express.js", "MySQL", "React Navigation", "Axios", "Jest"],
      impact: "100% test coverage achieved",
      featured: false,
      private: false,
      githubUrl: "https://github.com/KarthikRachoori/ShopPlaza"
    },
    {
      title: "Face Recognition System using Self-Supervised Learning",
      company: "Academic Project",
      icon: <Brain className="w-6 h-6" />,
      description: "Developed and compared two deep learning approaches for face recognition: SimCLR self-supervised learning and ResNet18 transfer learning on 1,318 celebrity face images.",
      achievements: [
        "Implemented SimCLR contrastive learning framework with ResNet18 encoder and projection head",
        "Achieved 71% Top-1 accuracy and 98% Top-3 accuracy using supervised ResNet18 transfer learning",
        "Engineered comprehensive data preprocessing pipeline including Haar Cascade face detection",
        "Built end-to-end ML pipeline with custom PyTorch datasets and evaluation metrics"
      ],
      technologies: ["Python", "PyTorch", "OpenCV", "scikit-learn", "TensorFlow", "ResNet18", "SimCLR"],
      impact: "71% Top-1 accuracy achieved",
      featured: false,
      private: false,
      githubUrl: "https://github.com/KarthikRachoori/Face-Recognition-using-Self-Supervised-Learning-SimCLR-and-Transfer-Learning"
    },
    {
      title: "Supermarket Sales Prediction (R)",
      company: "Data Science Project",
      icon: <Database className="w-6 h-6" />,
      description: "Analyzed 10,000+ supermarket transactions to predict product sales quantity using linear regression modeling with advanced feature engineering.",
      achievements: [
        "Applied feature engineering with label/one-hot encoding and VIF analysis",
        "Optimized performance by reducing predictors from 17 to 5 key features",
        "Delivered actionable insights for inventory planning and demand forecasting",
        "Validated model performance through MAE, MSE, RMSE, and R² metrics"
      ],
      technologies: ["R", "tidyverse", "caret", "corrplot", "Statistical Modeling", "Data Visualization"],
      impact: "Reliable forecasting model delivered",
      featured: false,
      private: false,
      githubUrl: "https://github.com/KarthikRachoori/supermarket-sales-prediction"
    },
    {
      title: "AI-Powered Conversational Chat Application",
      company: "Phenom Cloud",
      icon: <Users className="w-6 h-6" />,
      description: "Generative AI product integrating OpenAI LLMs for real-time multi-user chat, boosting user engagement significantly.",
      achievements: [
        "Built real-time multi-user chat with OpenAI LLMs integration",
        "Implemented advanced AI message formatting for enhanced clarity",
        "Created session-based threaded chat interface with export functionality",
        "Added role-based access control and collaboration features"
      ],
      technologies: ["OpenAI LLMs", "FastAPI", "Python", "React.js", "Material UI", "AG Grid", "Plotly.js"],
      impact: "30% boost in user engagement",
      featured: false,
      private: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of impactful projects demonstrating expertise in AI/ML, full-stack development, and data science
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project, index) => (
            <Card key={index} className="p-8 mb-12 bg-gradient-card border-0 shadow-hero hover:shadow-glow transition-all duration-500 group">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium mb-4">{project.company}</p>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="outline" className="text-accent border-accent">
                      {project.impact}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
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

                  <div className="flex gap-3">
                    {!project.private && project.title === "REMO AI - Personal AI Assistant" && (
                      <>
                        <Button 
                          variant="default" 
                          className="bg-gradient-primary hover:scale-105 transition-all duration-300"
                          onClick={() => window.open(project.websiteUrl, '_blank', 'noopener,noreferrer')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Website
                        </Button>
                        <Button 
                          variant="outline" 
                          className="hover:scale-105 transition-all duration-300"
                          onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      </>
                    )}
                    {!project.private && project.title !== "REMO AI - Personal AI Assistant" && (
                      <Button 
                        variant="outline" 
                        className="hover:scale-105 transition-all duration-300"
                        onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    )}
                    {project.private && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Badge variant="outline" className="text-muted-foreground border-muted-foreground">
                          Private Project
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-0 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">{project.company}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <Badge variant="outline" className="text-accent border-accent text-xs">
                    {project.impact}
                  </Badge>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="secondary"
                        className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs bg-muted">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  {!project.private ? (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Source Code
                    </Button>
                  ) : (
                    <div className="w-full flex justify-center">
                      <Badge variant="outline" className="text-muted-foreground border-muted-foreground text-xs">
                        Private Project
                      </Badge>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
