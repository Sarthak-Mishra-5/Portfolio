"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
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
  const [state, handleSubmit] = useForm("xrbkqkpj"); // Replace with your Formspree ID

  return (
    <section id="contact" className="pt-20 pb-4 px-4">
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
              I'm always interested in hearing about new opportunities...
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4" />
                <div>
                  <div className="font-medium">Email</div>
                  <div>sarthakm890@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div>+91 74288 69112</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4" />
                <div>
                  <div className="font-medium">Location</div>
                  <div>Ghaziabad, Uttar Pradesh, India</div>
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
                <div className="relative group">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-400 dark:border-gray-600/50 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/drive/folders/1ng1-T_ySIRrPu6vXngGvdoV4VbB9VF5h?usp=drive_link",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="w-6 h-6" />
                  </Button>
                  <span className="absolute left-1/2 translate-y-9 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                    Resume
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/70 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center text-center py-12 px-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    Thank you!
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg max-w-md">
                    Thanks for reaching out! I’ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Your message..."
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3 bg-gray-700 text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Sarthak Mishra. Built with Next.js, Three.js, and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
}
