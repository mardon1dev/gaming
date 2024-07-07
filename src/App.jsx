import { Fragment } from 'react'
import './App.css'
import SideMenu from './Components/SideMenu/SideMenu'
import Daashboard from './Components/Main/Dashboard/Dashboard'
import Aside from './Components/Aside/Aside'
import { GamingProvider } from './Components/Context/Context'

function App() {

  return (
    <GamingProvider>
      <Fragment>
        <div className=''>
          <div className='container'>
            <div className='flex flex-row items-start min-h-[100vh] bg-[#191B1F] text-white'>
            <SideMenu/>
            <Daashboard/>
            <Aside/>  
            </div>
          </div>  
        </div>
      </Fragment>
    </GamingProvider>
  )
}

export default App
