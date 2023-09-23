import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, styled, Typography } from "@mui/material";

type DatePanelProps = {
  pageName: "Dashboard" | "Goals" | "Spending Plan" | "Track";
};

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "115px",
  padding: "20px",
  color: theme.palette.primary.main,
  width: "100%",
}));

const TextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const DateContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
}));

const DateTypography = styled(Box)(() => ({
  fontSize: "24px",
  lineHeight: "28px",
  letterSpacing: 3.2,
}));

const PageNameTypography = styled(Box)(() => ({
  fontSize: "20px",
  letterSpacing: 2.75,
}));

const ArrowNavigationContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "25px",
}));

export const DatePanel = ({ pageName }: DatePanelProps) => {
  const currentDate = new Date();

  function formatMonthYear(date: Date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${year}`;
  }

  const formattedDate = formatMonthYear(currentDate);
  return (
    <Container>
      <TextContainer>
        <DateContainer>
          <DateTypography>{formattedDate}</DateTypography>
          <ExpandMoreIcon />
        </DateContainer>
        <PageNameTypography>{pageName}</PageNameTypography>
      </TextContainer>
      <ArrowNavigationContainer>
        <ArrowBackIcon />
        <ArrowForwardIcon />
      </ArrowNavigationContainer>
    </Container>
  );
};
