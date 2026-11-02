import styled from "@emotion/styled";
import sobreBoda from "../../assets/images/invite/sobre.png";
import { Typography } from "@mui/material";


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
  fontFamily: "Georgia, serif",
  fontSize: "4rem",
  fontWeight: 500,

  "@media (max-width: 360px)": {
    fontSize: "1.6rem",
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
  position: "absolute",
  bottom: "10%",
  width: "85%",
  textAlign: "left",
  color: "#2c020c",
  fontFamily: "Georgia, serif",
  fontSize: "2rem",
});

export const GuestMessage = styled(Typography)({
  position: "absolute",
  bottom: "19%",
  width: "85%",
  fontFamily: "Georgia, serif",
  fontSize: "1rem",
  fontWeight: 400,
  textAlign: "left",
  color: "#140106",
  margin: 0,
});