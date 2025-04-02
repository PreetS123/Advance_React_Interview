import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar';
import { challenges } from './utils/routes';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
              {Object.keys(challenges)?.flatMap(phase=>(
                 challenges[phase]?.map(({ path, component: Component })=>(
                  <Route 
                    key={path}
                    path={path}
                    element={<Component/>}
                  />
                 ))
              ))}
      </Routes>
    </>
  )
}

export default App
