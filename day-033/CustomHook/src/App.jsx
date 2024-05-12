

import './App.css'
import { useToggle} from "./useToggle"
function App() {
  const [isVisible,toggle] = useToggle();

  return (
    <div className='App'>
     <button onClick={toggle}>{isVisible ? "Hide ": "Show"}
     </button>
     {isVisible && <h1> Hidden Text </h1>}
    </div>
  )
}

export default App
