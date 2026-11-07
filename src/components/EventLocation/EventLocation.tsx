import { Clock3, Map } from "lucide-react";

import {
  LocationCard,
  // LocationIcon,
  LocationKind,
  LocationTitle,
  LocationAddress,
  LocationTime,
  LocationLink,
} from "./styles";
import HeartDivider from "../HeartDivider";

export interface EventLocationProps {
  kind: string;
  title: string;
  address: string;
  url: string;
  time: string;
}

const EventLocation = ({
  kind,
  title,
  address,
  url,
  time,
}: EventLocationProps) => {
  return (
    <LocationCard>
      {/* <LocationIcon>
        <MapPin size={23} strokeWidth={1.5} />
      </LocationIcon> */}
      <LocationKind>{kind}</LocationKind>
      <HeartDivider />
      <LocationTitle>{title}</LocationTitle>
      <LocationAddress>{address}</LocationAddress>
      <LocationTime>
        <Clock3 size={25} />
        <span>{time}</span>
      </LocationTime>

      <LocationLink
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Map size={15} />
        Cómo llegar
      </LocationLink>
    </LocationCard>
  );
};

export default EventLocation;