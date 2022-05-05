import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage';
import CreatePrank from './pages/CreatePrank';
import ShowPrank from './pages/showPrank';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Card from '@mui/material/Card';

function App() {
  return (
    <div className='App'>
      <div className='colflexwrapper'>
        <div className='col1'>
          <div className='rowflexwrapper'>
            <div className='leftsection'>
              left
            </div>
            <Card className='mainsection'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:type/:friend' element={<ShowPrank />} />
                <Route path='/createPrank' element={<CreatePrank />} />
                <Route path='/*' element={<ErrorPage />} />

              </Routes>
            </Card>
            <div className='rightsection'>

            </div>
          </div>
        </div>
        <div className='bottomsection'>
          bottom
        </div>
      </div>
    </div >
  );
}

export default App;
