"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { Mail, Search, Filter, MoreVertical, RefreshCw, CheckCircle, X, Calendar, Phone, Globe, BookOpen, Briefcase, List, LayoutGrid, MessageCircle } from 'lucide-react'

interface Submission {
  id: string
  name: string
  email: string
  phone: string
  message: string
  created_at: string
  position: string
  replied: boolean
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [readEmails, setReadEmails] = useState<{[key: string]: boolean}>({});
  const [markedEmails, setMarkedEmails] = useState<{[key: string]: boolean}>({});
  const [showListView, setShowListView] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions()
  }, [])

  useEffect(() => {
    const savedReadStatus = localStorage.getItem('readEmails');
    if (savedReadStatus) {
      setReadEmails(JSON.parse(savedReadStatus));
    }
  }, []);

  useEffect(() => {
    // Initial load of marked status
    const loadMarkedStatus = async () => {
      const { data, error } = await supabase
        .from('email_markers')
        .select('*');
      
      if (data) {
        const statusMap = data.reduce((acc: {[key: string]: boolean}, item) => {
          acc[item.email_id] = item.is_marked;
          return acc;
        }, {});
        setMarkedEmails(statusMap);
      }
    };

    loadMarkedStatus();

    // Subscribe to real-time changes
    const channel = supabase
      .channel('email_markers')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'email_markers'
        },
        (payload: any) => {
          if (payload.new) {
            setMarkedEmails(prev => ({
              ...prev,
              [payload.new.email_id]: payload.new.is_marked
            }));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function fetchSubmissions() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        toast({
          title: "Error fetching submissions",
          description: error.message,
          duration: 3000,
        })
        return
      }

      setSubmissions(data || [])
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: "Unexpected error",
        description: "Failed to fetch submissions",
        duration: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleEmailClick = async (submission: Submission) => {
    const position = submission.position || "Canadian Immigration Services";
    const subject = `Re: Application Received - ${position}`;
    const body = `Dear ${submission.name},

Thank you for your application regarding ${position} at Global Visa Experts Canada.

We have received your application and our team will process it carefully. We will connect you to available opportunities once you are successfully selected.

We will keep in touch regarding the next steps in the process.

Best regards,
Global Visa Experts Canada Team
globalvisaexpertscanada@gmail.com`;

    // Open Gmail compose window with security attributes
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${submission.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const newWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }

    // Update the replied status in the database
    try {
      const { error } = await supabase
        .from('form_submissions')
        .update({ replied: true })
        .eq('id', submission.id);

      if (error) {
        toast({
          title: "Error updating reply status",
          description: error.message,
          duration: 3000,
        });
        return;
      }

      // Update local state
      setSubmissions(prev => 
        prev.map(sub => 
          sub.id === submission.id ? { ...sub, replied: true } : sub
        )
      );

      toast({
        title: "Status Updated",
        description: "Reply status has been updated",
        duration: 3000,
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to update reply status",
        duration: 3000,
      });
    }
  };

  const handleWhatsAppClick = (submission: Submission) => {
    // Remove all non-numeric characters from phone number
    let formattedPhone = submission.phone.replace(/\D/g, '');

    // Handle Kenyan phone number formats
    if (formattedPhone.startsWith('254')) {
      // Already in international format
      formattedPhone = formattedPhone;
    }
    // Handle numbers starting with 0 (like 0722...)
    else if (formattedPhone.startsWith('0')) {
      formattedPhone = '254' + formattedPhone.substring(1);
    }
    // Handle numbers starting with 7 (like 722...)
    else if (formattedPhone.startsWith('7')) {
      formattedPhone = '254' + formattedPhone;
    }
    // Handle numbers starting with 1 (like 110...)
    else if (formattedPhone.startsWith('1')) {
      formattedPhone = '254' + formattedPhone;
    }
    
    // Log phone numbers for debugging
    console.log('Original phone:', submission.phone);
    console.log('Formatted phone:', formattedPhone);

    // Create the message with proper line breaks
    const message = [
      'Urgent Action Required – Final Reminder to Confirm Your Job Placement',
      '',
      `Dear ${submission.name},`,
      '',
      'We hope you\'re doing well.',
      '',
      'This is a final reminder regarding your job placement confirmation. As an agent from Global Visa Expert – East Africa Region, I want to emphasize that failure to complete your confirmation could result in losing this opportunity.',
      '',
      'There are limited slots available, and employers are moving forward with confirmed applicants. If you do not complete the process soon, your position may be given to another candidate.',
      '',
      'Please fill out the confirmation form immediately to secure your place. If you need any assistance, feel free to reach out.',
      '',
      'Kindly confirm once done to avoid missing out.',
      '',
      'Best regards,',
      'Global Visa Expert'
    ].join('\n');

    // Use WhatsApp Web URL for best compatibility with security attributes
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(message)}`;
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const toggleReadStatus = (submissionId: string) => {
    const newReadEmails = {
      ...readEmails,
      [submissionId]: !readEmails[submissionId]
    };
    
    // Save to localStorage
    localStorage.setItem('readEmails', JSON.stringify(newReadEmails));
    setReadEmails(newReadEmails);
  };

  const toggleMarkedStatus = async (emailId: string) => {
    const newStatus = !markedEmails[emailId];
    
    try {
      const { error } = await supabase
        .from('email_markers')
        .upsert({ 
          email_id: emailId,
          is_marked: newStatus
        });

      if (error) throw error;

      setMarkedEmails(prev => ({
        ...prev,
        [emailId]: newStatus
      }));
    } catch (error) {
      console.error('Error updating marker:', error);
    }
  };

  // Group submissions by email and get only the latest submission for each email
  const uniqueSubmissions = Object.values(
    submissions.reduce((acc: { [key: string]: Submission }, submission) => {
      if (!acc[submission.email] || new Date(submission.created_at) > new Date(acc[submission.email].created_at)) {
        acc[submission.email] = submission;
      }
      return acc;
    }, {})
  );

  // Sort and filter the unique submissions
  const filteredSubmissions = uniqueSubmissions.filter(submission => {
    const matchesSearch = 
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (selectedStatus === "all") return matchesSearch
    return matchesSearch
  }).sort((a, b) => {
    if (a.replied === b.replied) {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
    return a.replied ? 1 : -1;
  });

  // Function to get other applications for an email
  const getOtherApplications = (email: string) => {
    return submissions.filter(s => 
      s.email === email && 
      s.id !== uniqueSubmissions.find(u => u.email === email)?.id
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Form Submissions
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-gray-600">
              {new Set(submissions.map(s => s.email)).size} Unique {new Set(submissions.map(s => s.email)).size === 1 ? 'Applicant' : 'Applicants'}
            </p>
            <span className="text-gray-400">•</span>
            <p className="text-gray-600">
              {submissions.length} Total {submissions.length === 1 ? 'Application' : 'Applications'}
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search submissions..."
              className="pl-10 w-full border-2 border-gray-200 focus:border-blue-500 rounded-lg"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setShowListView(!showListView)}
              className="flex items-center gap-2 border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50"
            >
              {showListView ? <LayoutGrid size={16} /> : <List size={16} />}
              {showListView ? 'Card View' : 'List View'}
            </Button>
            <Button
              variant="outline"
              onClick={fetchSubmissions}
              className="flex items-center gap-2 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50"
            >
              <RefreshCw size={16} />
              Refresh
            </Button>
          </div>
        </div>

        {filteredSubmissions.length === 0 ? (
          <Card className="border-2 border-gray-200">
            <CardContent className="flex flex-col items-center justify-center h-64">
              <div className="text-gray-400 mb-4">
                <Mail size={48} className="animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No submissions found</h3>
              <p className="text-gray-500">There are no submissions matching your criteria</p>
            </CardContent>
          </Card>
        ) : showListView ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              {filteredSubmissions.map((submission) => {
                const messageData = JSON.parse(submission.message);
                return (
                  <div 
                    key={submission.id}
                    className={`p-4 rounded-lg border ${
                      markedEmails[submission.id] ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <span className="font-semibold text-gray-700">Name:</span>
                        <p className="text-gray-900">{submission.name}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Email:</span>
                        <p className="text-gray-900">{submission.email}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Position:</span>
                        <p className="text-gray-900">{submission.position || 'N/A'}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Nationality:</span>
                        <p className="text-gray-900">{messageData.nationality || 'N/A'}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button
                        onClick={() => handleEmailClick(submission)}
                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm"
                      >
                        Reply
                      </Button>
                      <Button
                        onClick={() => handleWhatsAppClick(submission)}
                        className="bg-green-500 hover:bg-green-600 text-white text-sm"
                      >
                        WhatsApp
                      </Button>
                      <Button
                        onClick={() => toggleMarkedStatus(submission.id)}
                        className={`${
                          markedEmails[submission.id]
                            ? 'bg-green-500 hover:bg-green-600' 
                            : 'bg-red-500 hover:bg-red-600'
                        } text-white text-sm`}
                      >
                        {markedEmails[submission.id] ? 'Mark as Unread' : 'Mark as Read'}
                      </Button>
                      {getOtherApplications(submission.email).length > 0 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              className="w-full border-blue-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center gap-2"
                            >
                              <Mail size={16} />
                              View {getOtherApplications(submission.email).length} Other Application{getOtherApplications(submission.email).length > 1 ? 's' : ''}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Other Applications from {submission.email}</DialogTitle>
                              <DialogDescription>
                                Previous applications submitted by this email
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 mt-4">
                              {getOtherApplications(submission.email).map((app) => {
                                const appData = JSON.parse(app.message);
                                return (
                                  <div 
                                    key={app.id} 
                                    className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                  >
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <span className="font-semibold text-gray-700">Name:</span>
                                        <p className="text-gray-900">{app.name}</p>
                                      </div>
                                      <div>
                                        <span className="font-semibold text-gray-700">Date:</span>
                                        <p className="text-gray-900">{new Date(app.created_at).toLocaleDateString()}</p>
                                      </div>
                                      <div>
                                        <span className="font-semibold text-gray-700">Position:</span>
                                        <p className="text-gray-900">
                                          {appData.position || app.position || 'Canadian Immigration Services'}
                                        </p>
                                      </div>
                                      <div>
                                        <span className="font-semibold text-gray-700">Nationality:</span>
                                        <p className="text-gray-900">{appData.nationality || 'N/A'}</p>
                                      </div>
                                      <div>
                                        <span className="font-semibold text-gray-700">Education:</span>
                                        <p className="text-gray-900">{appData.educationLevel || 'N/A'}</p>
                                      </div>
                                      <div>
                                        <span className="font-semibold text-gray-700">Email:</span>
                                        <p className="text-gray-900">{app.email}</p>
                                      </div>
                                      <div>
                                        <span className="font-semibold text-gray-700">Phone:</span>
                                        <div className="flex items-center">
                                          <p className="text-gray-900">{app.phone}</p>
                                          <Button
                                            onClick={() => handleWhatsAppClick(app)}
                                            className="ml-2 bg-green-500 hover:bg-green-600 text-white p-1 rounded-full h-6 w-6 flex items-center justify-center"
                                          >
                                            <MessageCircle size={14} />
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mt-3 flex gap-2">
                                      <Button
                                        onClick={() => handleEmailClick(app)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm"
                                      >
                                        Reply
                                      </Button>
                                      <Button
                                        onClick={() => toggleMarkedStatus(app.id)}
                                        className={`${
                                          markedEmails[app.id]
                                            ? 'bg-green-500 hover:bg-green-600' 
                                            : 'bg-red-500 hover:bg-red-600'
                                        } text-white text-sm`}
                                      >
                                        {markedEmails[app.id] ? 'Mark as Unread' : 'Mark as Read'}
                                      </Button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredSubmissions.map((submission) => {
              const messageData = JSON.parse(submission.message)
              const submissionDate = new Date(submission.created_at).toLocaleDateString()
              
              return (
                <Card 
                  key={submission.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{submission.name}</h2>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Mail size={16} className="text-blue-500" />
                            <a href={`mailto:${submission.email}`} className="hover:text-blue-600 transition-colors">
                              {submission.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Phone size={16} className="text-green-500" />
                            <span>{submission.phone}</span>
                            <Button
                              onClick={() => handleWhatsAppClick(submission)}
                              className="ml-2 bg-green-500 hover:bg-green-600 text-white p-1 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                              <MessageCircle size={14} />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar size={16} className="text-purple-500" />
                            <span>{submissionDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button
                          onClick={() => handleEmailClick(submission)}
                          className="bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200"
                        >
                          Reply
                        </Button>
                        <Button
                          onClick={() => toggleMarkedStatus(submission.id)}
                          className={`${
                            markedEmails[submission.id]
                              ? 'bg-green-500 hover:bg-green-600' 
                              : 'bg-red-500 hover:bg-red-600'
                          } text-white transition-colors duration-200 min-w-[120px]`}
                        >
                          {markedEmails[submission.id] ? 'Mark as Unread' : 'Mark as Read'}
                        </Button>
                        {getOtherApplications(submission.email).length > 0 && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                className="w-full border-blue-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center gap-2"
                              >
                                <Mail size={16} />
                                View {getOtherApplications(submission.email).length} Other Application{getOtherApplications(submission.email).length > 1 ? 's' : ''}
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Other Applications from {submission.email}</DialogTitle>
                                <DialogDescription>
                                  Previous applications submitted by this email
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 mt-4">
                                {getOtherApplications(submission.email).map((app) => {
                                  const appData = JSON.parse(app.message);
                                  const appDate = new Date(app.created_at).toLocaleDateString();
                                  
                                  return (
                                    <div 
                                      key={app.id}
                                      className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                    >
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <span className="font-semibold text-gray-700">Name:</span>
                                          <p className="text-gray-900">{app.name}</p>
                                        </div>
                                        <div>
                                          <span className="font-semibold text-gray-700">Date:</span>
                                          <p className="text-gray-900">{appDate}</p>
                                        </div>
                                        <div>
                                          <span className="font-semibold text-gray-700">Position:</span>
                                          <p className="text-gray-900">
                                            {appData.position || app.position || 'Canadian Immigration Services'}
                                          </p>
                                        </div>
                                        <div>
                                          <span className="font-semibold text-gray-700">Nationality:</span>
                                          <p className="text-gray-900">{appData.nationality || 'N/A'}</p>
                                        </div>
                                        <div>
                                          <span className="font-semibold text-gray-700">Education:</span>
                                          <p className="text-gray-900">{appData.educationLevel || 'N/A'}</p>
                                        </div>
                                        <div>
                                          <span className="font-semibold text-gray-700">Email:</span>
                                          <p className="text-gray-900">{app.email}</p>
                                        </div>
                                        <div>
                                          <span className="font-semibold text-gray-700">Phone:</span>
                                          <div className="flex items-center">
                                            <p className="text-gray-900">{app.phone}</p>
                                            <Button
                                              onClick={() => handleWhatsAppClick(app)}
                                              className="ml-2 bg-green-500 hover:bg-green-600 text-white p-1 rounded-full h-6 w-6 flex items-center justify-center"
                                            >
                                              <MessageCircle size={14} />
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mt-3 flex gap-2">
                                        <Button
                                          onClick={() => handleEmailClick(app)}
                                          className="bg-blue-500 hover:bg-blue-600 text-white text-sm"
                                        >
                                          Reply
                                        </Button>
                                        <Button
                                          onClick={() => toggleMarkedStatus(app.id)}
                                          className={`${
                                            markedEmails[app.id]
                                              ? 'bg-green-500 hover:bg-green-600' 
                                              : 'bg-red-500 hover:bg-red-600'
                                          } text-white text-sm`}
                                        >
                                          {markedEmails[app.id] ? 'Mark as Unread' : 'Mark as Read'}
                                        </Button>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen size={20} className="text-blue-500" />
                        Application Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                          <Globe size={20} className="text-blue-500" />
                          <div>
                            <span className="text-sm text-gray-500">Nationality</span>
                            <p className="font-medium text-gray-900">{messageData.nationality}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                          <BookOpen size={20} className="text-green-500" />
                          <div>
                            <span className="text-sm text-gray-500">Education</span>
                            <p className="font-medium text-gray-900">{messageData.educationLevel}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                          <Briefcase size={20} className="text-purple-500" />
                          <div>
                            <span className="text-sm text-gray-500">Employment</span>
                            <p className="font-medium text-gray-900">{messageData.employmentStatus}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                          <CheckCircle size={20} className="text-indigo-500" />
                          <div>
                            <span className="text-sm text-gray-500">Position</span>
                            <p className="font-medium text-gray-900">{messageData.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
