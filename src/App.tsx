import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

import HomeRussianPage from "@/pages/HomeRussianPage";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-russian" element={<HomeRussianPage />} />
      </Route>
    </Routes>
  );
}
