import { Box, IconButton, useTheme } from "@mui/material";
import { themeSettings, tokens } from "../../theme";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2px",
        backgroundColor: colors.primary[500],
      }}
    >
      <Box></Box>
      <Box sx={{ display: "flex" }}>
        <IconButton>
          <SettingsSuggestIcon sx={{ color: colors.white[500] }} />
        </IconButton>
        <IconButton>
          <NotificationsIcon sx={{ color: colors.white[500] }} />
        </IconButton>
        <IconButton>
          <PersonIcon sx={{ color: colors.white[500] }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
