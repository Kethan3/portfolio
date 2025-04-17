"use client";

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
};

const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Siddaganga Institute Of Technology",
    period: "2021 - 2025",
    details: "9.16 CGPA",
  },
  {
    degree: "Pre-University Course",
    institution: "Sri Sapthagiri PU College",
    period: "2019 - 2021",
    details: "98.50 %",
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-primary">
        Education
      </h2>
      <div className="space-y-8">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-base-200 border border-base-300 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
            <p className="text-sm text-base-content">
              {edu.institution} — <span>{edu.period}</span>
            </p>
            {edu.details && <p className="mt-2 text-base-content">{edu.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
