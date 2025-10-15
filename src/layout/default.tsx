import { useNavigate, useLocation } from 'react-router-dom';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuList = [
    {
      text: 'Dashboard',
      icon: 'dashboard',
      link: '/',
    },
    {
      text: 'TicTicTacToe',
      icon: 'tictactoe',
      link: '/games/tictactoe',
    },
    {
      text: 'Word puzzle',
      icon: 'wordpuzzle',
      link: '/games/wordpuzzle',
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="flex gap-4 w-full justify-center shadow-lg py-4 rounded-lg">
          {menuList.map((item, index) => (
            <button
              onClick={() => navigate(item.link)}
              key={index}
              className={`
                shadow-md p-3 rounded-lg cursor-pointer text-lg
                ${
                  location.pathname === item.link
                    ? 'bg-indigo-500 text-white'
                    : ' hover:text-white hover:bg-indigo-500 text-gray-500'
                }
              `}>
              {item.text}
            </button>
          ))}
        </div>
        <div className="min-h-screen bg-gray-100 p-4">{children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
