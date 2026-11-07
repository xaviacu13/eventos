import { Dialog, IconButton } from "@mui/material";
import { X } from "lucide-react";
import { useState } from "react";
import {HeartDivider} from '../../components'

import {
  SponsorsContainer,
  SponsorsImage,
  SponsorsContent,
  SponsorsTitle,
  SponsorsNames,
  ModalContent,
  ModalImage,
  ModalTitle,
  ModalNames,
} from "./styles";

interface SponsorsProps {
  title: string;
  names: string[];
  image: string;
  imagePosition?: "left" | "right";
}

const Sponsors = ({
  title,
  names,
  image,
  imagePosition = "left",
}: SponsorsProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SponsorsContainer
        imagePosition={imagePosition}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <SponsorsImage>
          {image && <img src={image} alt={title} />}
        </SponsorsImage>

        <SponsorsContent>
          <SponsorsTitle>{title}</SponsorsTitle>

          <SponsorsNames>
            {names.map((name) => (
              <p key={name}>{name}</p>
            ))}
          </SponsorsNames>
        </SponsorsContent>
      </SponsorsContainer>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#fad4e8",
              borderRadius: "22px",
              overflow: "hidden",
              margin: 2,
            },
          },
        }}
      >
        <ModalContent>
          <IconButton
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 2,
              backgroundColor: "rgba(248, 226, 250, 0.9)",
              color: "#3b0807",
            }}
          >
            <X size={21} />
          </IconButton>

          {image && <ModalImage src={image} alt={title} />}

          <ModalTitle>{title}</ModalTitle>
          <HeartDivider width="280px" size={22} />

          <ModalNames>
            {names.map((name) => (
              <p key={name}>{name}</p>
            ))}
          </ModalNames>

          <div className="modal-heart">♥</div>
        </ModalContent>
      </Dialog>
    </>
  );
};

export default Sponsors;