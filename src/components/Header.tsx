import { useAuth } from "../contexts/AuthContext";
import { pages } from "../data/pages";

const Header = () => {
  const { isAuthenticated, user } = useAuth();

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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border-primary/50 flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-3">
        <div>
          <span className="text-2xl font-bold tracking-tight">Wolfind</span>
          <p className="text-[10px] text-text-secondary -mt-0.5">
            NPTEL Course Finder
          </p>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium absolute left-1/2 -translate-x-1/2">
        {pages
          .filter((page) => page.isInHeader)
          .map((page) => (
            <a
              key={page.path}
              href={page.path}
              onClick={(e) => handleNavClick(e, page.path)}
              className="hover:text-text-primary-hover transition-colors"
            >
              {page.name}
            </a>
          ))}
      </nav>
      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-9 h-9 rounded-full object-cover ring-2 ring-white/30 hover:ring-white/60 transition-all cursor-pointer"
          />
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
};

export default Header;
