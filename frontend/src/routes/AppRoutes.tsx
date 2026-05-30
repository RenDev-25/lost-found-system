import { Routes, Route } from 'react-router-dom';
import Home              from '../pages/Home';
import BrowseItems       from '../pages/BrowseItems';
import ItemDetails       from '../pages/ItemDetails';
import ReportLostItem    from '../pages/ReportLostItem';
import ReportFoundItem   from '../pages/ReportFoundItem';
import About             from '../pages/About';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"              element={<Home />} />
      <Route path="/browse"        element={<BrowseItems />} />
      <Route path="/item/:id"      element={<ItemDetails />} />
      <Route path="/report-lost"   element={<ReportLostItem />} />
      <Route path="/report-found"  element={<ReportFoundItem />} />
      <Route path="/about"         element={<About />} />
    </Routes>
  );
}
