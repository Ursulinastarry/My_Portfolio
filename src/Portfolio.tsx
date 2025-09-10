import React, { useState, useEffect } from "react";
import {
  Plus, Save, X, Edit, Trash2,
  Home, User, FileText as Resume, Briefcase, Mail, Lock,
  Eye, EyeOff, Github, Linkedin, Phone, MapPin, FileText, Award,
  Code,
  Brain,
  Database
} from "lucide-react";

// -------------------------------------------------------
// Portfolio Component
// -------------------------------------------------------
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [editingItem, setEditingItem] = useState<{ type: "project" | "cert"; id: number } | null>(null);
  const [addingItem, setAddingItem] = useState<"project" | "cert" | null>(null);

  // Admin password from .env (safe fallback)
  const ADMIN_PASSWORD = import.meta.env?.VITE_ADMIN_PASSWORD || "fallback123";

  // Default data
  const defaultProjects = [
    {
      id: 1,
      title: "Fahari AI Salon-Booking System",
      description: "Regional salon booking platform with AI chat interface, real-time availability checks, and M-Pesa integration.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "SkillMatch – Enterprise Talent Matching",
      description: "Talent-matching platform with advanced filtering, scalable APIs, and real-time sync.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
  ];

  const defaultCerts = [
    { id: 1, title: "JS AI Build-a-thon Badge", issuer: "Microsoft", date: "2025", description: "AI & JS integration skills" },
    { id: 2, title: "Career Essentials in Software Development", issuer: "Microsoft & LinkedIn", date: "2024", description: "Software dev fundamentals" },
  ];

  const [projects, setProjects] = useState<any[]>(defaultProjects);
  const [certifications, setCertifications] = useState<any[]>(defaultCerts);

  // Load localStorage
  useEffect(() => {
    try {
      const storedProjects = localStorage.getItem("projects");
      const storedCerts = localStorage.getItem("certifications");
      if (storedProjects) setProjects(JSON.parse(storedProjects));
      if (storedCerts) setCertifications(JSON.parse(storedCerts));
    } catch {
      setProjects(defaultProjects);
      setCertifications(defaultCerts);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);
  useEffect(() => {
    localStorage.setItem("certifications", JSON.stringify(certifications));
  }, [certifications]);

  // Auth
  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowLogin(false);
      setPassword("");
    } else {
      alert("Incorrect password");
    }
  };
  const handleLogout = () => {
    setIsAdmin(false);
    setEditingItem(null);
    setAddingItem(null);
  };

  // CRUD
  const deleteProject = (id: number) => setProjects(projects.filter((p) => p.id !== id));
  const deleteCertification = (id: number) => setCertifications(certifications.filter((c) => c.id !== id));
  const saveProject = (id: number, updated: any) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, ...updated } : p)));
    setEditingItem(null);
  };
  const saveCertification = (id: number, updated: any) => {
    setCertifications(certifications.map((c) => (c.id === id ? { ...c, ...updated } : c)));
    setEditingItem(null);
  };
  const addProject = (newProject: any) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
    setAddingItem(null);
  };
  const addCertification = (newCert: any) => {
    setCertifications([...certifications, { ...newCert, id: Date.now() }]);
    setAddingItem(null);
  };

  // ---------------- Forms ----------------
  const ProjectEditForm = ({ project }: { project: any }) => {
    const [form, setForm] = useState(project);
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <input className="w-full mb-2 p-2 border rounded" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <textarea className="w-full mb-2 p-2 border rounded" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <div className="flex gap-2">
          <button onClick={() => saveProject(project.id, form)} className="bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-1"><Save size={16}/> Save</button>
          <button onClick={() => setEditingItem(null)} className="bg-gray-500 text-white px-3 py-1 rounded flex items-center gap-1"><X size={16}/> Cancel</button>
        </div>
      </div>
    );
  };

  const CertEditForm = ({ cert }: { cert: any }) => {
    const [form, setForm] = useState(cert);
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <input className="w-full mb-2 p-2 border rounded" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className="w-full mb-2 p-2 border rounded" value={form.issuer} onChange={(e) => setForm({ ...form, issuer: e.target.value })} />
        <input className="w-full mb-2 p-2 border rounded" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        <textarea className="w-full mb-2 p-2 border rounded" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <div className="flex gap-2">
          <button onClick={() => saveCertification(cert.id, form)} className="bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-1"><Save size={16}/> Save</button>
          <button onClick={() => setEditingItem(null)} className="bg-gray-500 text-white px-3 py-1 rounded flex items-center gap-1"><X size={16}/> Cancel</button>
        </div>
      </div>
    );
  };

  const ProjectAddForm = () => {
    const [form, setForm] = useState({ title: "", description: "", image: "" });
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <input className="w-full mb-2 p-2 border rounded" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <textarea className="w-full mb-2 p-2 border rounded" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <div className="flex gap-2">
          <button onClick={() => addProject(form)} className="bg-green-500 text-white px-3 py-1 rounded flex items-center gap-1"><Save size={16}/> Add</button>
          <button onClick={() => setAddingItem(null)} className="bg-gray-500 text-white px-3 py-1 rounded flex items-center gap-1"><X size={16}/> Cancel</button>
        </div>
      </div>
    );
  };

  const CertAddForm = () => {
    const [form, setForm] = useState({ title: "", issuer: "", date: "", description: "" });
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <input className="w-full mb-2 p-2 border rounded" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className="w-full mb-2 p-2 border rounded" placeholder="Issuer" value={form.issuer} onChange={(e) => setForm({ ...form, issuer: e.target.value })} />
        <input className="w-full mb-2 p-2 border rounded" placeholder="Date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        <textarea className="w-full mb-2 p-2 border rounded" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <div className="flex gap-2">
          <button onClick={() => addCertification(form)} className="bg-green-500 text-white px-3 py-1 rounded flex items-center gap-1"><Save size={16}/> Add</button>
          <button onClick={() => setAddingItem(null)} className="bg-gray-500 text-white px-3 py-1 rounded flex items-center gap-1"><X size={16}/> Cancel</button>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------
  // Render
  // -------------------------------------------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full p-3 border rounded-lg pr-12"
                placeholder="Enter admin password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="flex gap-2">
              <button onClick={handleLogin} className="flex-1 bg-indigo-600 text-white py-2 rounded-lg">Login</button>
              <button onClick={() => setShowLogin(false)} className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
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
                  activeTab === id ? "bg-indigo-100 text-indigo-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon size={16} /> {label}
              </button>
            ))}
          </nav>
          {isAdmin ? (
            <button onClick={handleLogout} className="bg-red-100 text-red-600 px-3 py-1 rounded">Logout</button>
          ) : (
            <button onClick={() => setShowLogin(true)} className="bg-gray-100 text-gray-600 px-3 py-1 rounded">Admin</button>
          )}
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === "home" && (
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1494790108755-2616b66d5e7b?w=200&h=200&fit=crop&crop=face" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h2 className="text-4xl font-bold mb-2">Paulina Wambua</h2>
            <p className="text-xl text-indigo-600 mb-4">Full-Stack Software Engineer</p>
            <p className="text-gray-600 max-w-2xl mx-auto">Dynamic engineer with expertise in scalable apps, AI integration, and modern cloud solutions.</p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow"><div className="text-3xl font-bold text-indigo-600 mb-2">3+</div><p>Years Experience</p></div>
              <div className="bg-white p-6 rounded-lg shadow"><div className="text-3xl font-bold text-indigo-600 mb-2">15+</div><p>Projects Completed</p></div>
              <div className="bg-white p-6 rounded-lg shadow"><div className="text-3xl font-bold text-indigo-600 mb-2">6+</div><p>Certifications</p></div>
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="grid md:grid-cols-2 gap-8">
            <img src="https://images.unsplash.com/photo-1494790108755-2616b66d5e7b?w=500&h=600&fit=crop&crop=face" alt="About me" className="w-full rounded-lg shadow-lg" />
            <div>
              <p className="text-gray-600 mb-4">I build scalable, AI-driven solutions combining technical depth with agile teamwork.</p>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Contact Info</h3>
                <p className="flex items-center gap-2"><Mail size={16}/> paulinawambua8@gmail.com</p>
                <p className="flex items-center gap-2"><Phone size={16}/> +254706520320</p>
                <p className="flex items-center gap-2"><MapPin size={16}/> Nyeri, Kenya</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><h3 className="font-semibold">Frontend</h3><ul className="text-gray-600 text-sm"><li>React, Angular</li><li>TypeScript, JS</li><li>HTML, CSS</li></ul></div>
                <div><h3 className="font-semibold">Backend</h3><ul className="text-gray-600 text-sm"><li>Node.js, Express</li><li>.NET Core</li><li>APIs, Microservices</li></ul></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "resume" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <div className="border-l-2 border-indigo-500 pl-4 mb-4">
                <h4 className="font-semibold">Software Engineer Intern</h4>
                <p className="text-indigo-600">Teach2Give • Feb–Apr 2025</p>
                <p className="text-gray-600 text-sm">Built backend features, automated testing, refactored codebase.</p>
              </div>
              <div className="border-l-2 border-indigo-500 pl-4">
                <h4 className="font-semibold">IT Systems Analyst Intern</h4>
                <p className="text-indigo-600">Dedan Kimathi University • Jan–Mar 2024</p>
                <p className="text-gray-600 text-sm">System troubleshooting, DB optimization, web dev.</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="border-l-2 border-indigo-500 pl-4 mb-4">
                <h4 className="font-semibold">BSc Computer Science</h4>
                <p className="text-indigo-600">Dedan Kimathi University • 2021–2025</p>
              </div>
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <ul className="text-gray-600 text-sm list-disc ml-5"><li>English (Fluent)</li><li>Kiswahili (Fluent)</li></ul>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Code />, title: "Web Development", desc: "Full-stack apps with modern frameworks." },
              { icon: <Brain />, title: "AI Integration", desc: "Smart features powered by machine learning." },
              { icon: <Database />, title: "Backend Systems", desc: "APIs, databases, and cloud deployments." },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="text-indigo-600 mb-3">{s.icon}</div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Projects and Certifications — already handled in your last version */}
         {activeTab === "projects" && (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold">Projects</h2>
      {isAdmin && !addingItem && (
        <button
          onClick={() => setAddingItem("project")}
          className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200"
        >
          <Plus size={16}/> Add Project
        </button>
      )}
    </div>
    {addingItem === "project" && <ProjectAddForm />}
    <div className="grid md:grid-cols-2 gap-6 mt-4">
      {projects.map((p) => (
        <div key={p.id}>
          {editingItem?.type === "project" && editingItem.id === p.id ? (
            <ProjectEditForm project={p} />
          ) : (
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={p.image} className="w-full h-40 object-cover rounded" />
              <h3 className="text-xl font-semibold mt-2">{p.title}</h3>
              <p className="text-gray-600">{p.description}</p>
              {isAdmin && (
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setEditingItem({ type: "project", id: p.id })}
                    className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded flex items-center gap-1"
                  >
                    <Edit size={16}/> Edit
                  </button>
                  <button
                    onClick={() => deleteProject(p.id)}
                    className="bg-red-100 text-red-600 px-3 py-1 rounded flex items-center gap-1"
                  >
                    <Trash2 size={16}/> Delete
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)}

{activeTab === "certifications" && (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold">Certifications</h2>
      {isAdmin && !addingItem && (
        <button
          onClick={() => setAddingItem("cert")}
          className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200"
        >
          <Plus size={16}/> Add Certification
        </button>
      )}
    </div>
    {addingItem === "cert" && <CertAddForm />}
    <div className="grid md:grid-cols-2 gap-6 mt-4">
      {certifications.map((c) => (
        <div key={c.id}>
          {editingItem?.type === "cert" && editingItem.id === c.id ? (
            <CertEditForm cert={c} />
          ) : (
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="text-gray-600">{c.issuer} – {c.date}</p>
              <p className="text-sm text-gray-500">{c.description}</p>
              {isAdmin && (
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setEditingItem({ type: "cert", id: c.id })}
                    className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded flex items-center gap-1"
                  >
                    <Edit size={16}/> Edit
                  </button>
                  <button
                    onClick={() => deleteCertification(c.id)}
                    className="bg-red-100 text-red-600 px-3 py-1 rounded flex items-center gap-1"
                  >
                    <Trash2 size={16}/> Delete
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)}

        {activeTab === "contact" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <form className="bg-white p-6 rounded-lg shadow space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
                <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows={4}></textarea>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Send</button>
              </form>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3"><Mail /> paulinawambua8@gmail.com</div>
              <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3"><Phone /> +254706520320</div>
              <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3"><Linkedin /> linkedin.com/in/paulinawambua</div>
              <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3"><Github /> github.com/paulinawambua</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;
