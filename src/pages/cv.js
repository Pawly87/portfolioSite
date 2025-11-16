import React, { useState } from "react";
import practitionerBadge from '../assets/aws-ccp.png';

// React CV Component — 2-column layout
// Updated with:
// - Your real CV content
// - Job title: Learning Technologist
// - Added Skills / Tech Stack section
// - Past-10-year roles expanded; older roles collapsible

const data = {
  name: "Paul Ferrol",
  title: "Learning Technologist",
  location: "Broxburn, West Lothian",
  email: "paul.ferrol@googlemail.com",
  profile:
    "Learning Technologist with 10+ years of experience supporting global Learning & Development operations. Skilled in LMS administration (Learn, Cornerstone OnDemand), AWS infrastructure, automation, process mapping, and digital learning delivery. Known for transforming complex business needs into scalable learning technologies and solutions.",
  skills: [
    "Learn LMS (custom)",
    "Cornerstone OnDemand",
    "AWS (EC2, Cognito, S3, CloudWatch)",
    "Automation & SFTP Workflows",
    "Process Mapping & Improvement",
    "React (Discovery Platform)",
    "Adobe Connect",
    "UX Collaboration",
    "Data Analysis & Reporting",
    "E-learning Development",
    "Facilitation (Virtual & Physical)",
    "Power BI (basic)",
    "Microsoft Office Suite",
  ],
  experienceRecent: [
    {
      role: "Learning Technologist",
      company: "Amazon Customer Service — Leadership Development Team",
      start: "Dec 2019",
      end: "Present",
      bullets: [
        "Maintain and enhance CS Discovery, the internal leadership development platform serving 4,000+ global leaders.",
        "Administer and support multiple learning systems: Learn (custom LMS), Cornerstone OnDemand, Adobe Connect, and LaTMax.",
        "Manage system integrations, AWS infrastructure, and security compliance in partnership with engineering and InfoSec.",
        "Collaborate with UX designers and engineers to design and deploy scalable learning technologies.",
        "Provide technical consultancy to L&D program owners to align digital tools with instructional goals.",
      ],
      achievements: [
        "Co-developed LaTMax, a global ILT facilitator scheduling platform, streamlining training operations.",
        "Upgraded CS Discovery to a React-based AWS-hosted application with Cognito authentication and transcript dashboards.",
        "Built automation systems for survey email distribution and secure SFTP file delivery, reducing manual workload.",
        "Created and trained an AI assistant persona for LMS administration, reducing ticket volume by ~20%.",
        "Led OS upgrade for Adobe Connect EC2 instances, improving stability and ensuring compliance.",
        "Technical lead for migration from Cornerstone OnDemand to Learn LMS across multiple orgs and outsourcing partners.",
        "Delivered AWS cost optimisation audit resulting in $10,000/month savings.",
      ],
    },
    {
      role: "Leadership Development Coordinator",
      company: "Amazon Customer Service, Edinburgh",
      start: "Jan 2014",
      end: "Dec 2019",
      bullets: [
        "Supported a global team of 4,000 leaders across 19 L&D specialists and 3 coordinators.",
        "Managed and created LMS learning objects and responded to admin queries.",
        "Built KPI reporting for monthly, quarterly, and annual reviews.",
        "Maintained team website and document storage systems.",
        "Developed e-learning modules and documented/improved team processes.",
        "Coordinated global training logistics across 25+ locations.",
      ],
      achievements: [
        "Migrated paper-based evaluations (Level 1–3) to digital workflows.",
        "Coordinated global re-org onboarding logistics for 2,500 learners and 30+ facilitators.",
        "Migrated learning data into LMS.",
        "Developed mentor/manager signoff workflows for self-directed learning.",
      ],
    },
  ],
  experienceOlder: [
    {
      role: "Interim Trainer",
      company: "Amazon Customer Service, Edinburgh",
      start: "Oct 2013",
      end: "Jan 2014",
      bullets: [
        "Delivered 2-week onboarding courses to 18–38 new hires per cohort.",
        "Provided performance feedback and produced handover reports.",
        "Delivered training using PowerPoint, group activities, Moodle, and KNET LMS.",
        "Developed Metrics Refresher Course and contributed to training material updates.",
      ],
      achievements: [
        "Trained 147 new hires in 2013 with a 95.81% pass rate (highest on site).",
      ],
    },
    {
      role: "Customer Service Associate",
      company: "Amazon Customer Service, Edinburgh",
      start: "Oct 2011",
      end: "Jan 2014",
      bullets: [
        "Provided multi-channel customer support for returns, deliveries, navigation, accounts, and orders.",
      ],
    },
    {
      role: "Fulfilment & Customer Service Advisor",
      company: "BSS Scotland Ltd, Edinburgh",
      start: "Feb 2009",
      end: "Oct 2011",
      bullets: [
        "Handled escalated calls and liaised with account managers.",
        "Delivered 1:1 and classroom training and supported interviews for new hires.",
      ],
    },
    {
      role: "IT Helpdesk Technician",
      company: "MacDonald Hotels, Bathgate",
      start: "Feb 2008",
      end: "Sept 2008",
      bullets: ["Provided first-line IT support across the hotel group."],
    },
  ],
  education: [
    "Clifton StrengthsFinder — Gallup (2016)",
    "Prince 2 Practitioner — PeopleCert (2016)",
    "Emotional & Social Competency Inventory (ESCI) — Korn Ferry (2016)",
    "Higher Sociology — B",
    "History — B",
    "Int 2 Information Systems — B",
  ],
};

