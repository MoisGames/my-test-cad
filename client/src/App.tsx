import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import ContactsPage from './components/pages/ContactsPage';

const App = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<MainPage />}></Route>
                <Route path='/contacts' element={<ContactsPage />}></Route>
                <Route path='*' element={<MainPage />} ></Route>
            </Route>
        </Routes>
        </>
    );
};

export default App;