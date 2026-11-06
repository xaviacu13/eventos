// styles.ts
import { Global, css } from "@emotion/react";
import { styled } from "@mui/material/styles";
import  wenddingPicture3  from "../../assets/images/profiles/wenddingpicture3.png"

export function JoseloNormaStyles() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Parisienne&display=swap");

        .joselo-norma-page {
          --cream: #fae7f9;
          --paper: #f7d4ef;
          --ink: #3f4038;
          --muted: #77786e;
          --burgundy: #74394a;
          --gold: #a8846a;
          --line: #ded6c8;

          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          box-sizing: border-box;
          font-family: "DM Sans", sans-serif;
          color: var(--ink);
          background: var(--cream);
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }

        .joselo-norma-page *,
        .joselo-norma-page *::before,
        .joselo-norma-page *::after {
          box-sizing: border-box;
        }

        .joselo-norma-page section {
          padding: 100px 24px;
          text-align: center;
        }

        .joselo-norma-page h1,
        .joselo-norma-page h2,
        .joselo-norma-page h3 {
          font-family: "Cormorant Garamond", serif;
          font-weight: 500;
          margin-top: 0;
        }

        .joselo-norma-page p {
          margin-top: 0;
        }

        .joselo-norma-page h2 {
          font-size: clamp(2.5rem, 5vw, 4.1rem);
          line-height: 1.02;
          margin-bottom: 24px;
        }

        .joselo-norma-page h2 em {
          color: var(--burgundy);
          font-weight: 400;
        }

        .joselo-norma-page .eyebrow {
          color: var(--burgundy);
          font-size: 0.69rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          margin: 0 0 18px;
        }

        .joselo-norma-page .script {
          font-family: "Parisienne", cursive;
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          margin: 0 0 8px;
        }

        .joselo-norma-page .body-copy {
          color: var(--muted);
          line-height: 1.9;
          max-width: 590px;
          margin: 0 auto 28px;
          font-size: 0.96rem;
        }

        .joselo-norma-page .small-note {
          color: #929187;
          font-size: 0.77rem;
          margin: 25px auto 0;
          max-width: 520px;
          line-height: 1.7;
        }

        .joselo-norma-page .muted {
          color: var(--muted);
        }
        /* Corazones flotantes */

        /* =========================================
   CORAZONES FLOTANTES
========================================= */

        .joselo-norma-page .floating-hearts {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 20;
        }

        .joselo-norma-page .floating-hearts span {
          position: absolute;
          bottom: -60px;
          left: var(--left);

          color: var(--burgundy);
          font-size: var(--size);
          opacity: 0;

          filter: blur(var(--blur)) drop-shadow(0 2px 4px #74394a20);

          animation:
            jn-heart-float var(--duration) linear infinite,
            jn-heart-sway var(--sway-duration) ease-in-out infinite alternate,
            jn-heart-rotate var(--rotate-duration) ease-in-out infinite
              alternate;

          animation-delay: var(--delay);
        }

        /* =========================================
   POSICIONES Y TAMAÑOS
========================================= */

        .joselo-norma-page .floating-hearts span:nth-child(1) {
          --left: 4%;
          --size: 17px;
          --duration: 13s;
          --sway-duration: 3.5s;
          --rotate-duration: 4s;
          --delay: 0s;
          --blur: 0px;
        }

        .joselo-norma-page .floating-hearts span:nth-child(2) {
          --left: 12%;
          --size: 27px;
          --duration: 16s;
          --sway-duration: 4.5s;
          --rotate-duration: 5s;
          --delay: 4s;
          --blur: 0.3px;
        }

        .joselo-norma-page .floating-hearts span:nth-child(3) {
          --left: 21%;
          --size: 13px;
          --duration: 11s;
          --sway-duration: 3s;
          --rotate-duration: 3.5s;
          --delay: 7s;
          --blur: 0.5px;
        }

        .joselo-norma-page .floating-hearts span:nth-child(4) {
          --left: 30%;
          --size: 23px;
          --duration: 15s;
          --sway-duration: 4s;
          --rotate-duration: 4.5s;
          --delay: 2s;
          --blur: 0px;
        }

        .joselo-norma-page .floating-hearts span:nth-child(5) {
          --left: 39%;
          --size: 16px;
          --duration: 12s;
          --sway-duration: 3.8s;
          --rotate-duration: 5s;
          --delay: 6s;
          --blur: 0.4px;
        }

        .joselo-norma-page .floating-hearts span:nth-child(6) {
          --left: 48%;
          --size: 31px;
          --duration: 17s;
          --sway-duration: 4.5s;
          --rotate-duration: 6s;
          --delay: 9s;
          --blur: 0.5px;
        }

        .joselo-norma-page .floating-hearts span:nth-child(7) {
          --left: 57%;
          --size: 14px;
          --duration: 11.5s;
          --sway-duration: 3.2s;
          --rotate-duration: 4s;
          --delay: 3s;
          --blur: 0px;
        }

        .joselo-norma-page .floating-hearts span:nth-child(8) {
          --left: 66%;
          --size: 25px;
          --duration: 15.5s;
          --sway-duration: 4.2s;
          --rotate-duration: 5s;
          --delay: 8s;
          --blur: 0.3px;
        }

        .joselo-norma-page .floating-hearts span:nth-child(9) {
          --left: 75%;
          --size: 18px;
          --duration: 12.5s;
          --sway-duration: 3.5s;
          --rotate-duration: 4.5s;
          --delay: 5s;
          --blur: 0.2px;
        }

        .joselo-norma-page .floating-hearts span:nth-child(10) {
          --left: 83%;
          --size: 29px;
          --duration: 17s;
          --sway-duration: 4.8s;
          --rotate-duration: 6s;
          --delay: 11s;
          --blur: 0.5px;
        }

        .joselo-norma-page .floating-hearts span:nth-child(11) {
          --left: 91%;
          --size: 15px;
          --duration: 13.5s;
          --sway-duration: 3.8s;
          --rotate-duration: 4s;
          --delay: 6s;
          --blur: 0.3px;
        }

        .joselo-norma-page .floating-hearts span:nth-child(12) {
          --left: 97%;
          --size: 22px;
          --duration: 14.5s;
          --sway-duration: 4.2s;
          --rotate-duration: 5s;
          --delay: 10s;
          --blur: 0px;
        }

        /* =========================================
   MOVIMIENTO VERTICAL
========================================= */

        @keyframes jn-heart-float {
          0% {
            transform: translateY(0) scale(0.65);
            opacity: 0;
          }

          10% {
            opacity: 0.35;
          }

          30% {
            opacity: 0.55;
          }

          60% {
            opacity: 0.45;
          }

          85% {
            opacity: 0.25;
          }

          100% {
            transform: translateY(-115vh) scale(1);
            opacity: 0;
          }
        }

        /* =========================================
   MOVIMIENTO LATERAL
========================================= */

        @keyframes jn-heart-sway {
          0% {
            margin-left: -20px;
          }

          50% {
            margin-left: 22px;
          }

          100% {
            margin-left: -15px;
          }
        }

        /* =========================================
   PEQUEÑA ROTACIÓN
========================================= */

        @keyframes jn-heart-rotate {
          0% {
            rotate: -8deg;
          }

          50% {
            rotate: 5deg;
          }

          100% {
            rotate: -6deg;
          }
        }
        /* Música */

        .joselo-norma-page .music-button {
          position: fixed;
          z-index: 10;
          top: 18px;
          right: 18px;
          display: flex;
          align-items: center;
          gap: 9px;
          border: 1px solid #ffffff85;
          background: #fffdf0e8;
          color: var(--ink);
          border-radius: 999px;
          padding: 11px 15px;
          box-shadow: 0 4px 20px #00000012;
          cursor: pointer;
          font-size: 0.75rem;
        }

        .joselo-norma-page .music-button.is-playing {
          background: var(--burgundy);
          color: white;
        }

        .joselo-norma-page .music-error {
          position: fixed;
          z-index: 10;
          top: 62px;
          right: 18px;
          max-width: min(320px, calc(100vw - 36px));
          margin: 0;
          padding: 9px 12px;
          border-radius: 8px;
          background: #fffdf0;
          color: #9b2c2c;
          font-size: 0.75rem;
          box-shadow: 0 4px 20px #00000012;
        }

        /* Portada */

        .joselo-norma-page .hero {
          position: relative;
          min-height: min(900px, 100svh);
          display: grid;
          place-items: center;
          color: white;
          text-align: center;
          isolation: isolate;
          padding: 80px 24px;
        }

        .joselo-norma-page .hero-image,
        .joselo-norma-page .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -2;
        }

        .joselo-norma-page .hero-image {
          background-image: url(${wenddingPicture3});
          background-size: cover;
          background-position: center 45%;
        }

        .joselo-norma-page .hero-overlay {
          z-index: -1;
          background: linear-gradient(
            180deg,
            #20251f5c,
            #24291f70 48%,
            #1f241f9c
          );
        }

        .joselo-norma-page .hero-content {
          max-width: 900px;
          width: 100%;
          animation: jn-appear 0.9s ease-out both;
        }

        .joselo-norma-page .hero-kicker {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          letter-spacing: 0.28em;
          font-size: 0.68rem;
        }

        .joselo-norma-page .hero-kicker span {
          width: 30px;
          height: 1px;
          background: #e2d1ae;
        }

        .joselo-norma-page .hero .script {
          margin-top: 50px;
          color: #f3e4c7;
        }

        .joselo-norma-page .hero h1 {
          font-size: clamp(3.3rem, 10vw, 7.5rem);
          line-height: 0.96;
          margin: 12px 0 26px;
          text-wrap: balance;
        }

        .joselo-norma-page .hero-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: #e2c99b;
          margin-bottom: 24px;
        }

        .joselo-norma-page .hero-divider span {
          height: 1px;
          width: 50px;
          background: #e2c99b;
        }

        .joselo-norma-page .hero-date {
          letter-spacing: 0.12em;
          font-size: 0.85rem;
          margin-bottom: 34px;
        }

        .joselo-norma-page .hero-bottom {
          position: absolute;
          bottom: 25px;
          font-size: 0.58rem;
          letter-spacing: 0.25em;
          color: #ffffffc9;
        }

        /* Botones */

        .joselo-norma-page .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 0;
          border-radius: 2px;
          padding: 14px 23px;
          font-size: 0.78rem;
          letter-spacing: 0.02em;
          text-decoration: none;
          cursor: pointer;
          transition:
            transform 0.2s,
            background 0.2s;
        }

        .joselo-norma-page .button:hover {
          transform: translateY(-2px);
        }

        .joselo-norma-page .button-light {
          color: white;
          border: 1px solid #ffffffa6;
          background: #ffffff13;
        }

        .joselo-norma-page .button-light:hover {
          background: #ffffff28;
        }

        .joselo-norma-page .button-dark {
          background: var(--burgundy);
          color: white;
        }

        .joselo-norma-page .button-dark:hover {
          background: #4c2633;
        }

        /* Introducción */

        .joselo-norma-page .intro,
        .joselo-norma-page .gallery-section,
        .joselo-norma-page .rsvp-section {
          background: var(--paper);
        }

        .joselo-norma-page .intro .body-copy {
          margin-top: 28px;
        }

        .joselo-norma-page .date-chip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          flex-wrap: wrap;
          padding: 17px 22px;
          border: 1px solid var(--line);
          width: fit-content;
          max-width: 100%;
          margin: 36px auto 0;
          color: var(--burgundy);
          font-size: 0.8rem;
        }

        .joselo-norma-page .date-chip i {
          height: 18px;
          width: 1px;
          background: var(--line);
          margin: 0 6px;
        }

        /* Cuenta regresiva */

        .joselo-norma-page .countdown-section,
        .joselo-norma-page .events {
          background: #f4cbf1;
        }

        .joselo-norma-page .countdown {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: clamp(10px, 3vw, 32px);
          margin: 40px auto 0;
        }

        .joselo-norma-page .countdown-unit {
          width: clamp(62px, 13vw, 115px);
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .joselo-norma-page .countdown-number {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(2.5rem, 7vw, 4.7rem);
          line-height: 1;
          color: var(--burgundy);
          font-variant-numeric: tabular-nums;
        }

        .joselo-norma-page .countdown-label {
          color: #737568;
          font-size: 0.67rem;
          letter-spacing: 0.08em;
        }

        /* Galería */

        .joselo-norma-page .section-heading {
          margin-bottom: 40px;
        }

        .joselo-norma-page .section-heading .eyebrow {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .joselo-norma-page .gallery {
          display: grid;
          grid-template-columns: 1fr 1.1fr 1fr;
          gap: 18px;
          max-width: 1050px;
          margin: auto;
          align-items: center;
        }

        .joselo-norma-page .gallery-photo {
          overflow: hidden;
          margin: 0;
          background: #e6dfd2;
        }

        .joselo-norma-page .gallery-photo img {
          display: block;
          width: 100%;
          height: 360px;
          object-fit: cover;
          transition: transform 0.6s;
        }

        .joselo-norma-page .gallery-photo:hover img {
          transform: scale(1.04);
        }

        .joselo-norma-page .photo-2 img {
          height: 430px;
        }

        /* Ubicaciones */

        .joselo-norma-page .locations {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          max-width: 900px;
          margin: 48px auto 0;
          text-align: center;
        }

        .joselo-norma-page .location-card {
          padding: 38px 25px;
          background: var(--paper);
          border: 1px solid #e4ddcf;
        }

        .joselo-norma-page .location-icon {
          display: grid;
          place-items: center;
          width: 52px;
          height: 52px;
          margin: 0 auto 22px;
          color: var(--burgundy);
          border: 1px solid var(--line);
          border-radius: 50%;
        }

        .joselo-norma-page .location-card .eyebrow {
          font-size: 0.62rem;
          margin-bottom: 10px;
        }

        .joselo-norma-page .location-card h3 {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .joselo-norma-page .location-card .muted {
          min-height: 42px;
          line-height: 1.6;
          font-size: 0.85rem;
        }

        .joselo-norma-page .event-time {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          font-size: 0.8rem;
          margin: 24px 0;
          color: var(--burgundy);
        }

        .joselo-norma-page .text-link {
          display: inline-flex;
          gap: 7px;
          align-items: center;
          border-bottom: 1px solid var(--gold);
          padding-bottom: 5px;
          text-decoration: none;
          font-size: 0.8rem;
        }

        /* RSVP y formularios */

        .joselo-norma-page .rsvp-card {
          max-width: 660px;
          margin: auto;
          border: 1px solid var(--line);
          padding: clamp(30px, 6vw, 65px);
          background: #faf7f0;
        }

        .joselo-norma-page .rsvp-card > svg {
          color: var(--gold);
          margin-bottom: 22px;
        }

        .joselo-norma-page .rsvp-card .body-copy {
          margin-bottom: 28px;
        }

        .joselo-norma-page .form {
          text-align: left;
          display: grid;
          gap: 17px;
          max-width: 520px;
          margin: 28px auto 0;
        }

        .joselo-norma-page .form label {
          display: grid;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--ink);
        }

        .joselo-norma-page .form input,
        .joselo-norma-page .form textarea,
        .joselo-norma-page .form select {
          width: 100%;
          border: 1px solid var(--line);
          background: #fffdf9;
          border-radius: 0;
          padding: 13px 14px;
          outline: none;
          color: var(--ink);
        }

        .joselo-norma-page .form input:focus,
        .joselo-norma-page .form textarea:focus,
        .joselo-norma-page .form select:focus {
          border-color: var(--burgundy);
          box-shadow: 0 0 0 2px #74394a18;
        }

        .joselo-norma-page .form textarea {
          resize: vertical;
        }

        .joselo-norma-page .form .button {
          justify-self: start;
        }

        .joselo-norma-page .rsvp-form {
          max-width: 100%;
          margin-top: 25px;
        }

        .joselo-norma-page .form-status {
          font-size: 0.8rem;
          color: var(--burgundy);
          line-height: 1.6;
          margin: 0;
        }

        /* Buenos deseos */

        .joselo-norma-page .wishes-section {
          background: #f2eee6;
        }

        .joselo-norma-page .wishes-form {
          max-width: 600px;
          text-align: left;
        }

        .joselo-norma-page .form-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .joselo-norma-page .form-footer > span {
          color: #99968b;
          font-size: 0.73rem;
        }

        .joselo-norma-page .wishes-list {
          max-width: 600px;
          margin: 38px auto 0;
          text-align: left;
        }

        .joselo-norma-page .empty-wishes {
          color: var(--muted);
          font-size: 0.85rem;
          text-align: center;
          padding: 22px;
          border: 1px dashed #d5ccbc;
        }

        .joselo-norma-page .wish {
          display: flex;
          gap: 15px;
          border-bottom: 1px solid #ded6c8;
          padding: 22px 4px;
        }

        .joselo-norma-page .wish-heart {
          display: grid;
          place-items: center;
          flex: 0 0 36px;
          height: 36px;
          color: var(--burgundy);
          background: #f0dfe3;
          border-radius: 50%;
        }

        .joselo-norma-page .wish h3 {
          font-size: 1.35rem;
          margin-bottom: 5px;
        }

        .joselo-norma-page .wish p {
          color: #696a61;
          font-size: 0.87rem;
          line-height: 1.7;
          margin-bottom: 0;
          overflow-wrap: anywhere;
        }

        /* Pie de página */

        .joselo-norma-page .footer {
          text-align: center;
          padding: 65px 24px 35px;
          background: #663344;
          color: #fffaf1;
        }

        .joselo-norma-page .footer > svg {
          color: #e6d4ae;
        }

        .joselo-norma-page .footer .script {
          margin-top: 15px;
          color: #e6d4ae;
        }

        .joselo-norma-page .footer h2 {
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          margin: 0 0 15px;
        }

        .joselo-norma-page .footer > p:not(.script) {
          font-size: 0.8rem;
          letter-spacing: 0.08em;
        }

        .joselo-norma-page .footer-line {
          display: block;
          height: 1px;
          width: 50px;
          background: #e6d4ae;
          margin: 28px auto;
        }

        .joselo-norma-page .footer small {
          font-size: 0.57rem;
          letter-spacing: 0.18em;
          color: #ffffffa6;
        }

        @keyframes jn-appear {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */

        @media (max-width: 650px) {
          .joselo-norma-page section {
            padding: 75px 20px;
          }

          .joselo-norma-page .hero {
            min-height: 100svh;
          }

          .joselo-norma-page .hero-image {
            background-position: 57% center;
          }

          .joselo-norma-page .hero .script {
            margin-top: 38px;
          }

          .joselo-norma-page .hero-date {
            line-height: 1.8;
          }

          .joselo-norma-page .music-button {
            top: 12px;
            right: 12px;
            padding: 10px 12px;
          }

          .joselo-norma-page .music-button span {
            display: none;
          }

          .joselo-norma-page .date-chip {
            gap: 8px;
            padding: 14px;
            font-size: 0.72rem;
          }

          .joselo-norma-page .date-chip i {
            margin: 0 1px;
          }

          .joselo-norma-page .gallery {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .joselo-norma-page .gallery-photo img,
          .joselo-norma-page .photo-2 img {
            height: 230px;
          }

          .joselo-norma-page .photo-2 {
            grid-column: span 2;
            grid-row: 1;
          }

          .joselo-norma-page .photo-2 img {
            height: 300px;
          }

          .joselo-norma-page .locations {
            grid-template-columns: 1fr;
            gap: 15px;
            margin-top: 32px;
          }

          .joselo-norma-page .location-card {
            padding: 30px 20px;
          }

          .joselo-norma-page .location-card .muted {
            min-height: 0;
          }

          .joselo-norma-page .countdown {
            gap: 7px;
          }

          .joselo-norma-page .countdown-unit {
            width: 21vw;
          }

          .joselo-norma-page .countdown-label {
            font-size: 0.59rem;
          }

          .joselo-norma-page .rsvp-card {
            padding: 35px 20px;
          }

          .joselo-norma-page .form-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .joselo-norma-page .form-footer .button {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .joselo-norma-page *,
          .joselo-norma-page *::before,
          .joselo-norma-page *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}
    />
  );
}

export const CounselorsContainer = styled("div")({
  width: "100%",
  maxWidth: "420px",
  margin: "25px auto",
  padding: "10px",
  textAlign: "center",
});
export const LocationContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "420px",
  margin: "25px auto",
  padding: "10px",
  gap: "2rem",
  textAlign: "center",
});
