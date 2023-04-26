import About from "../pages/About";
import Login from "../pages/Login";
import NotePage from "../pages/NotePage";
import Notes from '../pages/Notes'
import Pupils from "../pages/Pupils";
import PupilPage from "../pages/PupilPage";
import PersonNotes from "../pages/PersonNotes";
import Tests from "../pages/Tests";
import Test4 from "../components/Tests/Test4";
import Test3 from "../components/Tests/Test3";
import Test2 from "../components/Tests/Test2";
import Test1 from "../components/Tests/Test1";
import Report from "../components/Report/Report";
import ResetPassword from "../pages/ResetPassword";
import ChangePassword from "../pages/ChangePassword";
import Schools from "../pages/Schools";
import Classrooms from "../pages/Classrooms";
import ClassroomPupils from "../components/Pupils/ClassroomPupils";
import Specialist from "../pages/Specialist";
import EditSchools from "../pages/Admin/EditSchools";
import EditPupils from "../pages/Admin/EditPupils";
import EditClassrooms from "../pages/Admin/EditClassrooms";
import Contacts from "../pages/Contacts";
import Main from "../pages/Main";

export const adminRoutes = [
    {path: '/contacts', component: <Contacts />, exact: true},
    {path: '/administator/schools', component: <EditSchools />, exact: true},
    {path: '/administrator/schools/:id', component: <EditClassrooms />, exact: true},
    {path: '/administrator/classrooms/:id', component: <EditPupils />, exact: true},
]

export const teacherRoutes = [
    {path: '/contacts', component: <Contacts />, exact: true},
    {path: '/about', component: <About />, exact: true},
    {path: '/notes', component: <Notes />, exact: true},
    {path: '/notes/:id', component: <NotePage/>, exact: true},
    {path: '/notes/person/:id', component: <PersonNotes/>, exact: true},
    {path: '/pupils', component: <Pupils />, exact: true},
    {path: '/pupils/:id', component: <PupilPage />, exact: true},
    {path: '/pupils/report/:id', component: <Report />, exact: true},
]

export const pupilRoutes = [
    {path: '/contacts', component: <Contacts />, exact: true},
    {path: '/about', component: <About />, exact: true},
    {path: '/tests/', component: <Tests />, exact: true},
    {path: '/tests/test4', component: <Test4 />, exact: true},
    {path: '/tests/test3', component: <Test3 />, exact: true},
    {path: '/tests/test2', component: <Test2 />, exact: true},
    {path: '/tests/test1', component: <Test1 />, exact: true},
]

export const specRoutes = [
    {path: '/contacts', component: <Contacts />, exact: true},
    {path: '/schools', component: <Schools />, exact: true},
    {path: '/schools/:id', component: <Classrooms />, exact: true},
    {path: '/classrooms/:id', component: <ClassroomPupils />, exact: true},
    {path: '/specialist/:id', component: <Specialist />, exact: true},
]


export const publicRoutes = [
    {path: '/', component: <Main />, exact: true},
    {path: '/login', component: <Login />, exact: true},
    {path: '/about', component: <About />, exact: true},
    {path: '/contacts', component: <Contacts />, exact: true},
    {path: '/user-forgot-password', component: <ResetPassword />, exact: true},
    {path: '/user-change-password/:id', component: <ChangePassword />, exact: true},
]