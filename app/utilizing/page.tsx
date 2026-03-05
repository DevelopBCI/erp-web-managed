"use client";

import { useState } from "react";
import { utilizingCourses } from "./utilizingData";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function UtilizingPage() {
  const [activeCourse, setActiveCourse] = useState(1);
  const currentCourse = utilizingCourses.find((c) => c.id === activeCourse);

  return (
    <div className="min-h-screen bg-gray-50 py-12 font-kanit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Courses Button */}
        <div className="mb-8">
          <Link
            href="/course"
            className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>กลับไปหน้า Course อบรม</span>
          </Link>
        </div>

        {/* Course Selector Tabs */}
        <div className="flex justify-center items-center gap-8 mb-12">
          {utilizingCourses.map((course) => (
            <div
              key={course.id}
              className="flex items-center relative cursor-pointer"
              onClick={() => setActiveCourse(course.id)}
            >
              <div
                className={`absolute left-1 w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${activeCourse === course.id
                  ? "bg-white border-2 border-purple-600"
                  : "bg-purple-200"
                  }`}
              >
                <span className="font-bold text-sm text-black">{course.id}</span>
              </div>
              <div
                className={`flex items-center h-10 px-5 pl-12 rounded-full border-2 border-dashed transition-all duration-300 ${activeCourse === course.id
                  ? "bg-purple-600 border-purple-600"
                  : "bg-white border-purple-600"
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
                  สมัครเข้าร่วม Course
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-6">
                  {currentCourse.title}
                </h1>

                {/* Overview */}
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    {currentCourse.overview}
                  </p>
                </div>

                {/* Course 1: Lessons */}
                {currentCourse.id === 1 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      บทเรียน
                    </h2>
                    <div className="space-y-3">
                      {currentCourse.lessons?.map((lesson, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-purple-300 to-white p-4 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                          <p className="text-gray-700">{lesson}</p>
                        </div>
                      ))}
                    </div>
                    {/* Enroll Button */}
                    <div className="flex items-center justify-center mt-16 mb-8">
                      <a
                        href={currentCourse.enrollLink}
                        className="flex items-center gap-2 hover:opacity-80 transition"
                      >
                        <p className="text-purple-600 font-semibold text-lg">
                          สมัคร Course เรียนที่
                        </p>
                        {currentCourse.enrollLogo && (
                          <Image
                            src={currentCourse.enrollLogo}
                            alt="FutureSkill"
                            width={180}
                            height={40}
                          />
                        )}
                      </a>
                    </div>
                  </div>
                )}

                {/* Course 2: Subcourses */}
                {currentCourse.id === 2 && (
                  <div>
                    {currentCourse.subcourses?.map((subcourse, index) => (
                      <div key={index} className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {subcourse.number}. {subcourse.title}
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {subcourse.description}
                        </p>

                        {/* Course Details Grid */}
                        <div className="flex flex-wrap gap-4 md:gap-8 mb-4">
                          <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                            <Image
                              src="/img/course/doc.png"
                              alt="Lessons"
                              width={40}
                              height={40}
                            />
                            <p className="text-gray-700 text-sm text-center">
                              {subcourse.lessons} บทเรียน
                            </p>
                          </div>
                          <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                            <Image
                              src="/img/course/clock.png"
                              alt="Duration"
                              width={40}
                              height={40}
                            />
                            <p className="text-gray-700 text-sm text-center">
                              {subcourse.duration}
                            </p>
                          </div>
                          <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                            <Image
                              src="/img/course/learn.png"
                              alt="Features"
                              width={40}
                              height={40}
                            />
                            <p className="text-gray-700 text-sm text-center">
                              {subcourse.features[0]}
                            </p>
                          </div>
                          <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                            <Image
                              src="/img/course/certificate.png"
                              alt="Certificate"
                              width={40}
                              height={40}
                            />
                            <p className="text-gray-700 text-sm text-center">
                              {subcourse.features[1]}
                            </p>
                          </div>
                        </div>

                        {/* Enroll Link */}
                        <a
                          href={subcourse.enrollLink}
                          className="flex items-center gap-2 mb-8 hover:opacity-80 transition"
                        >
                          <p className="text-purple-600 font-semibold">
                            สมัคร Course เรียนที่
                          </p>
                          <Image
                            src="/img/course/fs-logo-light.png"
                            alt="FutureSkill"
                            width={120}
                            height={30}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                )}
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
