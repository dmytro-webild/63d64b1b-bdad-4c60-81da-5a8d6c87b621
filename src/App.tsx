import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

import Home2Page from "@/pages/Home2Page";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home2" element={<Home2Page />} />
      </Route>
    </Routes>
  );
}
