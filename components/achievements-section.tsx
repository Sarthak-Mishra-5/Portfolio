"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Target, Users, Briefcase } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-gray-700 dark:text-gray-400" />,
      title: "Stellarscape Explorer Hackathon",
      description:
        "Secured 1st prize in the Stellarscape Explorer Hackathon by Andromeda",
      date: "2024",
      category: "Hackathon",
    },
    {
      icon: <Award className="w-8 h-8 text-gray-700 dark:text-gray-400" />,
      title: "Electrothon 6.0",
      description:
        "Achieved 2nd place in Electrothon 6.0, sponsored by MLH, out of 1400+ entrants",
      date: "2024",
      category: "Competition",
    },
    // {
    //   icon: <Briefcase className="w-8 h-8 text-gray-700 dark:text-gray-400" />,
    //   title: "Web Developer Intern",
    //   description:
    //     "Enhanced load times by 40% and performance scores by 35% at STEMMED EDVOCATIONS",
    //   date: "2024",
    //   category: "Professional",
    // },
    // {
    //   icon: <Users className="w-8 h-8 text-gray-700 dark:text-gray-400" />,
    //   title: "Training & Placement Representative",
    //   description:
    //     "Liaised with 20+ recruiters, optimizing placement for 200+ students at NIT Hamirpur",
    //   date: "2024-2025",
    //   category: "Leadership",
    // },
    // {
    //   icon: <Star className="w-8 h-8 text-gray-700 dark:text-gray-400" />,
    //   title: "Club Coordinator",
    //   description:
    //     "Led end-to-end execution of 15+ events, boosting participation and drawing nearly 5000 attendees",
    //   date: "2024-2025",
    //   category: "Leadership",
    // },
    // {
    //   icon: <Target className="w-8 h-8 text-gray-700 dark:text-gray-400" />,
    //   title: "Academic Excellence",
    //   description:
    //     "Maintaining CGPA of 7.93/10.00 in Mathematics and Scientific Computing at NIT Hamirpur",
    //   date: "2022-2026",
    //   category: "Academic",
    // },
  ];

  const stats = [
    {
      label: "UI Issues Resolved",
      value: "30+",
      color: "text-gray-700 dark:text-gray-400",
    },
    {
      label: "Load Time Improvement",
      value: "40%",
      color: "text-gray-800 dark:text-gray-300",
    },
    {
      label: "Event Attendees",
      value: "5000+",
      color: "text-gray-700 dark:text-gray-400",
    },
    {
      label: "Current CGPA",
      value: "7.93",
      color: "text-gray-800 dark:text-gray-300",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
              Achievements
              {/* & Recognition */}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-600 dark:to-gray-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Milestones and accomplishments in my journey
          </p>
        </div>
        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/70 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700/50 backdrop-blur-sm text-center"
            >
              <CardContent className="p-6">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-white/70 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700/50 backdrop-blur-sm hover:border-gray-400 dark:hover:border-gray-600/60 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="border-gray-400 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 text-xs"
                      >
                        {achievement.date}
                      </Badge>
                    </div>
                    <Badge className="bg-gray-200 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600/50 mb-3 text-xs">
                      {achievement.category}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Education Highlight
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>
          <div className="bg-white/70 dark:bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-300 dark:border-gray-700/50">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Bachelor of Technology
              </h4>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                Mathematics and Scientific Computing
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                National Institute of Technology Hamirpur
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-700 dark:text-gray-400 mb-2">
                    7.93/10.00
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Current CGPA
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-2">
                    2022-2026
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Duration
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-700 dark:text-gray-400 mb-2">
                    NIT
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Hamirpur
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
