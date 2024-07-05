import './App.css';
import Home from './components/home/Home';
import NewsComponent from './components/news/NewsComponent';
import Video from './components/video/Video';
import {Route,BrowserRouter,Routes} from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <h2>Hello everyone...,{props.name}</h2>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/video' element={<Video/>}/>
      <Route path='/news' element={<NewsComponent/>}/>
      <Route/>
      <Route/>
      </Routes>
      </BrowserRouter>
    
      <Home/>
    </div>
  );
}

export default App;
