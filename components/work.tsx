"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0)

  const projects = [
    {
      title: "Personal CubeSat Sensor Subsystem",
      subtitle: "A functional CubeSat subsystem built with and Arduino board and various sensors such as Altitude, Atmospheric Pressure, Temperature and Humidity, Real-Time Clock, Triple-Axis Magnetometer Gyroscope/Accelerometer for Orientation Sensing",
      image: "/works/ProtoShield.png?height=600&width=800",
      link: "https://github.com/DavidGilson24/CubeSat-Subsystem/tree/main",
      year: "2025",
    },
    {
      title: "SOLAR ATLAS",
      subtitle: " 3D model of the solar system designed to reflect a 1:10 (time and space) scale of planetary orbits, rotation, and distances, simulating the dynamics of orbital mechanics, made using Unreal Engine 5",
      image: "/works/SolarAtlas.png?height=600&width=800",
      year: "2023",
    },
    {
      title: "Space Index",
      subtitle: "E-learning website that provides information about our Solar System and human made objects in space, including animations and ease of interaction. Made using vanilla JS, HTML/CSS",
      image: "/works/SpaceIndex.png?height=600&width=800",
      year: "2024",
    },
    {
      title: "Quasar",
      subtitle: "Quasar is an interactive, intelligent chatbot designed to write an astronomy based essay and output it as a pdf. Utilizing OpenAI's API.",
      image: "/works/Quasar.jpg?height=600&width=800",
      year: "2024",
    },
  ]

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80"></div>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-0 text-white">
              Projects
            </h2>
            <a
              className="border-2 border-white/20 px-6 py-3 text-sm uppercase tracking-widest text-white/80 hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center group"
              href="https://github.com/DavidGilson24"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden border-2 border-white/20 mb-4 group-hover:border-white/50 transition-all duration-300">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                
                {/* Year badge with improved visibility */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-white/90 border border-white/20">
                  {project.year}
                </div>
                
                {/* Overlay content that appears on hover */}
                {/* <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                </div> */}
              </div>
              
              {/* Project title with enhanced styling */}
              <h3 className="text-2xl font-bold tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors">{project.subtitle}</p>
              
              {/* Animated underline on hover */}
              <div className="h-px w-0 bg-white group-hover:w-20 transition-all duration-300 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 border border-white/5"></div>
    </section>
  )
}
