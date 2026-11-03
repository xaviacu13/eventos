import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PictureBackground = styled(Box)({
  width: "100%",
  minHeight: "100dvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e9ded4",
  backgroundImage:
    "radial-gradient(circle, rgba(120,70,65,0.08) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
});

export const PictureContainer = styled(Box)({
  position: "relative",
  width: "100%",
  maxWidth: "430px",
  height: "100dvh",
  overflow: "hidden",
  backgroundColor: "#1b1012",

  "@media (min-width: 600px)": {
    height: "min(100dvh, 900px)",
    borderRadius: "8px",
    boxShadow: "0 10px 45px rgba(0,0,0,0.2)",
  },
});

export const WeddingImage = styled("img")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export const Overlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.65))",
});


export const HeroContent = styled(Box)({
  position: "absolute",
  inset: 0,
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "15px",
  paddingBottom: "50px",
  textAlign: "center",
  color: "#fff",
  gap: "12px",
});


export const HeroKicker = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  fontFamily: "Georgia, serif",
  fontSize: "0.85rem",
  letterSpacing: "4px",
  fontWeight: 600,
  color: "#f2ce03",

  span: {
    width: "28px",
    height: "1px",
    backgroundColor: "#e8c6b0",
  },
});

export const ScriptText = styled(Typography)({
  fontFamily: "'Alex Brush', cursive",
  fontSize: "2.6rem",
  color: "#f5d9d0",
  lineHeight: 1.2,
});


export const CoupleName = styled(Typography)({
  fontFamily: "'Alex Brush', cursive",
  fontSize: "3.7rem",
  fontWeight: 400,
  lineHeight: 1.1,

  color: "#4A0718",

  WebkitTextStroke: "0.8px #D4AF37",

  textShadow: `
    0 0 2px #FFF2B0,
    0 0 5px rgba(212, 175, 55, 0.8),
    1px 2px 4px rgba(0, 0, 0, 0.45)
  `,

  "@media (max-width: 360px)": {
    fontSize: "3rem",
  },
});


export const HeroDivider = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  color: "#f0c9b6",

  span: {
    width: "55px",
    height: "1px",
    backgroundColor: "#f0c9b6",
  },
});

export const HeroDate = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "1.2rem",
  letterSpacing: "2px",
  color: "#efc805",
  marginBottom: "12px",
});

export const InvitationRecipient = styled(Typography)({
  fontFamily: "'Alex Brush', cursive",
  fontSize: "2rem",
  lineHeight: 1.1,
  color: "#f5d9d0",
});

export const InvitationDescription = styled(Typography)({
  maxWidth: "330px",
  fontFamily: "Georgia, serif",
  fontSize: "0.85rem",
  lineHeight: 1.7,
  color: "#fff",
  marginTop: "5px",
});

export const DiscoverButton = styled(Button)({
  marginTop: "18px",
  padding: "12px 24px",
  borderRadius: "30px",
  border: "1px solid rgba(255,255,255,0.8)",
  color: "#fff",
  backgroundColor: "rgba(80, 10, 25, 0.55)",
  fontFamily: "Georgia, serif",
  fontSize: "0.8rem",
  letterSpacing: "1px",
  textTransform: "none",
  display: "flex",
  gap: "12px",

  "&:hover": {
    backgroundColor: "#6b172d",
  },

  "&:disabled": {
    color: "#fff",
    opacity: 0.7,
  },
});

export const HeroBottom = styled(Typography)({
  position: "absolute",
  bottom: "22px",
  left: 0,
  width: "100%",
  zIndex: 2,
  textAlign: "center",
  fontFamily: "Georgia, serif",
  fontSize: "0.65rem",
  letterSpacing: "4px",
  color: "#fff",
});

export const GestureContainer = styled(Box)({
  position: "absolute",
  top: "72%",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  width: "100%",
  color: "#fff",
  pointerEvents: "none",
});

export const FingerIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: "swipeAnimation 1.3s ease-in-out infinite",

  svg: {
    fontSize: "55px",
    filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.7))",
  },

  "@keyframes swipeAnimation": {
    "0%, 100%": {
      transform: "translateY(-8px)",
      opacity: 0.7,
    },
    "50%": {
      transform: "translateY(12px)",
      opacity: 1,
    },
  },
});

export const SwipeMessage = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "0.95rem",
  fontWeight: 600,
  letterSpacing: "1px",
  textAlign: "center",
  color: "#fff",
  textShadow: "0 2px 8px rgba(0,0,0,0.9)",
  animation: "messageEntrance 0.8s ease-out both",

  "@keyframes messageEntrance": {
    from: {
      opacity: 0,
      transform: "translateY(-8px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});


export const WeddingRings = styled(Box)({
  position: "relative",
  width: "140px",
  height: "85px",
  marginBottom: "10px",
  animation: "ringsEntrance 1.5s ease-out both",

 


".ring": {
  position: "absolute",
  top: "5px",
  width: "62px",
  height: "62px",
  borderRadius: "50%",
  background: "transparent",
  border: "none",
  boxShadow: `
    0 0 5px rgba(255, 230, 140, 0.9),
    0 0 12px rgba(218, 165, 32, 0.75),
    0 0 20px rgba(218, 165, 32, 0.4)
  `,
  filter: "brightness(1.15) saturate(1.2)",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    padding: "7px",
    background:
      "linear-gradient(135deg, #fffbe0 0%, #f5d76e 15%, #d4a017 35%, #fff5c4 50%, #a66b08 70%, #ffe88a 85%, #fffbe0 100%)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
},



  ".ring-one": {
    left: "16px",
    zIndex: 2,
    animation: "ringOne 3s ease-in-out infinite",
  },

  ".ring-two": {
    right: "16px",
    zIndex: 1,
    animation: "ringTwo 3s ease-in-out infinite",
  },

  "@keyframes ringsEntrance": {
    from: {
      opacity: 0,
      transform: "scale(0.5)",
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
  },

  "@keyframes ringOne": {
    "0%, 100%": {
      transform: "translateY(0) rotate(-15deg)",
    },
    "50%": {
      transform: "translateY(-4px) rotate(-10deg)",
    },
  },

  "@keyframes ringTwo": {
    "0%, 100%": {
      transform: "translateY(0) rotate(15deg)",
    },
    "50%": {
      transform: "translateY(4px) rotate(20deg)",
    },
  },
});
