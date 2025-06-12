import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarthak Mishra - Portfolio",
  description: "Coding ideas into reality",
  keywords: [
    "Sarthak Mishra",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "GraphQL",
    "Apollo",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "Frontend Development",
    "Backend Development",

    "Full Stack Development",
    "Open Source",
    "GitHub",
    "Web Applications",
    "Web Design",
    "Web Development",
    "Portfolio Website",
    "Personal Website",
    "Developer Portfolio",
    "Software Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>{children}</body>
    </html>
  );
}
