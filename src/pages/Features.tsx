
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Heart, Trophy, Music, Palette, FlaskConical, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Comprehensive curriculum following the African education system with modern teaching methods that make learning exciting and effective."
    },
    {
      icon: Users,
      title: "Dedicated Staff",
      description: "Passionate and qualified teachers committed to nurturing each student's potential with personalized attention and care."
    },
    {
      icon: Heart,
      title: "Character Development",
      description: "Strong emphasis on moral values and godly character, building students who are not just academically excellent but also ethically sound."
    },
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Proven track record of outstanding academic performance with students consistently achieving top positions in regional and national examinations."
    },
    {
      icon: Music,
      title: "Extracurricular Activities",
      description: "Rich variety of activities including music, drama, debate, sports, and cultural programs to develop well-rounded individuals."
    },
    {
      icon: Palette,
      title: "Creative Arts",
      description: "Vibrant arts program encouraging creativity through visual arts, crafts, and creative writing to express and develop artistic talents."
    },
    {
      icon: FlaskConical,
      title: "Modern Facilities",
      description: "Well-equipped laboratories, library, computer center, and playground providing an optimal environment for learning and growth."
    },
    {
      icon: Globe,
      title: "Community Involvement",
      description: "Active engagement with the local community through service projects, cultural events, and partnerships that build strong community bonds."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Why Choose Honey Drop?
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover what makes our school exceptional! We combine academic excellence with character development, 
            creating an environment where every student can thrive and reach their full potential.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-0 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-blue-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            The Education System at Honey Drop
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Primary Education (Ages 6-11)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Primary 1 to Primary 6</li>
                <li>• Foundation subjects: Mathematics, English, Science, Social Studies</li>
                <li>• Introduction to local languages and cultural studies</li>
                <li>• Continuous assessment and end-of-term examinations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Secondary Education (Ages 12-17)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Junior Secondary (JSS 1-3) and Senior Secondary (SSS 1-3)</li>
                <li>• Core subjects plus specialized electives</li>
                <li>• Preparation for WAEC, NECO, and JAMB examinations</li>
                <li>• Career guidance and university preparation</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Our Grading System</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p><strong>A (Excellent):</strong> 80-100%</p>
                <p><strong>B (Very Good):</strong> 70-79%</p>
                <p><strong>C (Good):</strong> 60-69%</p>
              </div>
              <div>
                <p><strong>D (Fair):</strong> 50-59%</p>
                <p><strong>E (Pass):</strong> 40-49%</p>
                <p><strong>F (Fail):</strong> Below 40%</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
