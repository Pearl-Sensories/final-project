
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
import Lessons from './pages/Lessons'
import UnsubmittedForm from './pages/UnsubmittedForm'
import SubmittedForm from './pages/SubmittedForm'
import BottomNavbar from './pages/BottomNavbar'
import StudentHome from './pages/StudentHome'
import StudentDashboard from './pages/StudentDashboard'
import EditProfileStudent from './pages/EditProfileStudent'
import Level from './pages/Level'
import AdminDashboard from './pages/AdminDashboard'
import PendingTasks from './pages/PendingTasks'
import ApprovalSinglePage from './pages/ApprovalSinglePage'
import SuspendedAccounts from './pages/SuspendedAccounts'
import Payment from './pages/Payment'
import PaymentById from './pages/PaymentById'
import PendingTasksTutors from './pages/PendingTasksTutors'
import ReportTutor from './pages/ReportTutor'
import CompleteCourse from './pages/CompleteCourse'
import FavouriteLists from './pages/FavouriteLists'
import LogoutTutor from './pages/LogoutTutor'
import DeleteTutor from './pages/DeleteTutor'
import TutorProfileEdit from './pages/TutorProfileEdit'
import LessonsTutors from './pages/LessonsTutors'
import CompletedLessons from './pages/CompletedLessons'
import UncompletedLessons from './pages/UncompletedLessons'
import CompleteCourseTutor from './pages/CompleteCourseTutor'
import ContactUsStudent from './pages/ContactUsStudent'
import ResetPassword from './pages/ResetPassword'
import Message from './pages/Message'
import MessageTutor from './pages/MessageTutor'
import BookingForm from './pages/BookTutor'
import Edit from './pages/Edit'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      
    <Route path='/' element={<Home/>}></Route>
      <Route path='/createaccount' element={<Createaccount/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/createaccount/<signup/>' element={<Signup/>}></Route>
      <Route path='/createaccount/<signup/>/<terms/>' element={<Termscondi/>}></Route>
      <Route path='/selectcards' element={<SelectCards/>}></Route>
      <Route path='/level' element={<Level/>}></Route>


      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/delete' element={<Delete/>}></Route>
      <Route path='/teaching-preference' element={<TeachingPreference/>}></Route>
      <Route path='/details' element={<Details/>}></Route>
      <Route path='/professional-details' element={<ProfessionalDetails/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/profile-edit' element={<TutorProfileEdit/>}></Route>
      <Route path='/lessons-tutor' element={<LessonsTutors/>}></Route>
      <Route path='/completed-lessons' element={<CompletedLessons/>}></Route>
      <Route path='/uncompleted-lessons' element={<UncompletedLessons/>}></Route>
      <Route path='/complete-course' element={<CompleteCourseTutor/>}></Route>
      <Route path='/message-tutor' element={<MessageTutor/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>


      <Route path='/student-dashboard' element={<StudentDashboard/>}></Route>
      <Route path='/admin-dashboard' element={<AdminDashboard/>}></Route>
      <Route path='/pendingtasks' element={<PendingTasksTutors/>}></Route>
      <Route path='/logout-tutor' element={<LogoutTutor/>}></Route>
      <Route path='/delete-tutor' element={<DeleteTutor/>}></Route>
      <Route path='/resetpassword' element={<ResetPassword/>}></Route>
      <Route path='/booking' element={<BookingForm/>}></Route>
     
      


      <Route path='/lessons' element={<Lessons/>}></Route>
      <Route path='/lessons/unsubmitted' element={<UnsubmittedForm/>}></Route>
      <Route path='/lessons/submitted' element={<SubmittedForm/>}></Route>
      <Route path='/navbar' element={<BottomNavbar/>}></Route>
      <Route path='/home-student' element={<StudentHome/>}></Route>
      <Route path='/student-profile' element={<EditProfileStudent/>}></Route>
      <Route path='/pending' element={<PendingTasks/>}></Route>
      <Route path='/report-tutor' element={<ReportTutor/>}></Route>
      <Route path='/course-completion' element={<CompleteCourse/>}></Route>
      <Route path='/favourite-list' element={<FavouriteLists/>}></Route>
      <Route path='/contactus-student' element={<ContactUsStudent/>}></Route>
      <Route path='/message' element={<Message/>}></Route>


      <Route path='/single-page' element={<ApprovalSinglePage/>}></Route>
      <Route path='/suspended-accounts' element={<SuspendedAccounts/>}></Route>
      <Route path='/payments' element={<Payment/>}></Route>
      <Route path='/paymentid' element={<PaymentById/>}></Route>

      



    </Routes>
    </BrowserRouter>
  )
}

export default App;