function Section({ title, children }) {
  return (
    <section className="mt-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 text-sm text-gray-800">{children}</div>
    </section>
  );
}

export default function CVPage() {
  const [showOlder, setShowOlder] = useState(false);

  return (
    <div className="min-h-screen bg-[#161E2D] p-6 md:p-12 font-sans text-gray-900">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="md:flex">
          {/* LEFT COLUMN */}
          <aside className="md:w-1/3 bg-gray-100 p-6 md:p-8">
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p className="text-sm text-gray-700">{data.title}</p>
            <p className="text-sm text-gray-600">{data.location}</p>

            <div className="mt-6 text-sm space-y-2">
              <div>Email: {data.email}</div>
            </div>

            <Section title="Skills / Tech Stack">
              <ul className="list-disc list-inside space-y-1">
                {data.skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </Section>
            <section className="mt-6">
              <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/aa518f77d5794c968b3a4e28b4ba6b6e" target="_blank" rel="noopener noreferrer">
                <img src={practitionerBadge} alt="AWS Certified Cloud Practitioner Badge" className="mt-4 w-32 h-auto cursor-pointer hover:opacity-80 transition-opacity" />
              </a>
            </section>

            <Section title="Education & Qualifications">
              <ul className="list-disc list-inside space-y-1">
                {data.education.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </Section>
            
          </aside>

          {/* RIGHT COLUMN */}
          <main className="md:w-2/3 p-6 md:p-8">
            <Section title="Professional Profile">{data.profile}</Section>

            <Section title="Experience (Last 10 Years)">
              {data.experienceRecent.map((job, i) => (
                <div key={i} className="mb-6 border-b pb-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="font-medium">{job.role}</h3>
                      <p className="text-sm text-gray-600">{job.company}</p>
                    </div>
                    <span className="text-xs text-gray-500">{job.start} — {job.end}</span>
                  </div>

                  <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>

                  {job.achievements && (
                    <div className="mt-2">
                      <strong>Achievements:</strong>
                      <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                        {job.achievements.map((a, k) => (
                          <li key={k}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </Section>

            <Section title="Earlier Career">
              <button
                className="text-indigo-600 text-sm underline"
                onClick={() => setShowOlder(!showOlder)}
              >
                {showOlder ? "Hide earlier roles" : "Show earlier roles"}
              </button>

              {showOlder && (
<div className="mt-3 space-y-6">
  {data.experienceOlder.map((job, i) => (
    <div key={i} className="border-b pb-4">
      <div className="flex justify-between items-baseline">
        <div>
          <h3 className="font-medium">{job.role}</h3>
          <p className="text-sm text-gray-600">{job.company}</p>
        </div>
        <span className="text-xs text-gray-500">{job.start} — {job.end}</span>
      </div>

      <ul className="list-disc list-inside mt-2 text-sm space-y-1">
        {job.bullets.map((b, j) => (
          <li key={j}>{b}</li>
        ))}
      </ul>

      {job.achievements && (
        <div className="mt-2">
          <strong>Achievements:</strong>
          <ul className="list-disc list-inside text-sm mt-1 space-y-1">
            {job.achievements.map((a, k) => (
              <li key={k}>{a}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ))}
</div>
)}
</Section>

<div className="mt-8">
  <button
    onClick={() => window.print()}
    className="bg-indigo-600 text-white rounded px-4 py-2 text-sm shadow hover:opacity-90"
  >
    Download PDF
  </button>
</div>
</main>
</div>
</div>
</div>
);
}
