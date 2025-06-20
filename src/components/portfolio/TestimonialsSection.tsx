"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  project: string;
  avatar: string;
  featured?: boolean;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  isHovered: number | null;
  onHover: (index: number | null) => void;
}

interface FeaturedTestimonialProps {
  testimonial: Testimonial;
}

const testimonials = [
  {
    content: "Abhishek is an exceptional student with a natural talent for programming. His dedication to learning and problem-solving skills are remarkable. He consistently delivers high-quality code and shows great potential for a successful career in software development.",
    author: "Dr. Sarah Johnson",
    role: "Professor",
    company: "Computer Science Department",
    rating: 5,
    project: "Data Structures & Algorithms",
    avatar: "SJ",
    featured: true
  },
  {
    content: "Working with Abhishek on our group project was fantastic. He took initiative, wrote clean code, and helped the entire team understand complex concepts. His collaborative spirit and technical skills make him a valuable team member.",
    author: "Priya Sharma",
    role: "Classmate & Project Partner",
    company: "B.Tech CSE Batch 2025",
    rating: 5,
    project: "Web Development Project",
    avatar: "PS"
  },
  {
    content: "Abhishek demonstrated excellent problem-solving abilities during our coding bootcamp. He quickly grasped new concepts and was always willing to help fellow students. His passion for technology is evident in everything he does.",
    author: "Rahul Kumar",
    role: "Coding Bootcamp Instructor",
    company: "TechLearn Academy",
    rating: 5,
    project: "Full Stack Development",
    avatar: "RK"
  },
  {
    content: "As a senior student, I've mentored many juniors, but Abhishek stands out. His curiosity, dedication to learning, and ability to implement feedback quickly make him one of the most promising developers I've worked with.",
    author: "Ankit Verma",
    role: "Senior Student & Mentor",
    company: "B.Tech CSE Batch 2023",
    rating: 5,
    project: "Mentorship Program",
    avatar: "AV"
  },
  {
    content: "Abhishek's contribution to our college tech fest was outstanding. He developed a web application that impressed both judges and participants. His technical skills combined with creativity make him a standout developer.",
    author: "Prof. Michael Chen",
    role: "Tech Fest Coordinator",
    company: "College Technical Committee",
    rating: 5,
    project: "College Tech Fest",
    avatar: "MC"
  }
];

