import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SearchBar from "./SearchBar";
import CourseCard from "./CourseCard";
import { courses } from "../../../services/getCourses";

const SearchArea = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const isSearching = searchQuery.length > 0;
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(query) ||
        course.moCode?.toLowerCase().includes(query) ||
        course.mgCode?.toLowerCase().includes(query) ||
        course.dept.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Check if user is in top 100vh
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition > viewportHeight) return;

      // Ignore if user is already typing in an input, textarea, or contenteditable
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      // Ignore modifier keys and special keys
      if (
        e.ctrlKey ||
        e.metaKey ||
        e.altKey ||
        (e.shiftKey && e.key.length > 1) || // Allow Shift+letter but not Shift+special keys
        e.key.length > 1 // Ignore special keys like Enter, Escape, Tab, etc.
      ) {
        return;
      }

      // Focus the search input and let the character through
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="w-full h-screen pt-30">
      <motion.div
        layout
        className="mx-auto text-center px-6"
        initial={false}
        animate={{
          maxWidth: isSearching ? "1200px" : "1024px",
          paddingTop: isSearching ? "2rem" : "4rem",
          paddingBottom: isSearching ? "1.5rem" : "4rem",
        }}
        transition={{
          layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          maxWidth: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          paddingTop: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          paddingBottom: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
        }}
      >
        <motion.div
          layout
          className="space-y-4 mb-8"
          animate={{
            opacity: isSearching ? 0 : 1,
            height: isSearching ? 0 : "auto",
            marginBottom: isSearching ? 0 : "2rem",
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{ overflow: "hidden" }}
        >
          <h1 className="text-6xl md:text-6xl font-bold text-text-primary leading-tight tracking-tight">
            Hunt Down Your Course Code
          </h1>

          <p className="text-xl text-text-secondary font-normal max-w-2xl mx-auto leading-relaxed">
            Track the exact NPTEL/SWAYAM course ID you need
          </p>
        </motion.div>

        <motion.div layout>
          <SearchBar
            ref={searchInputRef}
            placeholder="Enter course name or keyword..."
            value={searchQuery}
            onChange={handleSearchChange}
            autoFocus
          />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto px-6 mt-8 pb-8"
          >
            <div className="text-sm text-text-secondary mb-4 flex items-center justify-between">
              <span>
                {filteredCourses.length}{" "}
                {filteredCourses.length === 1 ? "course" : "courses"} found
              </span>
              {filteredCourses.length > 0 && (
                <span className="text-xs text-text-secondary mr-3 flex items-center gap-1">
                  Scroll for more
                  <ArrowDown className="w-3 h-3 animate-bounce -mb-1.5" />
                </span>
              )}
            </div>

            <div className="relative">
              <div
                className="grid gap-3 max-h-[55vh] overflow-y-auto pr-2 
                           scrollbar-thin scrollbar-thumb-border-primary 
                           scrollbar-track-transparent hover:scrollbar-thumb-border-secondary
                           scroll-smooth"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "var(--border-primary) transparent",
                }}
              >
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>

              {/* Gradient fade at bottom */}
              {filteredCourses.length > 3 && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-background to-transparent pointer-events-none" />
              )}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-text-secondary text-lg">
                  No courses found matching your search
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchArea;
