import { pages } from "../data/pages";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    if (path.startsWith("/#")) {
      e.preventDefault();
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="border-t border-border-primary bg-background-secondary mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight mb-3">Wolfind</h2>
            <p className="text-text-secondary text-sm max-w-md leading-relaxed">
              Find your completed NPTEL course codes and register them
              seamlessly in Eduserve.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4 text-text-primary">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {pages
                .filter((page) => page.isInFooter)
                .map((page) => (
                  <li key={page.path}>
                    <a
                      href={page.path}
                      onClick={(e) => handleNavClick(e, page.path)}
                      className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                    >
                      {page.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4 text-text-primary">
              Resources
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://nptel.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                >
                  NPTEL
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Berfin-23/wolfind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm inline-flex items-center gap-1.5"
                >
                  GitHub
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-secondary flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs">
            © {currentYear} Wolfind. Open source project built for students.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Berfin-23/wolfind"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors text-xs"
            >
              Contribute
            </a>
            <a
              href="https://github.com/Berfin-23/wolfind/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors text-xs"
            >
              Report Issue
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
