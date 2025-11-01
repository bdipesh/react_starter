import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-700 font-medium">{label}</label>
      <input
        {...props}
        className={`border rounded-xl p-2 outline-none focus:ring-2 focus:ring-primary ${
          error ? 'border-red-400' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
