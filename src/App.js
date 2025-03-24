import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home  from './pages/Home'
import Navbar from './components/Navbar'
import Createnew from'./pages/Createnew'
import Single from './pages/Single'
import Update from './pages/Update'
import Landingpage from './pages/Landingpage'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Landingpage/>}/>
        <Route path ='/blogss' element={<Home/>}/>
        <Route path='/create' element ={<Createnew/>}/>
        <Route path='/blogss/:id' element ={<Single/>}/> 
        <Route path="/blogss/:id/update" element={<Update />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
