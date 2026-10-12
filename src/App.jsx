import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Kit from "@/components/Kit";
import Notes from "@/components/Notes";
import Contact from "@/components/Contact";
import { ToastProvider } from "@/components/ui/toast";

export default function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background font-sans">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Container (Max width 3xl for clean reading flow) */}
        <main className="max-w-3xl mx-auto px-4 sm:px-6">
          <Hero />
          <Experience />
          <Projects />
          <Kit />
          <Notes />
          <Contact />
        </main>
      </div>
    </ToastProvider>
  );
}
