import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation combining data science expertise with engineering fundamentals
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Master's Degree */}
          <Card className="p-8 bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    Completed Apr 2025
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  Master of Science in Data Science
                </h3>
                <h4 className="text-xl font-semibold text-primary mb-4">
                  University of Memphis
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2023 – Apr 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Memphis, TN</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-foreground mb-3">Core Coursework</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "Machine Learning & AI",
                      "Statistical Analysis", 
                      "Data Mining & Analytics",
                      "Deep Learning",
                      "Big Data Technologies",
                      "Data Visualization"
                    ].map((course, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-foreground mb-3">Skills Developed</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "R", "TensorFlow", "PyTorch", "scikit-learn", "Statistical Modeling", "Data Analysis", "Machine Learning"].map((skill, i) => (
                      <Badge 
                        key={i}
                        variant="secondary"
                        className="bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Bachelor's Degree */}
          <Card className="p-8 bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  Bachelor of Technology in Mechanical Engineering
                </h3>
                <h4 className="text-xl font-semibold text-primary mb-4">
                  Malla Reddy Engineering College
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>July 2017 – May 2021</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-foreground mb-3">Foundation Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Engineering Fundamentals", "Problem Solving", "Analytical Thinking", "Project Management", "Technical Documentation"].map((skill, i) => (
                      <Badge 
                        key={i}
                        variant="secondary"
                        className="bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;