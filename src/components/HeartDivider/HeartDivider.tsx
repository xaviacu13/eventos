import { Heart } from "lucide-react";
import { HeartDividerContainer } from "./styles";

interface HeartDividerProps {
  width?: string;
  size?: number;
}

const HeartDivider = ({
  width = "280px",
  size = 22,
}: HeartDividerProps) => {
  return (
    <HeartDividerContainer sx={{ maxWidth: width }}>
      <span className="divider-line" />

      <span className="divider-heart">
        <Heart size={size} fill="currentColor" strokeWidth={1.5} />
      </span>

      <span className="divider-line" />
    </HeartDividerContainer>
  );
}
export default HeartDivider;