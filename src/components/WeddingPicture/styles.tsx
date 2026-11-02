
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PictureContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100dvh",
  overflow: "hidden",
  backgroundColor: "#1b1012",
});

export const WeddingImage = styled("img")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  animation: "pictureEntrance 1.5s ease-out both",

  "@keyframes pictureEntrance": {
    from: {
      opacity: 0,
      transform: "scale(1.08)",
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
  },
});

export const Overlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background: `
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.10),
      rgba(0, 0, 0, 0.15) 45%,
      rgba(0, 0, 0, 0.50)
    )
  `,
});

export const GestureContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  width: "100%",
  color: "#fff",
});

export const FingerIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: "swipeAnimation 1.3s ease-in-out infinite",

  svg: {
    fontSize: "65px",
    filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.4))",
  },

  "@keyframes swipeAnimation": {
    "0%, 100%": {
      transform: "translateY(-10px)",
      opacity: 0.7,
    },
    "50%": {
      transform: "translateY(15px)",
      opacity: 1,
    },
  },
});

export const SwipeMessage = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "1.1rem",
  fontWeight: 500,
  letterSpacing: "1px",
  textAlign: "center",
  textShadow: "0 2px 8px rgba(0,0,0,0.7)",
  animation: "messageEntrance 0.8s ease-out both",

  "@keyframes messageEntrance": {
    from: {
      opacity: 0,
      transform: "translateY(-10px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});
