import React from "react";
import { DatePanel } from "../global/DatePanel";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Divider } from "@mui/material";
import { tokens } from "../../theme";
import { SummaryPanel } from "../../components/SummaryPanel";

const DashboardPage = () => {
  const colors = tokens();

  return (
    <React.Fragment>
      <DatePanel pageName="Dashboard" />
      <Divider
        sx={{
          color: colors.primary["500"],
          marginLeft: "20px",
          marginRight: "20px",
        }}
      />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "42px" }}
      >
        <SummaryPanel />
      </Box>

      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Saving" },
              { id: 1, value: 15, label: "Spending" },
              { id: 2, value: 20, label: "Bills" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </React.Fragment>
  );
};

export default DashboardPage;
