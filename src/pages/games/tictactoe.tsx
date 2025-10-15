import { useState } from 'react';

const Square = ({ value, onClick }: { value: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-16 h-16 font-semibold text-xl border border-gray-300 m-1">
    {value}
  </button>
);

const Tictactoe = () => {
  const [board, setBoard] = useState<string[][]>(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill('')),
  );
  const resetGame = () => {
    setBoard(
      Array(3)
        .fill(null)
        .map(() => Array(3).fill('')),
    );
    setCurrentPlayer('X');
  };
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const isBoardFull = () => {
    return board.flat().every((cell) => cell !== '');
  };

  const handleBoxClick = (rowIndex: number, cellIndex: number) => {
    let newBoard = board.slice();
    if (['O', 'X'].includes(newBoard[rowIndex][cellIndex])) return;
    newBoard[rowIndex][cellIndex] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="shadow-lg bg-white md:w-1/3 w-full sm:w-1/2 p-4 rounded-lg">
          <div>
            <div className="flex justify-between items-center">
              <div className="text-2xl mb-3">Enjoy the game !!!</div>
              <button
                onClick={() => resetGame()}
                className="bg-red-500 text-white px-4 py-2 rounded-md">
                Reset
              </button>
            </div>
            <div className="bg-indigo-50 my-3 p-3 text-center">
              {!isBoardFull() && (
                <div className="text-blue-500 text-xl font-semibold">
                  {' '}
                  Current Player: {currentPlayer}
                </div>
              )}
              {isBoardFull() && (
                <div className="text-red-500 text-xl font-semibold">
                  {' '}
                  It's a Draw! 🤝
                </div>
              )}
            </div>
            {board.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">
                {row.map((cell, cellIndex) => (
                  <Square
                    value={cell}
                    key={cellIndex}
                    onClick={() => handleBoxClick(rowIndex, cellIndex)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Tictactoe;
