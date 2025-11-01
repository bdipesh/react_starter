import { useState, useRef, useEffect, type InputHTMLAttributes } from 'react';

interface AutocompleteOption {
  value: string;
  label: string;
}

interface AutocompleteProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  error?: string;
  options: AutocompleteOption[];
  onChange: (value: string) => void;
  onSelect?: (option: AutocompleteOption) => void;
  placeholder?: string;
  noResultsText?: string;
  maxResults?: number;
}

export const Autocomplete = ({
  label,
  error,
  options,
  onChange,
  onSelect,
  placeholder = 'Type to search...',
  noResultsText = 'No results found',
  maxResults = 10,
  value = '',
  ...props
}: AutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<AutocompleteOption[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Filter options based on input value
  useEffect(() => {
    if (typeof value === 'string' && value.length > 0) {
      const filtered = options
        .filter((option) => option.label.toLowerCase().includes(value.toLowerCase()))
        .slice(0, maxResults);
      setFilteredOptions(filtered);
      setIsOpen(filtered.length > 0);
    } else {
      setFilteredOptions([]);
      setIsOpen(false);
    }
  }, [value, options, maxResults]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setHighlightedIndex(-1);
  };

  const handleOptionClick = (option: AutocompleteOption) => {
    onChange(option.label);
    onSelect?.(option);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
          handleOptionClick(filteredOptions[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div className="flex flex-col gap-1" ref={wrapperRef}>
      <label className="text-sm text-gray-700 font-medium">{label}</label>
      <div className="relative">
        <input
          {...props}
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (filteredOptions.length > 0) setIsOpen(true);
          }}
          placeholder={placeholder}
          className={`w-full border rounded-xl p-2 outline-none focus:ring-2 focus:ring-primary ${
            error ? 'border-red-400' : 'border-gray-300'
          }`}
        />

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                  className={`p-2 cursor-pointer hover:bg-gray-100 ${
                    index === highlightedIndex ? 'bg-gray-100' : ''
                  }`}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500 text-sm">{noResultsText}</div>
            )}
          </div>
        )}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
