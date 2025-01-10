// Main application component, setting up client-side routing
// using react-router-dom

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="settings" element={<Settings />} />
        </Route> */}
        {/* <Route path="/users/:id" element={<UserProfile />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// layout routes
// import { Outlet } from "react-router-dom";

// function DashboardLayout() {
//   return (
//     <div>
//       <Sidebar />
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// }
