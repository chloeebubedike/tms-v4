import { useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");
  const colors = tokens();

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[500],
        // set padding for inner item to have 5px top, 35px  right, 5px bottom and 20px left
        // set item colour for active
        display: "flex",
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[500],
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: () => {
              return {
                color: colors.white[500],
                "&:hover": {
                  color: "black !important",
                },
              };
            },
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h6">My Money System</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
            {/* {!isCollapsed && (
              <Box>
                <Box>
                  <img
                    alt="tms-logo"
                    width="100px"
                    height="100px"
                    src={`https://www.w3schools.com/images/picture.jpg`}
                    style={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
            )} */}
          </MenuItem>
          <Divider sx={{ backgroundColor: colors.white[500] }} />
          <MenuItem component={<Link to="/" />} icon={<HomeOutlinedIcon />}>
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<PlaylistAddCheckOutlinedIcon />}
            component={<Link to="/goals" />}
          >
            Money Goals
          </MenuItem>
          <MenuItem
            icon={<BarChartOutlinedIcon />}
            component={<Link to="/budget" />}
          >
            Spending Plan
          </MenuItem>
          <MenuItem
            icon={<TimelineOutlinedIcon />}
            component={<Link to="/forecast" />}
          >
            Track
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
