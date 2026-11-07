import { useState } from "react";

import { CounselorsContainer } from "./styles";
import { CounselorsModal } from "./components";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CounselorsContainer>
        <p className="counselors-title">{title}</p>

        {/* 
        <div className="counselors-divider">
          <span />
          <Heart size={16} fill="currentColor" />
          <span />
        </div> 
        */}

        <div
          className="counselors-image"
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              setIsModalOpen(true);
            }
          }}
        >
          <img
            src={image}
            alt={alt}
            loading="lazy"
          />
        </div>

        <div className="counselors-names">
          {names.map((name) => (
            <p key={name}>{name}</p>
          ))}
        </div>
      </CounselorsContainer>

      <CounselorsModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        names={names}
        image={image}
        alt={alt}
      />
    </>
  );
}

export default Counselors;