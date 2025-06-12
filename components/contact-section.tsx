"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-600 dark:to-gray-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities, whether
              it's internships, full-time positions, freelance projects, or
              collaborations. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-4" />
                <div>
                  <div className="text-gray-900 dark:text-white font-medium">
                    Email
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    sarthakm890@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-4" />
                <div>
                  <div className="text-gray-900 dark:text-white font-medium">
                    Phone
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    +91 74288 69112
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-4" />
                <div>
                  <div className="text-gray-900 dark:text-white font-medium">
                    Location
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    Ghaziabad, Uttar Pradesh, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-400 dark:border-gray-600/50 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                  onClick={() =>
                    window.open("https://github.com/Sarthak-mishra-5", "_blank")
                  }
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-400 dark:border-gray-600/50 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/sarthakmishra8",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-400 dark:border-gray-600/50 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                  onClick={() =>
                    window.open("mailto:sarthakm890@gmail.com", "_blank")
                  }
                >
                  <Mail className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-400 dark:border-gray-600/50 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                  onClick={() =>
                    window.open("https://leetcode.com/u/sarthakkm/", "_blank")
                  }
                >
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/70 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-500 dark:focus:border-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-500 dark:focus:border-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-500 dark:focus:border-gray-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-500 dark:focus:border-gray-500 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 dark:from-gray-700 dark:to-gray-900 dark:hover:from-gray-600 dark:hover:to-gray-800 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-300 dark:border-gray-700/50 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Sarthak Mishra. Built with Next.js, Three.js, and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
}
