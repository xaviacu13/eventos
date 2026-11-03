import styled from "@emotion/styled";
import sobreBoda from "../../assets/images/invite/sobre.png";

export const EnvelopeBackground = styled("main")({
  width: "100%",
  minHeight: "100dvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e9ded4",
  backgroundImage: `
    radial-gradient(
      circle,
      rgba(120, 70, 65, 0.08) 1px,
      transparent 1px
    )
  `,
  backgroundSize: "18px 18px",
});

export const EnvelopeContainer = styled("section")({
  position: "relative",
  width: "100%",
  maxWidth: "430px",
  height: "100dvh",
  overflow: "hidden",
  backgroundImage: `url(${sobreBoda})`,
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  "@media (min-width: 600px)": {
    height: "min(100dvh, 900px)",
    borderRadius: "8px",
    boxShadow: "0 10px 45px rgba(0, 0, 0, 0.2)",
  },
});

export const EnvelopeContent = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const CoupleName = styled("h1")({
  position: "absolute",
  top: "22%",
  width: "85%",
  margin: 0,
  textAlign: "center",
  color: "#2c020c",
  fontFamily: "'Alex Brush', cursive",
  fontSize: "4rem",
  fontWeight: 400,

  "@media (max-width: 360px)": {
    fontSize: "3rem",
  },
});

export const SealContainer = styled("div")({
  position: "absolute",
  top: "63%",
  left: "50%",
  width: "115px",
  height: "115px",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  cursor: "pointer",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  "@media (max-width: 360px)": {
    width: "95px",
    height: "95px",
  },
});

export const GuestContainer = styled("div")({
  width: "100%",
  fontFamily: "'Alex Brush', cursive",
  textAlign: "left",
  margin: 0,
  fontSize: "2rem",
  fontWeight: 400,
  lineHeight: 1.1,
  overflowWrap: "anywhere",
});

export const GuestMessage = styled("div")({
  display: "flex",
  fontFamily: "Georgia, serif",
  fontSize: "1.7rem",
  fontWeight: 400,
  textAlign: "left",
  color: "#140106",
  margin: 0,
});

export const GuestInfoContainer = styled("div")({
  display: "flex",
  position: "absolute",
  bottom: "10%",
  left: "50%",
  transform: "translateX(-50%)",
  width: "85%",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  textAlign: "left",
  gap: "5px",
  color: "#2c020c",
});

export const FingerContainer = styled("div")({
  position: "absolute",
  top: "50px",
  left: "-25%",
  transform: "translateX(-50%)",
  zIndex: 3,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5px",

  color: "#fff",
  pointerEvents: "none",

  animation: "fingerAnimation 1.2s ease-in-out infinite",

  svg: {
    fontSize: "48px",
    filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.7))",
  },

  "@keyframes fingerAnimation": {
    "0%, 100%": {
      transform: "translateY(0) scale(1)",
    },
    "50%": {
      transform: "translateY(8px) scale(0.9)",
    },
  },
});

export const FingerMessage = styled("span")({
  fontFamily: "Georgia, serif",
  fontSize: "0.85rem",
  fontWeight: 600,
  whiteSpace: "nowrap",
  color: "#fff",
  textShadow: "0 2px 5px rgba(0,0,0,0.9)",
  backgroundColor: "rgba(44, 2, 12, 0.65)",
  padding: "5px 12px",
  borderRadius: "20px",
  letterSpacing: "0.3px",
});
