import type { SelectHTMLAttributes } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = ({
  label,
  error,
  options,
  placeholder = 'Select an option',
  ...props
}: SelectProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-700 font-medium">{label}</label>
      <select
        {...props}
        className={`border rounded-xl p-2 outline-none focus:ring-2 focus:ring-primary bg-white ${
          error ? 'border-red-400' : 'border-gray-300'
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
