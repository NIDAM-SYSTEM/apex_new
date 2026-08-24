import { useRef, type FormEvent } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  size?: 'default' | 'large';
}

export default function SearchBar({
  onSearch,
  placeholder = 'Rechercher des cours, modules, examens, TDs…',
  size = 'large',
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = inputRef.current?.value.trim() ?? '';
    if (query) {
      onSearch?.(query);
    }
  };

  return (
    <form
      role="search"
      aria-label="Recherche de ressources académiques"
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div
        className={`relative flex items-center bg-apex-surface rounded-card border-2 border-apex-border transition-all duration-200
          focus-within:border-apex-blue focus-within:shadow-search
          ${size === 'large' ? 'h-14' : 'h-11'}`}
      >
        {/* Search Icon */}
        <div
          className="pl-4 pr-2 flex-shrink-0 text-apex-gray-light pointer-events-none"
          aria-hidden="true"
        >
          <Search
            className={size === 'large' ? 'w-5 h-5' : 'w-4 h-4'}
            strokeWidth={2}
          />
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          id="search-hero"
          type="search"
          name="q"
          placeholder={placeholder}
          autoComplete="off"
          aria-label="Terme de recherche"
          className={`flex-1 bg-transparent border-none outline-none font-body text-apex-dark placeholder-apex-gray-light
            ${size === 'large' ? 'text-base' : 'text-sm'}`}
        />

        {/* Submit button */}
        <div className="pr-2 flex-shrink-0">
          <button
            type="submit"
            className={`btn-primary ${size === 'large' ? 'px-5 py-2.5' : 'px-4 py-1.5 text-sm'}`}
            aria-label="Lancer la recherche"
          >
            <span className="hidden sm:inline">Rechercher</span>
            <Search className="sm:hidden w-4 h-4" strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  );
}
