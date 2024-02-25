import './App.css';
import Home from "./pages/Home.js";
import SearchPage from "./pages/SearchPage.js";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path="/search" element={
          <SearchPage/>
          }/>
          <Route path="/" element={<Home/>}/> 
        </Routes>
      
    </div>
  );
}

export default App;
