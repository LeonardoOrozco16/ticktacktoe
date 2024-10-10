import { GameProvider } from './context/GameContext';
import { AppUI } from './AppUI';
import './App.css'


function App() {
  return (
    <>
      <GameProvider>
        <AppUI />
      </GameProvider>
    </>
  )
}

export default App
