import React from "react";
import { NavLink } from "react-router-dom";
import { Btn } from "./ui/Btn";

const Header = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Sessions", path: "/sessions" },
        { name: "Hackathons", path: "/hackathons" },
        { name: "HR Network", path: "/hrnetwork" },
        { name: "AI Help", path: "/aihelp/college" },
        { name: "Resume Upload", path: "/resumeupload" },
    ];

    return (
        <header className="bg-background/80 backdrop-blur border-b border-border sticky top-0 z-10 shadow-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <NavLink to="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
                        RefeRing
                    </NavLink>

                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {navItems.map(({ name, path }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `text-base font-medium transition-colors ${isActive
                                        ? "text-primary underline underline-offset-4"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`
                                }
                            >
                                {name}
                            </NavLink>
                        ))}

                        <Btn
                            variant="ghost"
                            size="sm"
                            className="border border-border text-foreground hover:border-primary hover:bg-primary hover:text-white"
                        >
                            Sign in
                        </Btn>
                        <Btn
                            variant="ghost"
                            size="sm"
                            className="border border-border text-foreground hover:border-primary hover:bg-primary hover:text-white"
                        >
                            Sign Up
                        </Btn>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
