import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AIHelp = () => {
  const links = [
    { name: "College Suggestion", path: "college" },
    { name: "Career Path", path: "career" },
    { name: "Job Matches", path: "company" }, // CompanySuggestions
    { name: "Skill Guidance", path: "career" }, // Alias
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-muted border-r border-border p-6">
        <nav className="space-y-4">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition font-medium ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-primary/10 hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AIHelp;
