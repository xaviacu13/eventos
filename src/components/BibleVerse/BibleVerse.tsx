// import { Heart } from "lucide-react";

import { BibleVerseContainer } from "./styles";

interface BibleVerseProps {
  frase: string;
  cita: string;
}

const BibleVerse = ({ frase, cita }: BibleVerseProps) => {
  return (
    <BibleVerseContainer>
      {/* <div className="verse-decoration">
        <Heart size={22} fill="currentColor" />
      </div> */}

      <p className="verse-text">"{frase}"</p>

      <p className="verse-reference">{cita}</p>
    </BibleVerseContainer>
  );
};
export default BibleVerse;
