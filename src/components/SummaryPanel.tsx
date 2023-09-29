import { Box, Typography, styled } from "@mui/material";
import { tokens } from "../theme";

const colors = tokens();

const Container = styled(Box)(() => ({
  backgroundColor: colors.secondary[500],
  border: "1px black solid",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  height: "115px",
  padding: "20px",
  width: "90%",
  alignItems: "center",
  color: colors.indigo[500],
}));

export const SummaryPanel = () => {
  const summaryPanelData = [
    {
      title: "Income",
      value: "£500",
    },
    {
      title: "Bills & Expenses",
      value: "£350",
    },
    {
      title: "Savings",
      value: "£50",
    },
  ];

  const summaryPanelContent = summaryPanelData.map((data, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Typography>{data.title}</Typography>
      <Typography>{data.value}</Typography>
    </Box>
  ));

  return <Container>{summaryPanelContent}</Container>;
};
