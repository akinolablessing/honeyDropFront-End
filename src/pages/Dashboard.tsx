
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Trophy, 
  DollarSign, 
  BookOpen, 
  Star, 
  Clock, 
  Users, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Calendar,
  Bell
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Demo student data
  const studentData = {
    name: "Amara Okonkwo",
    class: "Form 2 (Secondary)",
    studentId: "SS2024001",
    profileImage: "/placeholder.svg",
    paymentStatus: {
      totalFees: 250000,
      amountPaid: 180000,
      outstanding: 70000,
      isPaidInFull: false
    },
    academicPerformance: {
      overallGrade: "A-",
      gpa: 3.7,
      classPosition: 3,
      totalStudents: 45,
      termProgress: 75
    },
    subjects: [
      { name: "Mathematics", grade: "A", score: 92, teacher: "Mr. Adebayo" },
      { name: "English Language", grade: "A-", score: 88, teacher: "Mrs. Okafor" },
      { name: "Physics", grade: "B+", score: 85, teacher: "Dr. Mensah" },
      { name: "Chemistry", grade: "A-", score: 89, teacher: "Mrs. Asante" },
      { name: "Biology", grade: "A", score: 94, teacher: "Mr. Otieno" },
      { name: "Geography", grade: "B+", score: 83, teacher: "Ms. Wanjiku" },
      { name: "History", grade: "B", score: 80, teacher: "Mr. Babatunde" },
      { name: "French", grade: "B+", score: 86, teacher: "Mme. Diallo" }
    ],
    recentAnnouncements: [
      { title: "Mid-term Examinations", date: "Next Week", type: "exam" },
      { title: "Science Fair Registration", date: "Feb 15", type: "event" },
      { title: "Parent-Teacher Conference", date: "Feb 28", type: "meeting" }
    ]
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const paymentPercentage = (studentData.paymentStatus.amountPaid / studentData.paymentStatus.totalFees) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b-2 border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
                  Student Dashboard
                </h1>
                <p className="text-sm text-gray-600">Excellence in Learning, Godly in Character</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                size="sm"
                className="border-red-200 text-red-600 hover:bg-red-50"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Welcome back, {studentData.name}! 🌟</h2>
                  <p className="text-blue-100 text-lg mb-1">{studentData.class} • Student ID: {studentData.studentId}</p>
                  <p className="text-blue-200">Ready to continue your stellar learning journey?</p>
                </div>
                <div className="text-right">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <Trophy className="h-10 w-10 text-yellow-300" />
                  </div>
                  <p className="text-sm text-blue-200">Class Rank</p>
                  <p className="text-2xl font-bold text-yellow-300">#{studentData.academicPerformance.classPosition}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-blue-100 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Overall Grade</CardTitle>
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700">{studentData.academicPerformance.overallGrade}</div>
              <p className="text-sm text-gray-600 mt-1">GPA: {studentData.academicPerformance.gpa}</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-100 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Class Position</CardTitle>
                <Trophy className="h-5 w-5 text-yellow-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700">#{studentData.academicPerformance.classPosition}</div>
              <p className="text-sm text-gray-600 mt-1">of {studentData.academicPerformance.totalStudents} students</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-100 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Term Progress</CardTitle>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700">{studentData.academicPerformance.termProgress}%</div>
              <Progress value={studentData.academicPerformance.termProgress} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-100 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Subjects</CardTitle>
                <BookOpen className="h-5 w-5 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700">{studentData.subjects.length}</div>
              <p className="text-sm text-gray-600 mt-1">Active subjects</p>
            </CardContent>
          </Card>
        </div>

        {/* Payment Status */}
        <Card className="mb-8 border-2 border-blue-100">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center text-blue-800">
                  <DollarSign className="h-6 w-6 mr-2 text-green-600" />
                  Payment Status
                </CardTitle>
                <CardDescription>School fees and payment information</CardDescription>
              </div>
              {studentData.paymentStatus.isPaidInFull ? (
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Paid in Full
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  Outstanding Balance
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total Fees</p>
                <p className="text-2xl font-bold text-blue-700">₦{studentData.paymentStatus.totalFees.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Amount Paid</p>
                <p className="text-2xl font-bold text-green-700">₦{studentData.paymentStatus.amountPaid.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Outstanding</p>
                <p className="text-2xl font-bold text-red-700">₦{studentData.paymentStatus.outstanding.toLocaleString()}</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Payment Progress</span>
                <span>{paymentPercentage.toFixed(1)}% Complete</span>
              </div>
              <Progress value={paymentPercentage} className="h-3" />
              {!studentData.paymentStatus.isPaidInFull && (
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  Make Payment
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Academic Performance */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-2 border-2 border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <BookOpen className="h-6 w-6 mr-2" />
                Subject Performance
              </CardTitle>
              <CardDescription>Your grades and performance across all subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentData.subjects.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg border border-blue-100">
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-800">{subject.name}</h4>
                      <p className="text-sm text-gray-600">Teacher: {subject.teacher}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-bold text-lg text-blue-700">{subject.score}%</p>
                      </div>
                      <Badge className={getGradeColor(subject.grade)}>
                        {subject.grade}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Calendar className="h-5 w-5 mr-2" />
                  Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {studentData.recentAnnouncements.map((announcement, index) => (
                    <div key={index} className="p-3 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg border border-blue-100">
                      <h5 className="font-semibold text-blue-800 text-sm">{announcement.title}</h5>
                      <p className="text-xs text-gray-600 mt-1">
                        <Clock className="h-3 w-3 inline mr-1" />
                        {announcement.date}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-800">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  Motivation Corner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-center">
                  <p className="text-orange-700 font-medium italic mb-2">
                    "Excellence is not a skill, it's an attitude. Keep striving, keep believing!"
                  </p>
                  <footer className="text-sm text-orange-600">Daily Inspiration</footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
