import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-muted mt-8 ">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-text-muted text-sm">
          © {new Date().getFullYear()} Oplan James Mulbah. All rights reserved.
        </div>
        <div className="flex gap-8 text-sm font-medium">
          <Link
            className="text-text-muted hover:text-primary transition-colors"
            href="https://www.linkedin.com/in/oplano-james-mulbah/"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="text-text-muted hover:text-primary transition-colors"
            href="https://github.com/mulbahoplanojames"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
        <div className="text-text-muted/50 text-xs font-mono">v1.1.0</div>
      </div>
    </footer>
  );
}
