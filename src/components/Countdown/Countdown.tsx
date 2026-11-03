
import { useEffect, useState } from "react";
import {
  CountdownContainer,
  CountdownUnit,
  CountdownNumber,
  CountdownLabel,
} from "./styles";

const WEDDING_DATE = new Date("2026-12-19T19:00:00-03:00");

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getCountdown(): CountdownTime {
  const distance = Math.max(
    0,
    WEDDING_DATE.getTime() - Date.now()
  );

  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<CountdownTime>(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const values = [
    ["Días", time.days],
    ["Horas", time.hours],
    ["Minutos", time.minutes],
    ["Segundos", time.seconds],
  ] as const;

  return (
    <CountdownContainer aria-label="Cuenta regresiva">
      {values.map(([label, value]) => (
        <CountdownUnit key={label}>
          <CountdownNumber>
            {String(value).padStart(2, "0")}
          </CountdownNumber>
          <CountdownLabel>{label}</CountdownLabel>
        </CountdownUnit>
      ))}
    </CountdownContainer>
  );
}
