import { Box, styled } from "@mui/material";

export const HeartDividerContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "14px",
  width: "100%",
  maxWidth: "280px",
  margin: "5px auto",

  ".divider-line": {
    flex: 1,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, #D4AF37, #B8860B)",
  },

  ".divider-line:last-child": {
    background:
      "linear-gradient(90deg, #B8860B, #D4AF37, transparent)",
  },

  ".divider-heart": {
    color: "#74394A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "heartBeat 1.3s ease-in-out infinite",
    transformOrigin: "center",
    filter: "drop-shadow(0 1px 3px rgba(116, 57, 74, 0.25))",
  },

  "@keyframes heartBeat": {
    "0%, 100%": {
      transform: "scale(1)",
    },
    "15%": {
      transform: "scale(1.2)",
    },
    "30%": {
      transform: "scale(1)",
    },
    "45%": {
      transform: "scale(1.15)",
    },
    "60%": {
      transform: "scale(1)",
    },
  },

  "@media (prefers-reduced-motion: reduce)": {
    ".divider-heart": {
      animation: "none",
    },
  },
});