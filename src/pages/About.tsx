
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, BookOpen, Heart, Star, Target } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "Honey Drop was founded with a vision to provide excellent education rooted in godly character."
    },
    {
      year: "2015",
      title: "First Graduation",
      description: "Our first batch of students graduated with outstanding WAEC results, setting the standard for excellence."
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Added new facilities including a modern science laboratory and expanded our primary school section."
    },
    {
      year: "2020",
      title: "Digital Integration",
      description: "Successfully implemented digital learning platforms during the pandemic, ensuring continuous education."
    },
    {
      year: "2023",
      title: "Recognition",
      description: "Awarded 'Best School in Character Development' by the Regional Education Board."
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "98% WAEC Success Rate",
      description: "Consistently high performance in West African Examinations Council"
    },
    {
      icon: Users,
      title: "500+ Graduates",
      description: "Alumni excelling in universities and careers across Africa"
    },
    {
      icon: BookOpen,
      title: "15+ Years",
      description: "Of dedicated service to quality education"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Positive influence on over 1000 families in our community"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming a beacon of educational excellence in our community, 
            discover the inspiring journey of Honey Drop.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-blue-100 leading-relaxed">
                To provide exceptional education that nurtures academic excellence while building strong moral character, 
                preparing students to become responsible leaders and positive contributors to society.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-yellow-100 leading-relaxed">
                To be the leading educational institution in Africa, known for producing scholars who are excellent in learning 
                and godly in character, making positive impacts in their communities and beyond.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">The Journey of Excellence</h2>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="text-lg mb-6">
              Honey Drop was born from a dream to create an educational institution that would not only
              excel academically but also instill strong moral values in young minds. Founded in 2010 by a group 
              of passionate educators and community leaders, our school began with just 50 students and a handful 
              of dedicated teachers.
            </p>
            
            <p className="text-lg mb-6">
              Our founding principle, "Excellent in Learning and Godly in Character," has guided every decision 
              we've made over the years. We recognized that true education must address both the intellectual 
              and moral development of our students, preparing them not just for academic success but for meaningful 
              lives of service and leadership.
            </p>
            
            <p className="text-lg mb-6">
              What started as a modest primary school has grown into a comprehensive educational institution 
              serving students from Primary 1 through Senior Secondary 3. Our growth has been driven by our 
              unwavering commitment to quality education, innovative teaching methods, and strong community partnerships.
            </p>
            
            <p className="text-lg">
              Today, we are proud to be recognized as one of the leading schools in our region, with alumni 
              who have gone on to excel in universities across Africa and beyond. Our success is measured not 
              just in academic achievements, but in the positive impact our graduates are making in their communities 
              as leaders, entrepreneurs, and changemakers.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Journey Through the Years</h2>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <Card className="bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="bg-white/90 backdrop-blur-sm text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-700 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
