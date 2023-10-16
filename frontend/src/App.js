import Nav from './Nav'
import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import StudentRegister from './components/StudentRegister';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Registered from './components/Registered';
import AboutPage from './components/AboutPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/learn" element={<h1>This is Content Page</h1>}/>
        <Route path="/learn/courseoverview" element={<h1>This is Course Overview Page</h1>}/>
        <Route path="/learn/module1" element={<h1>This is Module1 Page</h1>}/>
        <Route path="/learn/module2" element={<h1>This is Module2 Page</h1>}/>
        <Route path="/games" element={<h1>This is Games page</h1>}/>
        <Route path="/play/quiz" element={<h1>This is Quiz page</h1>}/>
        <Route path="/play/storymode" element={<h1>This is Story page</h1>}/>
        </Route>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/register/student" element={<StudentRegister/>}/>
        <Route path="/register/parent" element={<h1>This is  Parent Register Page</h1>}/>
        <Route path="/register/educator" element={<h1>This is  Educator Register Page</h1>}/>
        <Route path="/support" element={<h1>This is Support Page</h1>}/>
        <Route path="/registered" element={<Registered/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
