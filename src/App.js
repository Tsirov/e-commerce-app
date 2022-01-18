import { Routes, Route } from 'react-router-dom';



import Header from './components/Header';
import Slider from './components/Slider';


function App() {
    return (
        
        <div className="container">

            <Header />
            <Slider/>
{/* 
            <main id="site-content">
              <Routes>
                
              </Routes>
            </main>
 */}

            <footer id="site-footer">
              <p>@My said</p>
            </footer>
        </div>
    );
}

export default App;
