
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LogOut, Plus, Edit, Trash, Users, DollarSign, GraduationCap, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Student {
  id: string;
  name: string;
  class: string;
  age: number;
  paymentStatus: "paid" | "outstanding";
  amountPaid: number;
  totalFees: number;
  position: number;
  subjects: string[];
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "Adebayo Johnson",
      class: "JSS 2",
      age: 13,
      paymentStatus: "paid",
      amountPaid: 150000,
      totalFees: 150000,
      position: 3,
      subjects: ["Mathematics", "English", "Science", "Social Studies", "CRK"]
    },
    {
      id: "2",
      name: "Fatima Mohammed",
      class: "SSS 1",
      age: 15,
      paymentStatus: "outstanding",
      amountPaid: 100000,
      totalFees: 180000,
      position: 1,
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English"]
    },
    {
      id: "3",
      name: "Chinedu Okafor",
      class: "Primary 5",
      age: 10,
      paymentStatus: "paid",
      amountPaid: 120000,
      totalFees: 120000,
      position: 2,
      subjects: ["Mathematics", "English", "Science", "Social Studies"]
    }
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [filter, setFilter] = useState<"all" | "paid" | "outstanding">("all");
  const [newStudent, setNewStudent] = useState({
    name: "",
    class: "",
    age: "",
    paymentStatus: "outstanding" as "paid" | "outstanding",
    amountPaid: "",
    totalFees: "",
    position: "",
    subjects: ""
  });

  useEffect(() => {
    const adminAuth = localStorage.getItem("adminAuth");
    if (!adminAuth) {
      navigate("/admin-login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/admin-login");
  };

  const handleAddStudent = () => {
    const student: Student = {
      id: Date.now().toString(),
      name: newStudent.name,
      class: newStudent.class,
      age: parseInt(newStudent.age),
      paymentStatus: newStudent.paymentStatus,
      amountPaid: parseInt(newStudent.amountPaid),
      totalFees: parseInt(newStudent.totalFees),
      position: parseInt(newStudent.position),
      subjects: newStudent.subjects.split(",").map(s => s.trim())
    };

    setStudents([...students, student]);
    setIsAddDialogOpen(false);
    setNewStudent({
      name: "",
      class: "",
      age: "",
      paymentStatus: "outstanding",
      amountPaid: "",
      totalFees: "",
      position: "",
      subjects: ""
    });
    toast({
      title: "Student Added",
      description: "New student record has been created successfully.",
    });
  };

  const handleDeleteStudent = (id: string) => {
    setStudents(students.filter(s => s.id !== id));
    toast({
      title: "Student Deleted",
      description: "Student record has been removed.",
    });
  };

  const filteredStudents = students.filter(student => {
    if (filter === "all") return true;
    return student.paymentStatus === filter;
  });

  const stats = {
    totalStudents: students.length,
    paidStudents: students.filter(s => s.paymentStatus === "paid").length,
    outstandingStudents: students.filter(s => s.paymentStatus === "outstanding").length,
    totalRevenue: students.reduce((sum, s) => sum + s.amountPaid, 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-blue-900">Admin Dashboard</h1>
          </div>
          <Button onClick={handleLogout} variant="outline" className="border-red-500 text-red-600 hover:bg-red-50">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Total Students</p>
                  <p className="text-3xl font-bold">{stats.totalStudents}</p>
                </div>
                <Users className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Paid Students</p>
                  <p className="text-3xl font-bold">{stats.paidStudents}</p>
                </div>
                <GraduationCap className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Outstanding</p>
                  <p className="text-3xl font-bold">{stats.outstandingStudents}</p>
                </div>
                <Filter className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100">Total Revenue</p>
                  <p className="text-3xl font-bold">₦{stats.totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-yellow-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Student Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-blue-900">Student Management</CardTitle>
                <CardDescription>Manage all student records and payment information</CardDescription>
              </div>
              <div className="flex space-x-2">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as "all" | "paid" | "outstanding")}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  <option value="all">All Students</option>
                  <option value="paid">Paid Students</option>
                  <option value="outstanding">Outstanding Payments</option>
                </select>
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Student
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add New Student</DialogTitle>
                      <DialogDescription>Enter student details to create a new record.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={newStudent.name}
                            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="class">Class</Label>
                          <Input
                            id="class"
                            value={newStudent.class}
                            onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="age">Age</Label>
                          <Input
                            id="age"
                            type="number"
                            value={newStudent.age}
                            onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="position">Position</Label>
                          <Input
                            id="position"
                            type="number"
                            value={newStudent.position}
                            onChange={(e) => setNewStudent({ ...newStudent, position: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="amountPaid">Amount Paid</Label>
                          <Input
                            id="amountPaid"
                            type="number"
                            value={newStudent.amountPaid}
                            onChange={(e) => setNewStudent({ ...newStudent, amountPaid: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="totalFees">Total Fees</Label>
                          <Input
                            id="totalFees"
                            type="number"
                            value={newStudent.totalFees}
                            onChange={(e) => setNewStudent({ ...newStudent, totalFees: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="subjects">Subjects (comma-separated)</Label>
                        <Input
                          id="subjects"
                          value={newStudent.subjects}
                          onChange={(e) => setNewStudent({ ...newStudent, subjects: e.target.value })}
                          placeholder="Mathematics, English, Science"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleAddStudent}>Add Student</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Payment Status</TableHead>
                  <TableHead>Amount Paid</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          student.paymentStatus === "paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {student.paymentStatus === "paid" ? "Fully Paid" : "Outstanding"}
                      </span>
                    </TableCell>
                    <TableCell>
                      ₦{student.amountPaid.toLocaleString()} / ₦{student.totalFees.toLocaleString()}
                    </TableCell>
                    <TableCell>{student.position}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteStudent(student.id)}
                          className="text-red-600 hover:bg-red-50"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
