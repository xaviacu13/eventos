import { useState, useEffect, type FC } from "react";
import { Card } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import {
  HeroContainer,
  StyledImage,
  AvatarContainer,
  StyledAvatar,
  CarouselWrapper,
  ArrowButton,
  DotsContainer,
  Dot,
} from "./style";

interface HeroImage {
  src: string;
  alt?: string;
}

interface HeroProps {
  images?: HeroImage[];
  avatar?: string | null;
  url?: string | null;
}

const Hero: FC<HeroProps> = ({ images = [], avatar, url }) => {
  const validImages = images.filter((image) => Boolean(image.src));

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (validImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validImages.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [validImages.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (validImages.length === 0 && !avatar && !url) return null;

  return (
    <HeroContainer>
      {validImages.length > 0 && (
        <Card
          sx={{
            width: "100%",
            maxWidth: "520px",
            borderRadius: "16px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
            overflow: "hidden",
          }}
        >
          <CarouselWrapper>
            <StyledImage
              src={validImages[currentIndex].src}
              alt={
                validImages[currentIndex].alt || `Imagen ${currentIndex + 1}`
              }
            />

            {validImages.length > 1 && (
              <>
                <ArrowButton left onClick={handlePrev}>
                  <ArrowBackIos fontSize="small" />
                </ArrowButton>

                <ArrowButton onClick={handleNext}>
                  <ArrowForwardIos fontSize="small" />
                </ArrowButton>
              </>
            )}

            {validImages.length > 1 && (
              <DotsContainer>
                {validImages.map((image, index) => (
                  <Dot
                    key={`${image.src}-${index}`}
                    active={index === currentIndex}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </DotsContainer>
            )}
          </CarouselWrapper>
        </Card>
      )}

      {avatar && (
        <AvatarContainer>
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              <StyledAvatar alt="avatar" src={avatar} />
            </a>
          ) : (
            <StyledAvatar alt="avatar" src={avatar} />
          )}
        </AvatarContainer>
      )}
    </HeroContainer>
  );
};

export default Hero;
