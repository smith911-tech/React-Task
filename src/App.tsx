import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import TransFormation from "./TransFormation";
import Pipeline from "./Pipeline";
import Source from "./Source";
import Destination from "./Destination";
import Account from "./Account";
import Settings from "./Settings";
import Help from "./Help";
import Documentation from "./Documentation";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard/events" element={<Dashboard />} />
        <Route path="/Dashboard/transFormation" element={<TransFormation />} />
        <Route path="/Dashboard/pipeline" element={<Pipeline />} />
        <Route path="/Dashboard/source" element={<Source />} />
        <Route path="/Dashboard/destination" element={<Destination />} />
        <Route path="/Dashboard/account" element={<Account />} />
        <Route path="/Dashboard/settings" element={<Settings />} />
        <Route path="/Dashboard/help" element={<Help />} />
        <Route path="/Dashboard/documentation" element={<Documentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
