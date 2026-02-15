import { useAuth } from "../contexts/AuthContext";
import { pages } from "../data/pages";

const Header = () => {
  const { isAuthenticated, user } = useAuth();
  return (
    <header className="relative flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold tracking-tight">Wolfind</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium absolute left-1/2 -translate-x-1/2">
        {pages
          .filter((page) => page.isInHeader)
          .map((page) => (
            <a
              key={page.path}
              href={page.path}
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
