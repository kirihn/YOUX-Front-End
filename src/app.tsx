import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import './app.scss';
import { CreateUserPage } from './pages/createUserPage/createUserPage';
import { UserListPage } from './pages/userListPage/userListPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/userList" element={<UserListPage/>} />
          <Route path="/createUser" element={<CreateUserPage />} />
          <Route path="/EditUser" element={<div>u</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
