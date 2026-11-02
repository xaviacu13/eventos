import { Box, Typography } from "@mui/material";
import {
  EnvelopeBackground,
  EnvelopeContainer,
  EnvelopeContent,
  CoupleName,
  SealContainer,
  GuestContainer,
  GuestMessage,
  GuestInfoContainer,
} from "./styles";
//import sobreBoda from "../../assets/images/invite/sobre.png";
import sello from "../../assets/images/invite/sello.webp";

interface EnvelopeProps {
  coupleName?: string;
  guestName?: string;
}

const Envelope = ({
  coupleName = "José Luis & Norma",
  guestName,
}: EnvelopeProps) => {
  const params = new URLSearchParams(window.location.search);

  const nombreInvitado =
    guestName || params.get("invitado")?.trim() || "Familia invitada";

  return (
    <EnvelopeBackground>
      <EnvelopeContainer>
        <EnvelopeContent>
          <CoupleName>{coupleName}</CoupleName>
          <SealContainer>
            <Box component="img" src={sello} alt="Sello de lacre" />
          </SealContainer>
          <GuestInfoContainer>
            <GuestMessage>Para:</GuestMessage>
            <GuestContainer>{nombreInvitado}</GuestContainer>
          </GuestInfoContainer>
        </EnvelopeContent>
      </EnvelopeContainer>
    </EnvelopeBackground>
  );
};
export default Envelope;
