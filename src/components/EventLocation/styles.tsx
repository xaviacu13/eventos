import { styled } from "@mui/material/styles";

export const LocationCard = styled("article")(({ theme }) => ({
  width: "100%",
  maxWidth: "360px",
  boxSizing: "border-box",
  padding: "32px 24px",
  textAlign: "center",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  backgroundColor: "#FAF4E2",
  border: "1px solid rgba(150, 110, 70, 0.3)",
  borderRadius: "18px",

  boxShadow: "0 5px 18px rgba(2, 2, 1, 0.06)",

  transition: "transform 0.3s ease, box-shadow 0.3s ease",

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 9px 24px rgba(2, 2, 1, 0.10)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "28px 20px",
  },
}));

export const LocationIcon = styled("div")({
  width: "54px",
  height: "54px",
  borderRadius: "50%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "#F0E4D0",
  color: "#800020",

  border: "1px solid rgba(128, 0, 32, 0.2)",
  marginBottom: "20px",
});

export const LocationKind = styled("p")({
  margin: "0 0 10px",
  color: "#800020",

  fontSize: "0.72rem",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
});

export const LocationTitle = styled("h3")({
  margin: "0 0 12px",
  color: "#3D2025",

  fontFamily: '"Cormorant Garamond", serif',
  fontSize: "1.65rem",
  fontWeight: 600,
  lineHeight: 1.2,
});

export const LocationAddress = styled("p")({
  margin: "0",
  color: "#766A60",

  fontSize: "0.9rem",
  lineHeight: 1.7,
});

export const LocationTime = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",

  marginTop: "20px",
  color: "#800020",

  fontSize: "0.9rem",
  fontWeight: 600,

  "& svg": {
    flexShrink: 0,
  },
});

export const LocationLink = styled("a")({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",

  marginTop: "22px",
  padding: "11px 22px",

  color: "#FAF4E2",
  backgroundColor: "#044003",

  borderRadius: "30px",
  textDecoration: "none",

  fontSize: "0.85rem",
  fontWeight: 500,

  transition: "all 0.25s ease",

  "&:hover": {
    backgroundColor: "#0A5A08",
    transform: "translateY(-2px)",
  },
});