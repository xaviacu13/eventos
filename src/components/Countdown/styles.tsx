
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CountdownContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  width: "100%",
  flexWrap: "wrap",

  "@media (max-width: 360px)": {
    gap: "7px",
  },
});

export const CountdownUnit = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "65px",
  padding: "3px 0px",
  border: "1px solid #D4AF37",
  borderRadius: "10px",
  backgroundColor: "rgba(74, 7, 24, 0.75)",
  boxShadow: "0 3px 12px rgba(212, 175, 55, 0.2)",
});

export const CountdownNumber = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "1.7rem",
  fontWeight: 600,
  color: "#F5D76E",
  lineHeight: 1.2,
});

export const CountdownLabel = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "0.65rem",
  color: "#FFF5C4",
  letterSpacing: "1px",
  textTransform: "uppercase",
});
