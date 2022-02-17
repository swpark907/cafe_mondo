import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Navbar, Auth, Footer} from './components'



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/auth" exact element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
