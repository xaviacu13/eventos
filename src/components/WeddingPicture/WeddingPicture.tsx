
import { useEffect, useState } from "react";
import SwipeDownIcon from "@mui/icons-material/SwipeDown";

import {
  PictureContainer,
  WeddingImage,
  Overlay,
  GestureContainer,
  FingerIcon,
  SwipeMessage,
} from "./styles";

interface WeddingPictureProps {
  image?: string;
}

export default function WeddingPicture({
  image = "/images/weddingpicture.png",
}: WeddingPictureProps) {
  const [showInstruction, setShowInstruction] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowInstruction(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <PictureContainer>
      <WeddingImage
        src={image}
        alt="Fotografía de los novios"
      />

      <Overlay />

      <GestureContainer>
        {showInstruction && (
          <>
            <FingerIcon>
              <SwipeDownIcon />
            </FingerIcon>

            <SwipeMessage>
              Desliza hacia abajo
            </SwipeMessage>
          </>
        )}
      </GestureContainer>
    </PictureContainer>
  );
}
