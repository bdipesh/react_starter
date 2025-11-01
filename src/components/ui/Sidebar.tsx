interface SidebarItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  badge?: string | number;
}

interface SidebarProps {
  items: SidebarItem[];
  activeItem?: string;
  onItemClick?: (value: string) => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  collapsed?: boolean;
  width?: 'sm' | 'md' | 'lg';
  position?: 'left' | 'right';
  className?: string;
}

export const Sidebar = ({
  items,
  activeItem,
  onItemClick,
  header,
  footer,
  collapsed = false,
  width = 'md',
  position = 'left',
  className = '',
}: SidebarProps) => {
  const widthStyles = {
    sm: collapsed ? 'w-16' : 'w-48',
    md: collapsed ? 'w-16' : 'w-64',
    lg: collapsed ? 'w-16' : 'w-80',
  };

  const handleItemClick = (item: SidebarItem) => {
    item.onClick?.();
    onItemClick?.(item.value);
  };

  return (
    <div
      className={`h-screen bg-white border-gray-200 flex flex-col transition-all duration-300 ${
        widthStyles[width]
      } ${position === 'right' ? 'border-l' : 'border-r'} ${className}`}
    >
      {header && <div className="p-4 border-b border-gray-200">{header}</div>}

      <nav className="flex-1 overflow-y-auto p-2">
        {items.map((item) => (
          <button
            key={item.value}
            onClick={() => handleItemClick(item)}
            className={`w-full flex items-center gap-3 px-3 py-2 mb-1 rounded-lg transition-colors ${
              activeItem === item.value
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            } ${collapsed ? 'justify-center' : ''}`}
          >
            {item.icon && <span className={`${collapsed ? 'text-xl' : ''}`}>{item.icon}</span>}
            {!collapsed && (
              <>
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </button>
        ))}
      </nav>

      {footer && <div className="p-4 border-t border-gray-200">{footer}</div>}
    </div>
  );
};
