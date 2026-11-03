import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import TouchAppIcon from "@mui/icons-material/TouchApp";

import {
  EnvelopeBackground,
  EnvelopeContainer,
  EnvelopeContent,
  CoupleName,
  SealContainer,
  GuestContainer,
  GuestMessage,
  GuestInfoContainer,
  FingerContainer,
  FingerMessage,
} from "./styles";

import sello from "../../assets/images/invite/sello.webp";

interface EnvelopeProps {
  coupleName?: string;
  guestName?: string;
  setOpenCard: (open: boolean) => void;
}

const Envelope = ({
  coupleName = "José Luis & Norma",
  guestName,
  setOpenCard,
}: EnvelopeProps) => {
  const [showInstruction, setShowInstruction] = useState(false);

  const params = new URLSearchParams(window.location.search);

  const nombreInvitado =
    guestName || params.get("invitado")?.trim() || "Familia invitada";

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowInstruction(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  const handleOpenEnvelope = () => {
    setShowInstruction(false);
    setOpenCard(true);
  };

  return (
    <EnvelopeBackground>
      <EnvelopeContainer>
        <EnvelopeContent>
          <CoupleName>{coupleName}</CoupleName>
          <SealContainer onClick={handleOpenEnvelope}>
            <Box component="img" src={sello} alt="Sello de lacre" />
            {showInstruction && (
              <FingerContainer>
                <TouchAppIcon />
                <FingerMessage>Presiona para abrir</FingerMessage>
              </FingerContainer>
            )}
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
