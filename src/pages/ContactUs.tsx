import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReduxHeader from "@/components/ReduxHeader";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  CheckCircle2
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: ""
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the typical response time?",
      answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes! Our Enterprise plan is fully customizable. Please select 'Sales' as the department to discuss your specific needs."
    },
    {
      question: "How can I reset my password?",
      answer: "You can reset your password by clicking 'Forgot Password' on the login page. If you have trouble, contact our support team."
    },
    {
      question: "Is there a free trial for the Pro plan?",
      answer: "We offer a 14-day free trial for our Pro plan so you can experience the full power of our AI tools risk-free."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Simulate form submission
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      department: value
    }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <ReduxHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium mb-6 border border-yellow-500/30">
              <MessageSquare className="w-4 h-4 mr-2" />
              We'd love to hear from you
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Get in <span className="text-yellow-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a question about our AI tools? Need a custom enterprise plan?
              Our team is ready to help you build better.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Contact Information Cards (Left Column) */}
            <div className="space-y-6 lg:col-span-1">
              {/* Info Card */}
              <Card className="border-none shadow-xl overflow-hidden">
                <div className="bg-yellow-500 h-2 w-full"></div>
                <CardContent className="p-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 group">
                        <div className="bg-yellow-50 p-3 rounded-xl group-hover:bg-yellow-100 transition-colors">
                          <Phone className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Phone</h4>
                          <p className="text-gray-600 font-medium mt-1">+1 (555) 123-4567</p>
                          <p className="text-sm text-gray-400 mt-1">Mon-Fri 8am-6pm EST</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                        <div className="bg-yellow-50 p-3 rounded-xl group-hover:bg-yellow-100 transition-colors">
                          <Mail className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Email</h4>
                          <p className="text-gray-600 font-medium mt-1">support@contractorlist.com</p>
                          <p className="text-sm text-gray-400 mt-1">24/7 Digital Support</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                        <div className="bg-yellow-50 p-3 rounded-xl group-hover:bg-yellow-100 transition-colors">
                          <MapPin className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Headquarters</h4>
                          <p className="text-gray-600 mt-1 leading-relaxed">
                            100 Construction Blvd, Suite 500<br />
                            New York, NY 10001
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <HelpCircle className="w-6 h-6 text-yellow-600" />
                    <h3 className="text-xl font-bold text-gray-900">FAQ</h3>
                  </div>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="flex justify-between items-center w-full text-left focus:outline-none group"
                        >
                          <span className="font-medium text-gray-900 group-hover:text-yellow-600 transition-colors">{faq.question}</span>
                          {openFaq === index ? (
                            <ChevronUp className="w-4 h-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                        {openFaq === index && (
                          <p className="mt-2 text-sm text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-2xl h-full">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                    <p className="text-gray-500 mt-2">Fill out the form below and our team will get back to you shortly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Department</label>
                        <Select onValueChange={handleSelectChange} value={formData.department}>
                          <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors">
                            <SelectValue placeholder="Select a department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sales">Sales & Enterprise</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing & Accounts</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your project..."
                        required
                        className="min-h-[150px] bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none p-4"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-14 text-lg shadow-lg shadow-yellow-500/20 transition-all hover:scale-[1.01]"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-[400px] bg-gray-200 relative w-full">
                {/* Placeholder for Map - In a real app, use Google Maps Embed API */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Office Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-bold text-gray-900">Open Now</span>
                  </div>
                  <p className="text-sm text-gray-600">Visit our HQ for a coffee and chat about your construction needs.</p>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;