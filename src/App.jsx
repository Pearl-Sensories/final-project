
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home'
import Createaccount from './pages/Createaccount'
import Signup from './pages/Signup'
import Termscondi from './pages/Termscondi'
import Profile from './pages/Profile'
import SelectCards from './pages/SelectCards'
import Delete from './pages/Delete'
import TeachingPreference from './pages/TeachingPreference'
import Details from './pages/Details'
import ProfessionalDetails from './pages/ProfessionalDetails'
import Logout from './pages/Logout'
import ContactUs from './pages/ContactUs'
import ProfileStudent from './pages/ProfileStudent'
import Lessons from './pages/Lessons'
import UnsubmittedForm from './pages/UnsubmittedForm'
import SubmittedForm from './pages/SubmittedForm'
import BottomNavbar from './pages/BottomNavbar'
import StudentHome from './pages/StudentHome'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      
    <Route path='/' element={<Home/>}></Route>
      <Route path='/createaccount' element={<Createaccount/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/createaccount/<signup/>' element={<Signup/>}></Route>
      <Route path='/createaccount/<signup/>/<terms/>' element={<Termscondi/>}></Route>


      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/selectcards' element={<SelectCards/>}></Route>
      <Route path='/delete' element={<Delete/>}></Route>
      <Route path='/teaching-preference' element={<TeachingPreference/>}></Route>
      <Route path='/details' element={<Details/>}></Route>
      <Route path='/professional-details' element={<ProfessionalDetails/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>


      <Route path='/studnet-profile' element={<ProfileStudent/>}></Route>
      <Route path='/lessons' element={<Lessons/>}></Route>


      <Route path='/lessons/unsubmitted' element={<UnsubmittedForm/>}></Route>
      <Route path='/lessons/submitted' element={<SubmittedForm/>}></Route>
      <Route path='/navbar' element={<BottomNavbar/>}></Route>
      <Route path='/home-student' element={<StudentHome/>}></Route>



    </Routes>
    </BrowserRouter>
  )
}

export default App;
