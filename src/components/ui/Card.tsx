interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Card = ({
  children,
  title,
  subtitle,
  headerAction,
  footer,
  variant = 'default',
  padding = 'md',
  hoverable = false,
  onClick,
  className = '',
}: CardProps) => {
  const baseStyles = 'rounded-xl bg-white transition-all duration-200';

  const variantStyles = {
    default: 'border border-gray-200',
    bordered: 'border-2 border-gray-300',
    elevated: 'shadow-lg',
  };

  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  const hoverStyles = hoverable ? 'hover:shadow-xl cursor-pointer' : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${clickableStyles} ${className}`}
    >
      {(title || subtitle || headerAction) && (
        <div className="flex items-start justify-between mb-4">
          <div>
            {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}

      <div>{children}</div>

      {footer && <div className="mt-4 pt-4 border-t border-gray-200">{footer}</div>}
    </div>
  );
};
