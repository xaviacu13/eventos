import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import SwipeDownIcon from "@mui/icons-material/SwipeDown";

import { CONFIG } from "../../config/joseloNorma";

import {
  PictureBackground,
  PictureContainer,
  WeddingImage,
  Overlay,
  HeroContent,
  HeroKicker,
  CoupleName,
  HeroDivider,
  HeroDate,
  InvitationRecipient,
  InvitationDescription,
  HeroBottom,
  GestureContainer,
  FingerIcon,
  SwipeMessage,
  //WeddingRings,
} from "./styles";
import { Countdown } from "../../components";

interface WeddingPictureProps {
  image?: string;
  nombreInvitado?: string;
}

export default function WeddingPicture({
  image = "/images/weddingpicture.png",
  nombreInvitado = "Familia invitada",
}: WeddingPictureProps) {
  const [showInstruction, setShowInstruction] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowInstruction(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  const handleInteraction = () => {
    setShowInstruction(false);
  };

  return (
    <PictureBackground>
      <PictureContainer
        id="inicio"
        onTouchStart={handleInteraction}
        onWheel={(event) => {
          if (event.deltaY > 0) handleInteraction();
        }}
      >
        <WeddingImage src={image} alt="Decoración romántica de boda" />

        <Overlay />

        <HeroContent>
          {/* <WeddingRings>
            <span className="ring ring-one" />
            <span className="ring ring-two" />
          </WeddingRings> */}
          <HeroKicker>
            <span />
            NOS CASAMOS
            <span />
          </HeroKicker>

          <CoupleName>{CONFIG.couple}</CoupleName>

          <HeroDivider>
            <span />
            <Heart size={16} />
            <span />
          </HeroDivider>

          {/* <HeroDate>{CONFIG.dateLabel}</HeroDate> */}

          <InvitationRecipient><span>{nombreInvitado}</span>.</InvitationRecipient>

          <InvitationDescription>
            Tenemos el honor de invitarte a compartir con nosotros uno de los momentos más especiales de nuestras vidas.
          </InvitationDescription>
           <HeroDate>{CONFIG.dateLabel}</HeroDate>
            <HeroBottom>LA CUENTA REGRESIVA COMIENZA</HeroBottom>

        <Countdown />
        </HeroContent>

        {showInstruction && (
          <GestureContainer>
            <FingerIcon>
              <SwipeDownIcon />
            </FingerIcon>

            <SwipeMessage>Desliza hacia abajo</SwipeMessage>
          </GestureContainer>
        )}
      

        {/* <HeroBottom>CON TODO NUESTRO AMOR</HeroBottom> */}
      </PictureContainer>
    </PictureBackground>
  );
}
