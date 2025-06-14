
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, User, Mail, Phone, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    age: '',
    classLevel: '',
    guardianName: '',
    guardianPhone: '',
    address: '',
    password: '',
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo registration - in real app, this would save to database
    toast({
      title: "Welcome to Stellar Scholars Hub! 🎉",
      description: "Your account has been created successfully. Let's start your learning journey!",
    });
    navigate('/login');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const classes = [
    'Class 1 (Primary)', 'Class 2 (Primary)', 'Class 3 (Primary)', 
    'Class 4 (Primary)', 'Class 5 (Primary)', 'Class 6 (Primary)',
    'Form 1 (Secondary)', 'Form 2 (Secondary)', 'Form 3 (Secondary)', 'Form 4 (Secondary)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
            Join Our Honey Drop Community!
          </h1>
          <p className="text-gray-600 mt-2 text-lg">Begin your journey of excellence in learning and Godly character</p>
        </div>

        <Card className="border-2 border-blue-100 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-800">Student Registration</CardTitle>
            <CardDescription className="text-gray-600">
              Create your account to access world-class education
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-700 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Student Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName" className="text-blue-700 font-medium">Full Name</Label>
                    <Input
                      id="studentName"
                      placeholder="Enter student's full name"
                      value={formData.studentName}
                      onChange={(e) => handleInputChange('studentName', e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-blue-700 font-medium">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Age"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-blue-700 font-medium">Class Level</Label>
                  <Select onValueChange={(value) => handleInputChange('classLevel', value)}>
                    <SelectTrigger className="border-blue-200 focus:border-blue-500">
                      <SelectValue placeholder="Select class level" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-700 flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-700 font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-blue-700 font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+234 123 456 7890"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-blue-700 font-medium">Address</Label>
                  <Input
                    id="address"
                    placeholder="Full address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Guardian Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-700 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Guardian Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guardianName" className="text-blue-700 font-medium">Guardian's Name</Label>
                    <Input
                      id="guardianName"
                      placeholder="Parent/Guardian full name"
                      value={formData.guardianName}
                      onChange={(e) => handleInputChange('guardianName', e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="guardianPhone" className="text-blue-700 font-medium">Guardian's Phone</Label>
                    <Input
                      id="guardianPhone"
                      placeholder="+234 123 456 7890"
                      value={formData.guardianPhone}
                      onChange={(e) => handleInputChange('guardianPhone', e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-blue-700 font-medium">Create Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="border-blue-200 focus:border-blue-500"
                  required
                />
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-700 text-center">
                  By registering, you agree to uphold our values of <strong>Excellence in Learning</strong> and <strong>Godly Character</strong>
                </p>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Create My Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <button 
                  onClick={() => navigate('/login')}
                  className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                >
                  Sign in here
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <button 
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
