import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, LucideIcon } from "lucide-react";

interface SocialLink {
  id: number;
  icon: LucideIcon;
  link: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: Github,
    link: "https://github.com/mulbahoplanojames",
    label: "GitHub Profile",
  },
  {
    id: 2,
    icon: Linkedin,
    link: "https://linkedin.com/in/oplano-james-mulbah/",
    label: "LinkedIn Profile",
  },
  {
    id: 3,
    icon: Twitter,
    link: "https://x.com/JamesOplan23726",
    label: "Twitter Profile",
  },
  {
    id: 4,
    icon: Mail,
    link: "mailto:mulbahjamesoplano@gmail.com",
    label: "Send Email",
  },
];

export default function SocialLinks() {
  return (
    <div className="space-x-4 mt-5 mb-2 relative z-10">
      {socialLinks.map(({ id, icon: Icon, link, label }) => (
        <Button
          variant="secondary"
          size="icon"
          className="cursor-pointer hover:opacity-50 relative"
          asChild
          key={id}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
            aria-label={label}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">{label}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}
