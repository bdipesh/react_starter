import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages';
import Tictactoe from './pages/games/tictactoe';
import DefaultLayout from './layout/default';
import WordPuzzle from '@/pages/games/wordpuzzle.tsx';
import Socket from '@/pages/socket/index.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Dashboard />
            </DefaultLayout>
          }
        />
        <Route
          path="/socket"
          element={
            <DefaultLayout>
              <Socket />
            </DefaultLayout>
          }
        />
        <Route
          path="/games/tictactoe"
          element={
            <DefaultLayout>
              <Tictactoe />
            </DefaultLayout>
          }
        />
        <Route
          path="/games/wordpuzzle"
          element={
            <DefaultLayout>
              <WordPuzzle />
            </DefaultLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
