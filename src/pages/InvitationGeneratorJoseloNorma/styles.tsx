import { styled } from "@mui/material/styles";

export const GeneratorPage = styled("main")({
  minHeight: "100dvh",
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "24px",
  background:
    "linear-gradient(135deg, #faf4e2 0%, #f5e8dc 100%)",
});

export const GeneratorCard = styled("section")({
  width: "100%",
  maxWidth: "520px",
  boxSizing: "border-box",
  padding: "36px",
  background: "#f5d4d4",
  border: "1.2px solid #cf919a",
  borderRadius: "24px",
  boxShadow: "0 15px 45px rgba(44, 2, 12, 0.15)",

  "@media (max-width: 600px)": {
    padding: "26px 20px",
    borderRadius: "20px",
  },
});

export const Title = styled("h1")({
  margin: "0 0 10px",
  textAlign: "center",
  color: "#3d0411",
  fontFamily: "'Alex Brush', cursive",
  fontSize: "3rem",
  fontWeight: 400,
  lineHeight: 1.1,
  "@media (max-width: 600px)": {
    fontSize: "3rem",
  },
});

export const Description = styled("p")({
  margin: "0 auto 28px",
  maxWidth: "420px",
  textAlign: "center",
  color: "#6b5b5f",
  fontFamily: "Georgia, serif",
  fontSize: "0.95rem",
  lineHeight: 1.6,
});

export const FieldLabel = styled("label")({
  display: "block",
  marginBottom: "8px",
  color: "#2c020c",
  fontFamily: "Georgia, serif",
  fontSize: "0.9rem",
  fontWeight: 600,
});

export const NameInput = styled("input")({
  width: "100%",
  height: "50px",
  boxSizing: "border-box",
  padding: "0 15px",
  border: "1px solid #d8c7c9",
  borderRadius: "12px",
  background: "#fff",
  color: "#2c020c",
  fontFamily: "Georgia, serif",
  fontSize: "15px",
  outline: "none",
  transition: "all 0.2s ease",
  "&::placeholder": {
    color: "#aaa",
  },

  "&:focus": {
    borderColor: "#8b1e3f",
    boxShadow:
      "0 0 0 3px rgba(139, 30, 63, 0.10)",
  },
});

export const GenerateButton = styled("button")({
  width: "100%",
  height: "52px",
  marginTop: "16px",
  border: "none",
  borderRadius: "12px",
  background: "#8b1e3f",
  color: "#fff",
  fontFamily: "Georgia, serif",
  fontSize: "15px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover:not(:disabled)": {
    background: "#6f1732",
    transform: "translateY(-1px)",
  },
  "&:disabled": {
    opacity: 0.45,
    cursor: "not-allowed",
  },
});

export const GeneratedResult = styled("div")({
  marginTop: "30px",
  paddingTop: "26px",
  borderTop: "1px solid #eee0e2",
});

export const UrlBox = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "& input": {
    flex: 1,
    minWidth: 0,
    fontSize: "13px",
  },
});

export const CopyButton = styled("button")({
  flexShrink: 0,
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: "12px",
  background: "#2c020c",
  color: "#fff",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    background: "#4a0717",
  },
});

export const ActionButtons = styled("div")({
  display: "flex",
  gap: "10px",
  marginTop: "14px",
  "@media (max-width: 480px)": {
    flexDirection: "column",
  },
});

export const ShareButton = styled("button")({
  flex: 1,
  minHeight: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  border: "none",
  borderRadius: "12px",
  background: "#8b1e3f",
  color: "#fff",
  fontFamily: "Georgia, serif",
  fontSize: "14px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    background: "#6f1732",
  },
});

export const OpenButton = styled("a")({
  flex: 1,
  minHeight: "48px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  border: "1px solid #8b1e3f",
  borderRadius: "12px",
  background: "#fff",
  color: "#8b1e3f",
  textDecoration: "none",
  fontFamily: "Georgia, serif",
  fontSize: "14px",
  fontWeight: 600,
  transition: "all 0.2s ease",
  "&:hover": {
    background: "#faf0f3",
  },
});

export const CopiedMessage = styled("p")({
  margin: "14px 0 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  color: "#397044",
  fontFamily: "Georgia, serif",
  fontSize: "13px",
});

export const NewInvitationButton = styled("button")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "9px",
  marginTop: "10px",
  padding: "15px 18px",
  border: "1px solid #74394a",
  borderRadius: "12px",
  color: "#74394a",
  background: "#fff",
  fontFamily: "inherit",
  fontSize: "14px",
  fontWeight: 600,

  cursor: "pointer",
  transition: "all 0.25s ease",

  "&:hover": {
    background: "#74394a",
    color: "#fffaf7",
  },

  "&:active": {
    transform: "scale(0.98)",
  },
});