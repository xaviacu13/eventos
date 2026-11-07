import { styled } from "@mui/material/styles";

export const CounselorsModalOverlay = styled("div")({
  position: "fixed",
  inset: 0,
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  background: "rgba(20, 5, 10, 0.78)",
  backdropFilter: "blur(6px)",
  animation: "counselorsModalFadeIn 0.25s ease",
  "@keyframes counselorsModalFadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
});
export const CounselorsModalContent = styled("div")({
  position: "relative",
  width: "100%",
  maxWidth: "520px",
  maxHeight: "90dvh",
  overflowY: "auto",
  padding: "22px",
  boxSizing: "border-box",
  borderRadius: "24px",
  background: "#fae2fa",
  // ✨ Efecto elevado
  boxShadow: `
    0 25px 60px rgba(0, 0, 0, 0.35),
    0 8px 20px rgba(0, 0, 0, 0.18)
  `,
  textAlign: "center",
  animation: "counselorsModalScaleIn 0.25s ease",
  "@keyframes counselorsModalScaleIn": {
    from: {
      opacity: 0,
      transform: "scale(0.94) translateY(10px)",
    },
    to: {
      opacity: 1,
      transform: "scale(1) translateY(0)",
    },
  },

  "@media (max-width: 480px)": {
    padding: "16px",
    borderRadius: "20px",
    maxHeight: "88dvh",
  },
});

export const CounselorsModalClose = styled("button")({
  position: "absolute",
  top: "12px",
  right: "12px",
  zIndex: 2,
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.9)",
  color: "#2c020c",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const CounselorsModalImage = styled("img")({
  width: "100%",
  maxHeight: "55dvh",
  display: "block",
  objectFit: "contain",
  borderRadius: "16px",
  marginBottom: "20px",
});

export const CounselorsModalTitle = styled("h3")({
  margin: "0 0 14px",
  color: "#330611",
  fontFamily: "'Alex Brush', cursive",
  fontSize: "2.2rem",
  fontWeight: 400,
  lineHeight: 1.1,
  "@media (max-width: 480px)": {
    fontSize: "1.6rem",
  },
});

export const CounselorsModalNames = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  "& p": {
    margin: 0,
    color: "#4a2930",
    fontFamily: "Georgia, serif",
    fontSize: "1.4rem",
    lineHeight: 1.5,
  },
});