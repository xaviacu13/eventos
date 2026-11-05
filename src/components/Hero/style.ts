import { styled }from '@mui/material/styles';
import { Avatar, IconButton } from '@mui/material';

export const HeroContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ArrowButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'left',
})<{ left?: boolean }>(({ left }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  [left ? 'left' : 'right']: 10,
  backgroundColor: 'rgba(0,0,0,0.3)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
}));

export const DotsContainer = styled('div')({
  position: 'absolute',
  bottom: 10,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 8,
});

export const Dot = styled('div')<{ active: boolean }>(({ active }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: active ? '#000' : '#bbb',
  cursor: 'pointer',
}));

export const AvatarContainer = styled('div')({
  marginTop: '-35px',
  marginLeft: '20px',
});

export const StyledAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  cursor: 'pointer',
  objectFit: 'cover',
  border: '2px solid #fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  '@media (max-width: 600px)': {
    width: 80,
    height: 80,
  },
  '@media (max-width: 960px)': {
    width: 100,
    height: 100,
  },
});
export const CarouselWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "520px",
  overflow: "hidden",

  // Móviles: fotografías más grandes y verticales
  height: "clamp(420px, 125vw, 580px)",

  borderRadius: "16px",

  [theme.breakpoints.up("sm")]: {
    height: "580px",
  },

  [theme.breakpoints.up("md")]: {
    height: "620px",
  },
}));

export const StyledImage = styled("img")({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

