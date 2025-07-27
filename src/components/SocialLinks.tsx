import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    id: 1,
    icon: <Github className="h-4 w-4" />,
    link: "https://github.com/mulbahoplanojames",
  },
  {
    id: 2,
    icon: <Linkedin className="h-4 w-4" />,
    link: "https://linkedin.com/in/oplano-james-mulbah/",
  },
  {
    id: 3,
    icon: <Twitter className="h-4 w-4" />,
    link: "https://x.com/JamesOplan23726",
  },
  {
    id: 4,
    icon: <Mail className="h-4 w-4" />,
    link: "mailto:mulbahjamesoplano@gmail.com",
  },
];

export default function SocialLinks() {
  return (
    <div className="space-x-4 mt-5 mb-2 relative z-10">
      {socialLinks.map((link) => (
        <Button
          variant="secondary"
          size="icon"
          className="cursor-pointer hover:opacity-50 relative"
          asChild
          key={link.id}
        >
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            {link.icon}
            <span className="sr-only">{link.link}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}
