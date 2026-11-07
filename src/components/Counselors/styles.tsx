import { Box, styled } from "@mui/material";

export const CounselorsContainer = styled(Box)({
  width: "100%",
  maxWidth: "420px",
  margin: "13px auto",
  padding: "15px 10px",
  textAlign: "center",

  // Sombra suave del conjunto
  borderRadius: "18px",
  boxShadow: "0 6px 18px rgba(56, 7, 21, 0.10)",
  background: "rgba(255, 255, 255, 0.25)",

  ".counselors-title": {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "22px",
    fontWeight: 600,
    color: "#380715",
    letterSpacing: "1px",
    margin: "0 0 12px",
  },

  ".counselors-divider": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    maxWidth: "180px",
    margin: "0 auto 22px",
    color: "#b38105",

    "& span": {
      flex: 1,
      height: "1px",
      background: "#D4AF37",
    },
  },

  ".counselors-image": {
    width: "190px",
    height: "190px",
    margin: "0 auto 20px",
    overflow: "hidden",
    borderRadius: "50%",
    border: "3px solid #D4AF37",
    padding: "5px",

    // Sombra elevada de la fotografía
    boxShadow: `
      0 8px 20px rgba(56, 7, 21, 0.20),
      0 3px 8px rgba(212, 175, 55, 0.18)
    `,

    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",

    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 13px 28px rgba(56, 7, 21, 0.25)",
    },

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
      display: "block",
    },
  },

  ".counselors-names": {
    color: "#3e0716",

    "& p": {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "25px",
      fontWeight: 600,
      margin: "5px 0",
    },
  },
});