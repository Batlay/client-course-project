import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import NotesListPage from "../components/Notes/NotesList.jsx";
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

export const privateRoutes = [
    {path: '/about', component: <About />, exact: true},
    {path: '/posts', component: <Posts />, exact: true},
    {path: '/posts/:id', component: <PostIdPage/>, exact: true},
    {path: '/notes', component: <Notes />, exact: true},
    {path: '/notes/:id', component: <NotePage/>, exact: true},
    {path: '/notes/person/:id', component: <PersonNotes/>, exact: true},
    {path: '/pupils', component: <Pupils />, exact: true},
    {path: '/pupils/:id', component: <PupilPage />, exact: true},
    {path: '/tests/', component: <Tests />, exact: true},
    {path: '/tests/test4', component: <Test4 />, exact: true},
    {path: '/tests/test3', component: <Test3 />, exact: true},
    {path: '/tests/test2', component: <Test2 />, exact: true},
    {path: '/tests/test1', component: <Test1 />, exact: true},
    {path: '/pupils/report/:id', component: <Report />, exact: true},
    // {path: '/login', component: <Login />, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: <Login />, exact: true},
]