const TestimonialCard = ({ testimonial, index, isHovered, onHover }: TestimonialCardProps) => {
  const gradients = [
    'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20',
    'from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20',
    'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20',
    'from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20',
    'from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20'
  ];

  const borderGradients = [
    'from-blue-400 to-indigo-500',
    'from-purple-400 to-pink-500',
    'from-green-400 to-emerald-500',
    'from-orange-400 to-red-500',
    'from-cyan-400 to-blue-500'
  ];

  const gradient = gradients[index % gradients.length];
  const borderGradient = borderGradients[index % borderGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: false, amount: 0.3 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="h-full w-full group"
    >
      <motion.div
        className={`h-full w-full rounded-2xl relative overflow-hidden transition-all duration-500 border-0 ${isHovered === index
          ? 'transform scale-105 shadow-2xl'
          : 'shadow-lg hover:shadow-xl'
          }`}
        whileHover={{ y: -8 }}
      >
        {/* Main Card */}
        <div className={`relative h-full bg-gradient-to-br ${gradient} backdrop-blur-sm rounded-2xl p-6`}>
          {/* Quote Icon with Background */}
          <div className="relative mb-4 flex items-center justify-between">
            <div className={`w-12 h-12 bg-gradient-to-br ${borderGradient} rounded-2xl flex items-center justify-center shadow-lg`}>
              <Icon
                icon="gravity-ui:quote-open"
                className="text-white text-2xl"
              />
            </div>
            {/* Rating with Animation */}
            <div className="flex items-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  viewport={{ once: false }}
                >
                  <Icon
                    icon="solar:star-bold"
                    className="text-yellow-500 text-lg drop-shadow-sm"
                  />
                </motion.div>
              ))}
              <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {testimonial.rating}.0
              </span>
            </div>
          </div>

          {/* Testimonial Content with Better Typography */}
          <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm font-medium relative">
            <span className="text-3xl text-gray-300 dark:text-gray-600 absolute -top-1 -left-1 font-serif">"</span>
            <span className="relative z-10 pl-3">{testimonial.content}</span>
            <span className="text-3xl text-gray-300 dark:text-gray-600 absolute -bottom-4 -right-1 font-serif">"</span>
          </blockquote>

          {/* Author Section with Enhanced Design */}
          <div className="mt-auto border-t border-gray-200/50 dark:border-gray-600/50 pt-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className={`w-12 h-12 bg-gradient-to-br ${borderGradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
              </div>

              <div className="flex-1">
                <div className="font-bold text-gray-900 dark:text-white text-base">
                  {testimonial.author}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {testimonial.role}
                </div>
                <div className="text-gray-500 dark:text-gray-500 text-xs">
                  {testimonial.company}
                </div>
              </div>
            </div>

            {/* Project Badge */}
            <div className="flex items-center gap-2">
              <Icon icon="solar:bookmark-bold" className="text-gray-400" width={14} height={14} />
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {testimonial.project}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FeaturedTestimonial = ({ testimonial }: FeaturedTestimonialProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false, amount: 0.3 }}
    className="relative max-w-4xl mx-auto"
  >
    <div className="bg-gradient-to-br from-amber-50 to-sky-100 dark:from-amber-800/20 dark:to-sky-900/20 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50">
      {/* Header */}
      <div className="relative mb-6 flex items-center justify-between">
        <div className={`w-14 h-14 bg-gradient-to-br from-amber-400 to-sky-500 rounded-2xl flex items-center justify-center shadow-lg`}>
          <Icon
            icon="gravity-ui:quote-open"
            className="text-white text-3xl"
          />
        </div>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 dark:bg-blue-900/30 text-sky-700 dark:text-blue-400 rounded-full text-sm font-medium">
            <Icon icon="solar:star-bold" width={16} height={16} />
            Featured Testimonial
          </span>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-8 relative">
        <span className="text-4xl text-gray-300 dark:text-gray-600 absolute -top-2 left-4 font-serif">"</span>
        <span className="relative z-10 px-8">{testimonial.content}</span>
        <span className="text-4xl text-gray-300 dark:text-gray-600 absolute -bottom-6 right-4 font-serif">"</span>
      </blockquote>

      {/* Rating with Animation */}
      <div className="flex items-center justify-center gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            viewport={{ once: false }}
          >
            <Icon
              icon="solar:star-bold"
              className="text-yellow-500 text-2xl drop-shadow-sm"
            />
          </motion.div>
        ))}
        <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          {testimonial.rating}.0
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-xl font-bold">{testimonial.avatar}</span>
        </div>
        <div className="text-center">
          <div className="font-bold text-gray-900 dark:text-white text-lg">
            {testimonial.author}
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            {testimonial.role}
          </div>
          <div className="text-gray-500 dark:text-gray-500 text-xs">
            {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const featuredTestimonial = testimonials.find(t => t.featured);
  const otherTestimonials = testimonials.filter(t => !t.featured);

  if (!featuredTestimonial) {
    return null;
  }

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="mb-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <SectionHeader
          tagText="Academic & Professional Feedback"
          tagIcon="solar:users-group-rounded-outline"
          heading="What People Say"
          description="Testimonials from professors, classmates, and mentors who have worked with me"
          showUnderline={false}
          centered={true}
        />

        {/* Featured Testimonial */}
        <div className="mb-16">
          <FeaturedTestimonial testimonial={featuredTestimonial} />
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Academic & Professional Testimonials
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Feedback from professors, classmates, and mentors I&apos;ve had the privilege to learn from
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {otherTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
                isHovered={hoveredCard}
                onHover={setHoveredCard}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false }}
          className="text-center mt-12 px-4"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm border border-blue-200/50 dark:border-purple-500/20 rounded-2xl">
            <Icon icon="solar:chat-round-dots-bold" className="text-blue-500 dark:text-purple-400" width={24} height={24} />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Want to work together? Let&apos;s connect and create something amazing!
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}