import styled from "@emotion/styled";

interface SponsorsContainerProps {
  imagePosition: "left" | "right";
}

export const SponsorsContainer = styled.article<SponsorsContainerProps>(
  ({ imagePosition }) => ({
    display: "flex",
    alignItems: "center",
    gap: "24px",
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto 10px",
    padding: "8px",
    boxSizing: "border-box",

    backgroundColor: "#FAF4E2",
    borderRadius: "18px",
    border: "1px solid rgba(128, 0, 32, 0.08)",

    boxShadow: "0 4px 14px rgba(61, 32, 37, 0.12)",

    cursor: "pointer",
    flexDirection: imagePosition === "right" ? "row-reverse" : "row",

    transition: "all 0.25s ease",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 8px 20px rgba(61, 32, 37, 0.18)",
    },

    "&:focus-visible": {
      outline: "2px solid #800020",
      outlineOffset: "4px",
    },

    "@media (max-width: 480px)": {
      gap: "16px",
      padding: "12px",
    },
  }),
);

export const SponsorsImage = styled.div({
  width: "140px",
  height: "170px",
  flexShrink: 0,
  overflow: "hidden",

  borderRadius: "70px 70px 12px 12px",
  border: "1px solid rgba(150, 110, 70, 0.35)",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  "@media (max-width: 480px)": {
    width: "115px",
    height: "150px",
  },
});

export const SponsorsContent = styled.div({
  flex: 1,
  minWidth: 0,
});

export const SponsorsTitle = styled.p({
  margin: "0 0 12px",
  color: "#800020",
  fontSize: "0.75rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  fontWeight: 600,

  "@media (max-width: 480px)": {
    fontSize: "0.65rem",
  },
});

export const SponsorsNames = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "4px",

  "& p": {
    margin: 0,
    color: "#3D2025",
    fontFamily: '"Alex Brush", cursive',
    fontSize: "1.8rem",
    lineHeight: 1.1,
  },

  "@media (max-width: 480px)": {
    "& p": {
      fontSize: "1.45rem",
    },
  },
});

// MODAL

export const ModalContent = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "35px 24px 28px",
  textAlign: "center",
});

export const ModalImage = styled.img({
  width: "100%",
  maxWidth: "380px",
  height: "min(65vh, 480px)",
  objectFit: "contain",
  borderRadius: "14px",
  display: "block",
  marginBottom: "24px",

  "@media (max-width: 600px)": {
    height: "min(60vh, 420px)",
  },
});

export const ModalTitle = styled.h2({
  margin: "0 0 14px",
  color: "#800020",
  fontFamily: '"Cormorant Garamond", serif',
  fontSize: "1.5rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
});

export const ModalNames = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "5px",

  "& p": {
    margin: 0,
    color: "#3D2025",
    fontFamily: '"Alex Brush", cursive',
    fontSize: "2.3rem",
    lineHeight: 1.1,
  },

  "@media (max-width: 600px)": {
    "& p": {
      fontSize: "2rem",
    },
  },
});