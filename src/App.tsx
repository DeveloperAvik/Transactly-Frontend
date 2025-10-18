
import { Outlet } from 'react-router'
import './App.css'
import CommonLayouts from './components/layout/CommonLayouts'

function App() {

  return (
    <CommonLayouts>
      <Outlet />
    </CommonLayouts>
  )
}

export default App