import { Heart } from "lucide-react";
import { CalendarContainer } from "./styles";

const weekdays = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];

const days = [
  null,
  1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12, 13,
  14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31,
];

const WeddingCalendar = () => {
  return (
    <CalendarContainer>
      {/* <div className="calendar-heading">
        <CalendarDays size={19} />
        <span>RESERVA LA FECHA</span>
      </div> */}

      <h3 className="calendar-month">Diciembre</h3>
      <p className="calendar-year">2026</p>

      <div className="calendar-grid">
        {weekdays.map((day) => (
          <div className="calendar-weekday" key={day}>
            {day}
          </div>
        ))}

        {days.map((day, index) => (
          <div
            key={day ?? `empty-${index}`}
            className={`calendar-day ${
              day === 19 ? "is-wedding-day" : ""
            }`}
          >
            {day === 19 ? (
              <span className="wedding-day-number">
                {day}
                <Heart size={10} fill="currentColor" />
              </span>
            ) : (
              day
            )}
          </div>
        ))}
      </div>

      <div className="calendar-footer">
        <span />
        <p>SÁBADO 19 DE DICIEMBRE</p>
        <span />
      </div>

      <p className="calendar-message">
        ¡El día que comienza nuestra historia juntos!
      </p>
    </CalendarContainer>
  );
};

export default WeddingCalendar;