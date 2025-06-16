
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Star, Users, Trophy, BookOpen, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
              Excellence in Learning,
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent">
              Godly in Character
            </span>
          </h1>
          <p className="text-2xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building brilliant minds and strong character across Africa. Join the journey of educational excellence!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={() => navigate('/register')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
            </Button>
            <Button 
              onClick={() => navigate('/features')}
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Discover Our Features
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Images Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Students engaged in interactive learning with technology"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
              <p className="text-white p-6 font-semibold text-lg">Interactive Learning with Modern Technology</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Collaborative learning environment with diverse students"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/70 to-transparent flex items-end">
              <p className="text-white p-6 font-semibold text-lg">Collaborative Learning Environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Families Choose Us</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover the pillars that make Honey Drop the premier choice for quality education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-0 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-blue-900">Academic Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700 text-center">
                Comprehensive curriculum designed for the African education system with proven track record of outstanding results.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-0 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-blue-900">Character Building</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700 text-center">
                Strong emphasis on moral values and godly character development, shaping future leaders with integrity.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-0 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-blue-900">Nurturing Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700 text-center">
                Supportive community where every student is valued, encouraged, and empowered to reach their full potential.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate('/features')}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Explore All Features
          </Button>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="bg-white/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Story of Excellence</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              For over a decade, Honey Drop has been at the forefront of educational innovation in Africa.
              Our journey began with a simple yet powerful vision: to create an institution where academic excellence 
              meets character development, producing graduates who make a positive impact in their communities.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">15+</h3>
                <p className="text-gray-700">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">500+</h3>
                <p className="text-gray-700">Successful Graduates</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">98%</h3>
                <p className="text-gray-700">WAEC Success Rate</p>
              </div>
            </div>
            <Button 
              onClick={() => navigate('/about')}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-yellow-500 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Child's Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our community of learners and experience education that transforms lives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/register')}
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Register Now
            </Button>
            <Button 
              onClick={() => navigate('/login')}
              variant="outline"
              className="border-2 border-white text-black hover:bg-white/10 text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"

            >
              Student Login
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
