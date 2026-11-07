import { X } from "lucide-react";
import {
  CounselorsModalOverlay,
  CounselorsModalContent,
  CounselorsModalClose,
  CounselorsModalImage,
  CounselorsModalTitle,
  CounselorsModalNames,
} from "./styles";
import HeartDivider from "../../../HeartDivider";

interface CounselorsModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  names: string[];
  image: string;
  alt?: string;
}

function CounselorsModal({
  open,
  onClose,
  title,
  names,
  image,
  alt = "Fotografía de los consejeros",
}: CounselorsModalProps) {
  if (!open) return null;

  return (
    <CounselorsModalOverlay onClick={onClose}>
      <CounselorsModalContent
        onClick={(event) => event.stopPropagation()}
      >
        <CounselorsModalClose
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X size={22} />
        </CounselorsModalClose>
        <CounselorsModalImage
          src={image}
          alt={alt}
        />

        <CounselorsModalTitle>
          {title}
        </CounselorsModalTitle>
        <HeartDivider/>
        <CounselorsModalNames>
          {names.map((name) => (
            <p key={name}>{name}</p>
          ))}
        </CounselorsModalNames>
      </CounselorsModalContent>
    </CounselorsModalOverlay>
  );
}

export default CounselorsModal;