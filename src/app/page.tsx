

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";

// Icons
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiSalesforce,
  SiGit,
  SiGithub,
  SiAdobephotoshop,
  SiWordpress,
  SiFigma,
} from "react-icons/si";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const user = {
  name: "Doctor Kganya Kekana",
  email: "kganyakekana@gmail.com",
  imageUrl:
    "https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwKxY9GXVAxq3Zns5F7zGHW2Y6Iij8mugBJ0DRP",
};

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Experience", href: "#experience", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Certifications", href: "#certifications", current: false },
  { name: "Contact", href: "#contact", current: false },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeProject, setActiveProject] = useState<{
    name: string;
    longDesc?: string;
  } | null>(null);
  const [accessNotice, setAccessNotice] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = [
      "home",
      "experience",
      "projects",
      "skills",
      "certifications",
      "contact",
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 animate-gradient relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-doodle opacity-70" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl animate-float-slow" />
          <div className="absolute top-1/3 -right-16 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl animate-float" />
          <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-rose-300/30 blur-3xl animate-float-slow" />
        </div>

        <div className="relative z-10">
        {/* NAVBAR */}
        <Disclosure
          as="nav"
          className="bg-white/80 fixed top-0 z-30 w-full border-b border-slate-200/70 shadow-md backdrop-blur-md animate-fade-in"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-xl font-bold text-sky-700 animate-glow"
                >
                  <Image
                    src="https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwKxY9GXVAxq3Zns5F7zGHW2Y6Iij8mugBJ0DRP"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <span>Portfolio</span>
                </Link>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={
                          activeSection === item.href.replace("#", "")
                            ? "page"
                            : undefined
                        }
                        className={classNames(
                          activeSection === item.href.replace("#", "")
                            ? "bg-sky-600 text-white"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                          "rounded-md px-3 py-2 text-sm font-medium transition"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="md:hidden bg-white/90 px-2 pb-3 pt-2 border-b border-slate-200/70">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                href={item.href}
                className={classNames(
                  activeSection === item.href.replace("#", "")
                    ? "bg-sky-600 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </DisclosurePanel>
        </Disclosure>

        {/* HERO */}
        <section
          id="home"
          className="mx-auto max-w-7xl px-6 pt-28 pb-20 text-center scroll-mt-28"
        >
          <Image
            src={user.imageUrl}
            alt="Doctor Kganya Kekana"
            width={120}
            height={120}
            className="mx-auto rounded-full shadow-lg ring-4 ring-sky-300 animate-float"
          />
          <h1
            className="mt-6 text-3xl font-bold text-slate-900 sm:text-5xl animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Doctor Kganya Kekana
          </h1>
          <p
            className="mt-4 text-lg text-slate-600 animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            Full-Stack Developer | Salesforce Developer | Enterprise Grade Engineer | AI
          </p>
          <div
            className="mt-8 max-w-3xl mx-auto rounded-2xl bg-white/80 p-6 text-left shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/70 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            
            <p className="mt-3 text-sm text-slate-600">
              I am a Salesforce Certified Developer and Full Stack Developer with 4+ years
              of hands-on experience in JavaScript, TypeScript, Apex, and modern web
              technologies. I build scalable, user-centric applications, business
              processes, reports, and dashboards using both declarative Salesforce tools
              and programmatic stacks like MERN and T3 (React, Next.js, Node.js, Prisma).
              I also hold Microsoft Certified: Azure Fundamentals.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              I specialize in end-to-end solutions, process automation, integrations, and
              security. Passionate about leveraging technology to solve real-world problems and
              drive business growth.{" "}
              <span className="text-sky-700 animate-glow">Welcome to my portfolio.</span>
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="experience"
          className="mx-auto max-w-7xl px-6 py-16 scroll-mt-28"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-8 animate-fade-up">
            Experience
          </h2>
          <div className="relative space-y-6 border-l border-slate-200/80 pl-6">
            {[
              {
                company: "BlueSky",
                role: "Salesforce Developer",
                type: "Full-time",
                dates: "Feb 2025 - Present",
                location: "Gauteng, South Africa · Hybrid",
                highlights: [
                  "Custom Apex, triggers, and LWCs for Service Cloud workflows.",
                  "Flows, Process Builder, and validation rules to automate case handling.",
                  "Service Cloud enhancements across case management, omni-channel, and knowledge.",
                  "Integrations with external APIs for real-time data exchange.",
                ],
              },
              {
                company: "MTN",
                role: "Salesforce Developer",
                type: "Contract",
                dates: "Nov 2025 - Jan 2026",
                location: "Johannesburg, South Africa · Hybrid",
                highlights: [
                  "Sales Cloud setup for B2B fintech sales processes and pipeline visibility.",
                  "Multi-currency configuration for regional operations and reporting.",
                  "Role hierarchy, profiles, permission sets, and app configurations.",
                  "Power BI integration and Azure AD SSO configuration.",
                ],
              },
              {
                company: "Liberty Group South Africa",
                role: "Salesforce Backend Developer",
                type: "Contract (via BlueSky)",
                dates: "Jun 2025 - Dec 2025",
                location: "Johannesburg, South Africa · Hybrid",
                highlights: [
                  "Apex controllers and services for client portal backend logic.",
                  "MuleSoft API integrations and secure data transformation.",
                  "Visualforce PDF generation for real-time policy information.",
                ],
              },
              {
                company: "Webafrica",
                role: "Technical Support",
                type: "Full-time",
                dates: "Apr 2023 - Feb 2025",
                location: "Johannesburg Metropolitan Area · Hybrid",
                highlights: [
                  "Supported fiber, LTE, hosting, domains, and email services.",
                  "Troubleshot routers and ONTs to resolve connectivity issues.",
                  "Managed account activations, cancellations, and billing support.",
                ],
              },
              {
                company: "SPACE.TM",
                role: "Frontend Developer",
                type: "Part-time",
                dates: "Jul 2019 - Feb 2023",
                location: "Braamfontein, South Africa · Hybrid",
                highlights: [
                  "Built responsive UIs with React, Next.js, and Tailwind CSS.",
                  "Custom WordPress themes for marketing and lead generation.",
                  "Optimized performance, accessibility, and SEO outcomes.",
                ],
              },
            ].map((experience, index) => (
              <details
                key={`${experience.company}-${experience.role}`}
                className="group relative rounded-2xl bg-white/90 p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/70 animate-fade-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="absolute -left-[34px] top-7 h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_0_6px_rgba(224,242,254,0.9)]" />
                <summary className="list-none cursor-pointer">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {experience.company}
                        </h3>
                        <span className="text-sm text-slate-500">
                          {experience.role} · {experience.type}
                        </span>
                      </div>
                      <div className="mt-2 text-sm text-slate-500">
                        {experience.dates} · {experience.location}
                      </div>
                    </div>
                    <ChevronDownIcon className="h-5 w-5 text-slate-500 transition-transform duration-300 group-open:rotate-180" />
                  </div>
                </summary>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {experience.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="mx-auto max-w-7xl px-6 py-16 scroll-mt-28"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-8 animate-fade-up">
            Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Cloudus",
                desc: "Project management platform with contributor earnings and verified supplier marketplace.",
                longDesc:
                  "Cloudus is a software platform built to help businesses scale, operate efficiently, and engage customers from a single system. It helps growing and established businesses manage projects and service delivery, interact with customers more effectively, sell services and products digitally, coordinate suppliers, creators, and drivers, and track fulfilment and operations in real time. Instead of juggling multiple tools, Cloudus brings customers, workflows, and services together into one connected platform designed for real-world business operations. This is digital infrastructure for scaling businesses. Explore the platform: https://cloudusdigital.com",
                link: "https://cloudus2-0-5.vercel.app",
                image:
                  "https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwKg59atkwSsRBH3OTocjxVUKywrkiD6eWMnhgm",
              },
              {
                name: "Tech Care",
                desc: "React + Next.js frontend consuming a third-party API. Tailwind styled.",
                longDesc:
                  "Tech Care is a comprehensive digital healthcare platform designed to help doctors, clinics, and medical professionals manage patient interactions, data, and services more efficiently in a single, secure system. The platform enables healthcare providers to view and manage patient data, track medical histories, and monitor patient progress over time through clear, visual dashboards. With online appointment booking, doctors can streamline scheduling, reduce administrative workload, and improve patient access to care. Tech Care also serves as a centralized medical services platform, allowing practices to present available services, manage consultations, and support data-driven decision-making. Built-in data visualization tools transform patient information into actionable insights, helping practitioners identify trends, monitor outcomes, and deliver more personalized care. Value for doctors and medical practices: Centralized patient data management. Online appointment booking and scheduling. Patient progress tracking and medical history overview. Data visualization for faster clinical insights. Scalable platform for clinics and growing practices. Tech Care empowers healthcare professionals to focus less on administration and more on delivering high-quality, patient-centric care through modern digital tools.",
                link: "https://tech-care2025.vercel.app",
                image:
                  "https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwK2x1v44CyhaXAb7SNn1eW3Ytxwr6p9QdMylLI",
              },
              {
                name: "Portfolio",
                desc: "Personal portfolio showcasing projects, skills, and certifications.",
                link: "https://kekanadk.netlify.app",
                image:
                  "https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwKxY9GXVAxq3Zns5F7zGHW2Y6Iij8mugBJ0DRP",
              },
              {
                name: "MTN",
                desc: "Salesforce implementation supporting MTN’s B2B Fintech operations across multiple African markets.",
                longDesc:
                  "Configured and supported Salesforce Sales Cloud for B2B sales processes, including Leads, Accounts, Contacts, and Opportunities. Enabled Multi-Currency to support regional operations and consolidated reporting. Implemented role hierarchy, profiles, permission sets, and app configurations aligned to sales workflows. Supported reporting and dashboards for pipeline visibility and revenue tracking. Integrated Power BI with Salesforce. Configured SSO with Azure AD for MTN Group. Contributed to requirements analysis, user stories, and acceptance criteria with business stakeholders.",
                link: null,
                image:
                  "https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwKDZcmL7RzGfn8OhYAcm3stI41pXWPSaxRd7rE",
              },
              {
                name: "Liberty",
                desc: "Backend Salesforce development for a client portal handling beneficiary updates and policy data.",
                longDesc:
                  "Contributing to the Client Portal by developing backend solutions in Salesforce to support and enhance client-facing functionality. Work includes managing beneficiary updates for multiple policy types, such as investment and funeral products, and integrating with financial account data. Build Apex controllers, services, and advanced backend logic following best-practice design patterns; integrate with MuleSoft APIs; and implement secure, efficient data retrieval and transformation. Also responsible for generating dynamic PDF documents via Visualforce to provide accurate, real-time policy and beneficiary information to clients.",
                link: null,
                image:
                  "https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwKCtGrsWUIQE3n8ZGvJB5oxyw4m6gipbRa2scA",
              },
            ].map((project, index) => (
              <Link
                key={project.name}
                href={project.link ?? "#"}
                target="_blank"
                onClick={(event) => {
                  if (!project.link) {
                    event.preventDefault();
                    setAccessNotice(project.name);
                  }
                }}
                className="group rounded-xl bg-white/90 p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/70 transition hover:bg-white hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{project.desc}</p>
                {project.longDesc ? (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      setActiveProject({ name: project.name, longDesc: project.longDesc });
                    }}
                    className="mt-3 inline-flex items-center gap-2 text-sm text-sky-700 hover:text-sky-600"
                  >
                    <span>Read more</span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </button>
                ) : null}
              </Link>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="mx-auto max-w-7xl px-6 py-16 scroll-mt-28"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-8 animate-fade-up">
            Skills
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Frontend */}
            <div className="rounded-xl bg-white/90 p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/70 hover:bg-white transition animate-fade-up">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-4 text-3xl text-slate-600">
                <SiReact title="React" />
                <SiNextdotjs title="Next.js" />
                <SiTailwindcss title="Tailwind CSS" />
                <SiTypescript title="TypeScript" />
                <SiJavascript title="JavaScript" />
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl bg-white/90 p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/70 hover:bg-white transition animate-fade-up">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-4 text-3xl text-slate-600">
                <SiNodedotjs title="Node.js" />
                <SiExpress title="Express.js" />
                <SiPrisma title="Prisma" />
                <SiMongodb title="MongoDB" />
                <SiPostgresql title="SQL" />
              </div>
            </div>

            {/* Salesforce */}
            <div className="rounded-xl bg-white/90 p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/70 hover:bg-white transition animate-fade-up">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Salesforce</h3>
              <div className="flex flex-wrap gap-4 text-3xl text-slate-600">
                <SiSalesforce title="Salesforce Apex, LWC, OmniStudio" />
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Apex · LWC · OmniStudio · Copado · CodeScan
              </p>
            </div>

            {/* Cloud & DevOps */}
            <div className="rounded-xl bg-white/90 p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/70 hover:bg-white transition animate-fade-up">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-4 text-3xl text-slate-600">
                <SiGit title="Git" />
                <SiGithub title="GitHub" />
              </div>
            </div>

            {/* Design */}
            <div className="rounded-xl bg-white/90 p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/70 hover:bg-white transition animate-fade-up">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Design & CMS</h3>
              <div className="flex flex-wrap gap-4 text-3xl text-slate-600">
                <SiFigma title="Figma" />
                <SiAdobephotoshop title="Adobe Photoshop" />
                <SiWordpress title="WordPress" />
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section
          id="certifications"
          className="mx-auto max-w-7xl px-6 py-16 scroll-mt-28"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-8 animate-fade-up">
            Certifications
          </h2>
          <ul className="space-y-3">
            {[
              "Salesforce Certified Administrator",
              "Salesforce Platform App Builder",
              "CodeScan Developer Certification",
              "Microsoft Certified: Azure Fundamentals",
            ].map((cert, index) => (
              <li
                key={cert}
                className="rounded-lg bg-white/90 px-4 py-3 text-slate-700 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/70 hover:bg-white animate-fade-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {cert}
              </li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 py-16 text-center animate-fade-up scroll-mt-28"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-600 mb-6">
            Let’s connect! I’m open to opportunities and collaborations.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <p className="text-slate-600">
              📧 <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:kganyakekana@gmail.com"
                className="text-sky-700 hover:underline"
              >
                kganyakekana@gmail.com
              </a>
            </p>
            <p className="text-slate-600">
              📱 <span className="font-medium">Cell:</span>{" "}
              <a
                href="tel:+27653456789"
                className="text-sky-700 hover:underline"
              >
                +27 64 020 4765
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Link
              href="mailto:kganyakekana@gmail.com"
              className="text-slate-600 hover:text-sky-700"
            >
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/kekanadk"
              target="_blank"
              className="text-slate-600 hover:text-sky-700"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/kganya-kay"
              target="_blank"
              className="text-slate-600 hover:text-sky-700"
            >
              GitHub
            </Link>
          </div>
        </section>


        <footer className="bg-white/80 py-6 text-center text-sm text-slate-500 border-t border-slate-200/70">
          © {new Date().getFullYear()} Doctor Kganya Kekana. All rights reserved.
        </footer>
        {activeProject ? (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 p-6">
            <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {activeProject.name}
                  </h3>
                  <p className="mt-3 text-sm text-slate-700">
                    {activeProject.longDesc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="rounded-md border border-slate-200 px-3 py-1 text-sm text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {accessNotice ? (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 p-6">
            <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {accessNotice} is a client project
                  </h3>
                  <p className="mt-3 text-sm text-slate-700">
                    Due to client confidentiality, there is no public link. You can verify
                    my involvement by contacting me directly, checking my GitHub for
                    related work, or reaching out to references listed on my CV.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setAccessNotice(null)}
                  className="rounded-md border border-slate-200 px-3 py-1 text-sm text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
        </div>
      </div>
  );
}
