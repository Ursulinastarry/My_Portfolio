import React, { useState } from "react";
import {
  Home,
  User,
  FileText as Resume,
  Briefcase,
  FileText,
  Award,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Code,
  Brain,
  Database,
} from "lucide-react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("home");

  // ---------------- READ-ONLY DATA ----------------
  const projects = [
    {
      id: 1,
      title: "Fahari AI Salon-Booking System",
      description:
        "Regional salon booking platform with AI chat interface to guide users. Features authentication, real-time conflict checks, and M-Pesa payments.",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
      video: "/videos/fahari.mp4", // demo hosted video
      presentation: "",
    },
     {
      id: 2,
      title: "Digital Library Management",
      description:
        "Role-based access system with JWT authentication, CRUD workflows, and responsive design.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      video: "/videos/library.mp4", // demo hosted video
 
      presentation: "https://www.linkedin.com/in/paulina-wambua-2b11a4261/details/projects/692783978/multiple-media-viewer?profileId=ACoAAEBHIqUBGV_rUq8ejXAL8C8zNQ_ktgn1F_0&treasuryMediaId=1757340691266&type=DOCUMENT&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BGRj3RzpCSXCXzcD1Cm8hiQ%3D%3D",
    },
    {
      id: 3,
      title: "SkillMatch – Talent Matching",
      description:
        "Enterprise system serving 500+ users with scalable REST APIs, advanced filtering, and real-time sync.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      liveLink: "https://skillmatch-mu.vercel.app/",
      
      presentation: "https://www.linkedin.com/in/paulina-wambua-2b11a4261/details/projects/699826018/multiple-media-viewer?profileId=ACoAAEBHIqUBGV_rUq8ejXAL8C8zNQ_ktgn1F_0&treasuryMediaId=1757341450635&type=DOCUMENT&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BGRj3RzpCSXCXzcD1Cm8hiQ%3D%3D",
    },
   
  ];

  const certifications = [
    {
      id: 1,
      title: "JS AI Build-a-thon Badge",
      issuer: "Microsoft Americas Azure Team",
      date: "2025",
      description: "Advanced JavaScript + AI integration skills recognition",
    },
    {
      id: 2,
      title: "Career Essentials in Software Development",
      issuer: "Microsoft & LinkedIn",
      date: "2025",
      description: "Comprehensive software development fundamentals",
    },
    {
      id: 3,
      title: "Agile Project Management Professional",
      issuer: "Google (Coursera)",
      date: "2025",
      description: "Advanced agile methodologies and project management",
    },
    {
      id: 4,
      title: "Advanced Software Engineering and QA",
      issuer: "Teach2Give",
      date: "2025",
      description: "Advanced software engineering and quality assurance practices",
    },
    {
      id: 5,
      title: "Frontend Web Development",
      issuer: "Alison",
      date: "2023",
      description: "Fundamentals of frontend web development",
    },
    {
      id: 6,
      title: "French DELF/DALF B1",
      issuer: "Alliance Francaise",
      date: "2025",
      description: "Intermediate French language proficiency certification",
    },
    {
      id: 7,
      title: "English Professional Proficiency",
      issuer: "EF SET",
      date: "2025",
      description: "Advanced English language proficiency certification",
    },
    
  ];

  // ---------------- COMPONENT ----------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Header Nav */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Paulina Wambua</h1>
          <nav className="flex space-x-2">
            {[
              { id: "home", label: "Home", icon: Home },
              { id: "about", label: "About", icon: User },
              { id: "resume", label: "Resume", icon: Resume },
              { id: "services", label: "Services", icon: Briefcase },
              { id: "projects", label: "Projects", icon: FileText },
              { id: "certifications", label: "Certifications", icon: Award },
              { id: "contact", label: "Contact", icon: Mail },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-1 px-3 py-1 rounded-md ${
                  activeTab === id
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon size={16} /> {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* HOME */}
        {activeTab === "home" && (
          <div className="text-center">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocLbnTcnXMIOwe71_nCy_1WfmjAt1U4Pf6pvil4_L5EU0wVUonYD=s288-c-no"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-4xl font-bold mb-2">Paulina Wambua</h2>
            <p className="text-indigo-600 text-lg">Full-Stack Software Engineer</p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Dynamic engineer with expertise in AI-driven solutions and scalable
              applications. Experienced in modern frameworks, cloud services,
              and agile practices.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-indigo-600 mb-2">3+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-indigo-600 mb-2">15+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-indigo-600 mb-2">6+</div>
                <p className="text-gray-600">Certifications</p>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT */}
        {activeTab === "about" && (
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail size={16} /> paulinawambua8@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} /> +254706520320
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} /> Remote • Flexible across EMEA & US time zones || on-site • Nairobi, Kenya
                </div>
              
              </div>
              <br />
            <img
              src="https://avatars.githubusercontent.com/u/134439319?v=4"
              alt="About"
              className="rounded-lg shadow-lg"
            />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Full-Stack Software Engineer passionate about innovation in
                enterprise systems and exceptional user experiences.
              </p>
              <div>
                 <h3 className="text-xl font-bold mb-4">Skills</h3>
              <div className="border-l-2 border-indigo-500 pl-4 mb-6">
                <h4 className="font-semibold">Frontend</h4>
                <ul className="text-gray-600 mt-2 list-disc ml-5 text-sm">
                  <li>React(JS and Typescript)</li>
                  <li>Angular(Typescript)</li>
                  <li>HTML, CSS, Tailwind</li>
                </ul>
              </div>
              <div className="border-l-2 border-indigo-500 pl-4 mb-6">
                <h4 className="font-semibold">Backend</h4>
                <ul className="text-gray-600 mt-2 list-disc ml-5 text-sm">
                  <li>Node.js</li>
                  <li>Express(Typescript)</li>
                  <li>PostgreSQL and Prisma</li>
                </ul>
              </div>
              
              </div>
              <div className="border-l-2 border-indigo-500 pl-4 mb-6">
                <h4 className="font-semibold">Deployment</h4>
                <ul className="text-gray-600 mt-2 list-disc ml-5 text-sm">
                  <li>Docker</li>
                  <li>AWS (EC2, S3)</li>
                  <li>Azure</li>

                  <li>CI/CD (GitHub Actions)</li>
                </ul>
              </div>
              <div className="border-l-2 border-indigo-500 pl-4 mb-6">
                <h4 className="font-semibold">Tools</h4>
                <ul className="text-gray-600 mt-2 list-disc ml-5 text-sm">
                  <li>Visual Studio Code</li>
                  <li>Postman</li>
                  <li>Git</li>
                  <li>Agile</li>
                  <li>Jira</li>
                </ul>
              </div>
              
            </div>
          </div>
        )}

        {/* RESUME */}
        {activeTab === "resume" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <div className="border-l-2 border-indigo-500 pl-4 mb-6">
                <h4 className="font-semibold">Software Engineer Intern</h4>
                <p className="text-indigo-600">Teach2Give • Feb–Apr 2025</p>
                <ul className="text-gray-600 mt-2 list-disc ml-5 text-sm">
                  <li>Contributed to backend web projects in an agile team</li>
                  <li>Improved reliability by 30% with automated testing (Jest)</li>
                  <li>Refactored codebase for performance</li>
                </ul>
              </div>
              <div className="border-l-2 border-indigo-500 pl-4">
                <h4 className="font-semibold">IT Systems Analyst Intern</h4>
                <p className="text-indigo-600">DeKUT IT Dept • Jan–Mar 2024</p>
                <ul>
                  <li>• Supported system troubleshooting and network infrastructure.</li>
                  <li>• Contributed to database optimization and web application development.</li>
                  <li>• Delivered technical documentation and stakeholder reports.</li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="border-l-2 border-indigo-500 pl-4 mb-6">
                <h4 className="font-semibold">BSC Computer Science - Dedan Kimathi University of Technology</h4>
                <p className="text-indigo-600">Expected graduation: April 2026</p>
                <ul className="text-gray-600 mt-2 list-disc ml-5 text-sm">
                  <li> Contributed to numerous projects as part of my coursework.</li>
                  <li> Coursework: Data Structures & Algorithms, Software Engineering, Databases, Networks 
</li>
                  <li> Activities: Member, Stunners Hockey Team </li>
                </ul>
              </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between">
                    <span>English</span> <span className="text-green-600">Fluent</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded">
                    <div className="bg-green-500 h-2 rounded w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>Kiswahili</span> <span className="text-green-600">Fluent</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded">
                    <div className="bg-green-500 h-2 rounded w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>French</span> <span className="text-blue-600">B1</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded">
                    <div className="bg-blue-500 h-2 rounded w-3/5"></div>
                  </div>
                </div>
              </div>
            </div>
             {/* View Resume Button */}
    <div className="text-center mt-8">
      <a
        href="/Paulina_Wambua_Resume.pdf"   // place PDF in /public
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
      >
        <FileText size={20} />
        View Full Resume (PDF)
      </a>
    </div>
          </div>
        )}

        {/* SERVICES */}
        {activeTab === "services" && (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code size={28} />,
                title: "Web Development",
                desc: "Full-stack apps with modern frameworks.",
              },
              {
                icon: <Brain size={28} />,
                title: "AI Integration",
                desc: "Smart features powered by ML/AI.",
              },
              {
                icon: <Database size={28} />,
                title: "Backend Systems",
                desc: "APIs, databases, and cloud deployments.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="text-indigo-600 mb-3">{s.icon}</div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* PROJECTS */}
        {activeTab === "projects" && (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.description}</p>
                {p.liveLink && (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    className="block mt-2 text-indigo-600 hover:underline"
                  >
                    🔗 Live Demo
                  </a>
                )}
                {p.video && (
                  <video controls className="w-full rounded mt-3">
                    <source src={p.video} type="video/mp4" />
                  </video>
                )}
                {p.presentation && (
                  <a
                    href={p.presentation}
                    className="block mt-2 text-green-600 hover:underline"
                  >
                    📑 Download PPTX
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CERTIFICATIONS */}
        {activeTab === "certifications" && (
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((c) => (
              <div
                key={c.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-indigo-600 text-sm">
                  {c.issuer} • {c.date}
                </p>
                <p className="text-gray-600 text-sm mt-2">{c.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* CONTACT */}
        {activeTab === "contact" && (
          <div className="grid md:grid-cols-2 gap-8">
            <form className="bg-white p-6 rounded-lg shadow space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-2 border rounded"
              ></textarea>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded">
                Send
              </button>
            </form>
            <div className="space-y-4">
              <a
                href="mailto:paulinawambua8@gmail.com"
                className="bg-white p-4 rounded-lg shadow flex items-center gap-3 hover:bg-indigo-50 transition"
              >
                <Mail /> paulinawambua8@gmail.com
              </a>
              <a
                href="tel:+254706520320"
                className="bg-white p-4 rounded-lg shadow flex items-center gap-3 hover:bg-indigo-50 transition"
              >
                <Phone /> +254706520320
              </a>
              <a
                href="https://www.linkedin.com/in/paulina-wambua-2b11a4261/"
                target="_blank"
                className="bg-white p-4 rounded-lg shadow flex items-center gap-3 hover:bg-blue-50 transition"
              >
                <Linkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/Ursulinastarry"
                target="_blank"
                className="bg-white p-4 rounded-lg shadow flex items-center gap-3 hover:bg-gray-100 transition"
              >
                <Github /> GitHub
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;
