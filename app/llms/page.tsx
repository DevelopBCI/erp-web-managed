"use client";

import { useState } from "react";
import { llmsCourses } from "./llmsData";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function LLMsPage() {
  const [activeCourse, setActiveCourse] = useState(1);
  const currentCourse = llmsCourses.find((c) => c.id === activeCourse);

  return (
    <div className="min-h-screen bg-gray-50 py-12 font-kanit  ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Courses Button */}
        <div className="mb-8">
          <Link
            href="/course"
            className="inline-flex items-center gap-2 text-pink-500 font-medium hover:text-pink-600 transition"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>กลับไปหน้า Course อบรม</span>
          </Link>
        </div>

        {/* Course Selector Tabs */}
        <div className="flex justify-center items-center gap-8 mb-12">
          {llmsCourses.map((course) => (
            <div
              key={course.id}
              className="flex items-center relative cursor-pointer"
              onClick={() => setActiveCourse(course.id)}
            >
              <div
                className={`absolute left-1 w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${activeCourse === course.id
                    ? "bg-white border-2 border-pink-500"
                    : "bg-pink-200"
                  }`}
              >
                <span className="font-bold text-sm text-black">{course.id}</span>
              </div>
              <div
                className={`flex items-center h-10 px-5 pl-12 rounded-full border-2 border-dashed transition-all duration-300 ${activeCourse === course.id
                    ? "bg-pink-500 border-pink-500"
                    : "bg-white border-pink-500"
                  }`}
              >
                <label
                  className={`text-sm font-medium cursor-pointer mb-0 ${activeCourse === course.id
                      ? "text-white"
                      : "text-black"
                    }`}
                >
                  {course.buttonLabel}
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Course Content */}
        {currentCourse && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-2">
                  {currentCourse.subtitle}
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-6">
                  {currentCourse.title}
                </h1>

                {/* Overview */}
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    {currentCourse.overview}
                  </p>
                </div>

                {/* Solution Title */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentCourse.solutionTitle}
                  </h2>
                  <p className="text-gray-600 text-sm mb-6">
                    {currentCourse.solutionSubtitle}
                  </p>

                  {/* Solutions Grid */}
                  <div className="space-y-3">
                    {currentCourse.solutions.map((solution, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-6 bg-pink-100 p-6 rounded-xl hover:shadow-lg transition-all"
                      >
                        <div className="flex-shrink-0">
                          <Image
                            src={solution.icon}
                            alt="Solution icon"
                            width={70}
                            height={70}
                          />
                        </div>
                        <p className="text-gray-700 text-sm">{solution.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="w-full max-w-xl lg:sticky lg:top-24">
                  <Image
                    src={currentCourse.image}
                    alt={currentCourse.title}
                    width={700}
                    height={525}
                    className="w-full h-auto object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
