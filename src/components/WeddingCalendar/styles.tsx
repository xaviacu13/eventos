import styled from "@emotion/styled";

export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 390px;
  margin: 10px auto 5px;
  padding: 30px 25px;
  background: #fae2f6;
  border: 1px solid #f5beeb;
  border-radius: 20px;
  box-shadow: 0 12px 35px rgba(116, 57, 74, 0.09);
  text-align: center;

  .calendar-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    color: #74394a;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.2em;
  }

  .calendar-month {
    margin: 15px 0 0;
    color: #74394a;
    font-family: "Cormorant Garamond", serif;
    font-size: 3rem;
    line-height: 1;
  }

  .calendar-year {
    margin: 8px 0 25px;
    color: #a8846a;
    font-size: 1.2rem;
    letter-spacing: 0.28em;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 7px 3px;
  }

  .calendar-weekday {
    padding-bottom: 12px;
    color: #77786e;
    font-size: 0.63rem;
    font-weight: 700;
  }

  .calendar-day {
    display: grid;
    place-items: center;
    min-width: 0;
    aspect-ratio: 1;
    color: #3f4038;
    font-family: "Cormorant Garamond", serif;
    font-size: 1.5rem;

    &.is-wedding-day {
      color: white;
    }
  }

  .wedding-day-number {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 39px;
    height: 39px;
    border: 1px solid #c9a56a;
    border-radius: 50%;
    background: #74394a;
    font-size: 1.9rem;
    line-height: 1;

    svg {
      position: absolute;
      bottom: -7px;
      color: #c9a56a;
    }
  }

  .calendar-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 28px;

    span {
      width: 25px;
      height: 1px;
      background: #a8846a;
    }

    p {
      margin: 0;
      color: #74394a;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.12em;
    }
  }

  .calendar-message {
    margin: 12px 0 0;
    color: #77786e;
    font-family: "Parisienne", cursive;
    font-size: 1.35rem;
  }

  @media (max-width: 400px) {
    padding: 20px 5px;

    .calendar-grid {
      gap: 5px 1px;
    }

    .wedding-day-number {
      width: 35px;
      height: 35px;
    }
  }
`;
