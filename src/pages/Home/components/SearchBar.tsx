import { forwardRef } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  autoFocus?: boolean;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    { placeholder = "Search...", value, onChange, onSearch, autoFocus = true },
    ref,
  ) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSearch?.(value || "");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const handleClear = () => {
      onChange?.("");
    };

    return (
      <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-input-placeholder" />
          <input
            ref={ref}
            type="text"
            name="search"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className="w-full bg-input-bg border border-input-border text-input-text placeholder:text-input-placeholder rounded-xl pl-14 pr-14 py-4 text-lg focus:outline-none focus:border-input-border-focus transition-colors duration-200"
          />
          {value && value.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-input-placeholder hover:text-text-secondary transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </form>
    );
  },
);

SearchBar.displayName = "SearchBar";

export default SearchBar;
