import { Box, styled } from "@mui/material";

export const BibleVerseContainer = styled(Box)({
  width: "100%",
  maxWidth: "650px",
  margin: "15px auto",
  padding: "8px 24px",
  textAlign: "center",

  ".verse-decoration": {
    color: "#8f6806",
    fontSize: "24px",
    marginBottom: "16px",
  },

  ".verse-text": {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(20px, 4vw, 27px)",
    lineHeight: 1.6,
    fontStyle: "italic",
    color: "#380514",
    margin: 0,
  },

  ".verse-reference": {
    marginTop: "20px",
    color: "#8f6806",
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
});