//import { Heart } from "lucide-react";
import { CounselorsContainer } from "./styles";

interface CounselorsProps {
  title: string;
  names: string[];
  image: string;
  alt?: string;
}

function Counselors({
  title,
  names,
  image,
  alt = "Fotografía de los consejeros",
}: CounselorsProps) {
  return (
    <CounselorsContainer>
      <p className="counselors-title">{title}</p>

      {/* <div className="counselors-divider">
        <span />
        <Heart size={16} fill="currentColor" />
        <span />
      </div> */}

      <div className="counselors-image">
        <img src={image} alt={alt} loading="lazy" />
      </div>

      <div className="counselors-names">
        {names.map((name) => (
          <p key={name}>{name}</p>
        ))}
      </div>
    </CounselorsContainer>
  );
}

export default Counselors;