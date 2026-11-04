import { Box, styled } from "@mui/material";

export const CounselorsContainer = styled(Box)({
  width: "100%",
  maxWidth: "420px",
  margin: "25px auto",
  padding: "10px",
  textAlign: "center",

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