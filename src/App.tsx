import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { useMode } from "./theme";
import SideBar from "./scenes/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./scenes/dashboard";
import GoalsPage from "./scenes/goals";
import TrackPage from "./scenes/track";
import ForecastPage from "./scenes/forecast";

function App() {
  const [theme] = useMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <SideBar />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/track" element={<TrackPage />} />
            <Route path="/forecast" element={<ForecastPage />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
