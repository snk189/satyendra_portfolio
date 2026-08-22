export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Interests", href: "#interests", id: "interests" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Leadership", href: "#leadership", id: "leadership" },
  { label: "Achievements", href: "#achievements", id: "achievements" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const socialLinks = {
  github: "https://github.com/snk189",
  linkedin: "https://linkedin.com/in/satyendranayakk",
  email: "satnar189@gmail.com",
  phone: "+91-6362961607",
};
