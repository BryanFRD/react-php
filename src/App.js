import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BaseScreen from './screens/BaseScreen';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import AccountScreen from './screens/AccountScreen';
import ArticleScreen from './screens/ArticleScreen';
import TagScreen from './screens/TagScreen';
import ThemeScreen from './screens/ThemeScreen';
import TagDetailScreen from './screens/TagDetailScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseScreen />}>
          <Route index element={<LandingScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/accounts' element={<AccountScreen />} />
          <Route path='/articles' element={<ArticleScreen />} />
          <Route path='/tags' element={<TagScreen />} />
          <Route path='/tag/:id' element={<TagDetailScreen />} />
          <Route path='/themes' element={<ThemeScreen />} />
          <Route path='*' element={<h1>404 not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
