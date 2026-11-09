import { useEffect, useRef, useState } from "react";
// import type { FormEvent } from "react";

import {
  // CalendarDays,
  // Clock3,
  Music2,
  Pause,
  Play,
  Heart,
  Camera,
  MapPin,
  // Send,
} from "lucide-react";

import {
  Envelope,
  WeddingPicture,
  HeartDivider,
  BibleVerse,
  Counselors,
  Sponsors,
  Hero,
  EventLocation,
  WeddingCalendar,
} from "../../components";
import weddingPicture from "../../assets/images/profiles/weddingpicture2.png";
import conIglesia from "../../assets/images/consolers/conIglesia.png";
import conCivil from "../../assets/images/consolers/conCivil.png";
import { CONFIG } from "../../config/joseloNorma";

// import { supabase } from "../../lib/supabase";

import {
  JoseloNormaStyles,
  CounselorsContainer,
  LocationContainer,
} from "./styles";

// type Wish = {
//   id?: number;
//   name: string;
//   message: string;
//   created_at?: string;
// };

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const WEDDING_DATE = new Date("2026-12-19T19:00:00-03:00");

function getCountdown(): Countdown {
  const distance = Math.max(0, WEDDING_DATE.getTime() - Date.now());

  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

function Countdown() {
  const [time, setTime] = useState(getCountdown);

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
    <div className="countdown" aria-label="Cuenta regresiva">
      {values.map(([label, value]) => (
        <div className="countdown-unit" key={label}>
          <span className="countdown-number">
            {String(value).padStart(2, "0")}
          </span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

const JoseloNorma = () => {
  // const [wishName, setWishName] = useState("");
  // const [wishMessage, setWishMessage] = useState("");
  // const [wishes, setWishes] = useState<Wish[]>([]);
  // const [wishStatus, setWishStatus] = useState("");
  const [musicOn, setMusicOn] = useState(false);
  const [musicError, setMusicError] = useState("");
  const [isOpenCard, setIsOpenCard] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const params = new URLSearchParams(window.location.search);
  const nombreInvitado = params.get("invitado")?.trim() || "Familia invitada";

  async function toggleMusic() {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setMusicOn(true);
        setMusicError("");
      } catch {
        setMusicOn(false);
        setMusicError(
          "No se pudo reproducir la canción. Comprueba el archivo de audio.",
        );
      }
    } else {
      audio.pause();
      setMusicOn(false);
    }
  }

  async function openInvitation() {
    setIsOpenCard(true);

    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.currentTime === 0) {
        audio.currentTime = 2.8;
      }

      await audio.play();
      setMusicOn(true);
      setMusicError("");
    } catch {
      setMusicOn(false);
      setMusicError(
        "No se pudo reproducir la música. Puedes activarla desde el botón.",
      );
    }
  }

  // async function submitWish(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   setWishStatus("");

  //   const wish = {
  //     name: wishName.trim(),
  //     message: wishMessage.trim(),
  //   };

  //   if (!wish.name || !wish.message) return;

  //   if (supabase) {
  //     const { data, error } = await supabase
  //       .from("wishes")
  //       .insert(wish)
  //       .select("id,name,message,created_at")
  //       .single();

  //     if (error) {
  //       setWishStatus(
  //         "No se pudo publicar. Inténtalo de nuevo en unos minutos.",
  //       );
  //       return;
  //     }

  //     setWishes((current) => [data as Wish, ...current]);
  //   } else {
  //     const next = [
  //       {
  //         ...wish,
  //         id: Date.now(),
  //         created_at: new Date().toISOString(),
  //       },
  //       ...wishes,
  //     ].slice(0, 50);

  //     setWishes(next);

  //     try {
  //       localStorage.setItem("wedding-demo-wishes", JSON.stringify(next));
  //     } catch {
  //       // Modo de demostración.
  //     }
  //   }

  //   setWishName("");
  //   setWishMessage("");

  //   setWishStatus(
  //     supabase
  //       ? "¡Tu mensaje se publicó! Gracias por tus buenos deseos."
  //       : "Mensaje guardado en esta demo en este navegador. Conecta Supabase para compartirlo con todos.",
  //   );
  // }

  return (
    <>
      <JoseloNormaStyles />

      <main className="joselo-norma-page">
        <div className="floating-hearts" aria-hidden="true">
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
        </div>
        {!isOpenCard ? (
          <Envelope
            coupleName={CONFIG.couple}
            guestName={nombreInvitado}
            setOpenCard={openInvitation}
          />
        ) : (
          <>
            <WeddingPicture
              image={weddingPicture}
              nombreInvitado={nombreInvitado}
            />
            <HeartDivider width="280px" size={22} />
            <BibleVerse frase="Hallé al que ama mi alma." cita="Cantares 3:4" />
            <HeartDivider width="280px" size={22} />

            {/* PORTADA */}

            <section className="hero" id="inicio">
              <div
                className="hero-image"
                role="img"
                aria-label="Decoración romántica de boda"
              />
              <div className="hero-overlay" />
              <div className="hero-content">
                <p className="script">
                  Con la bendicion de Dios y el amor que nos une, hemos decidido
                  caminar juntos para toda la vida!
                </p>
                <br />
                <HeartDivider width="280px" size={22} />
                <br />
                <p className="hero-kicker">
                  <span />
                  PADRES DEL NOVIO:
                  <span />
                </p>

                <h2>Corcino Villca (+)</h2>
                <h2> Romualda Moscoso (+)</h2>
                <div className="hero-divider">
                  <span />
                  <Heart size={16} />
                  <span />
                </div>
                <br />
                <p className="hero-kicker">
                  <span />
                  PADRES DE LA NOVIA:
                  <span />
                </p>

                <h2>Agapo Otondo Colque (+)</h2>
                <h2>Julia Garcia Porco</h2>

                <HeartDivider width="280px" size={22} />
              </div>

              <div className="hero-bottom">CON TODO NUESTRO AMOR</div>
            </section>
            {/* </>
        )} */}
            {/* CONSEJEROS  */}

            <CounselorsContainer>
              <p className="hero-kicker">
                <span />
                NUESTOS CONSEJEROS:
                <span />
              </p>
              <Counselors
                title="CONSEJEROS DE LA IGLESIA"
                image={conIglesia}
                names={["Javier Villca Moscoso", "Basilia Mamani Acuña"]}
              />
              <HeartDivider width="280px" size={22} />
              <Counselors
                title="CONSEJEROS CIVILES"
                image={conCivil}
                names={["Braulio Porco Estrada", "Cirila Mamani Acuña"]}
              />
              <HeartDivider width="280px" size={22} />
            </CounselorsContainer>

            {/* PADRINOS */}
            <section className="sponsors-section section">
              <p className="hero-kicker">
                <span />
                NUESTROS PADRINOS
                <span />
              </p>

              {CONFIG.sponsors.map((sponsor, index) => (
                <div key={sponsor.id}>
                  <Sponsors
                    title={sponsor.title}
                    names={sponsor.names}
                    image={sponsor.image}
                    imagePosition={sponsor.imagePosition || "left"}
                  />

                  {index < CONFIG.sponsors.length - 1 && (
                    <HeartDivider width="220px" size={20} />
                  )}
                </div>
              ))}
            </section>

            <section className="intro section" id="invitacion">
              <p className="hero-kicker">
                <span />
                UN DÍA PARA RECORDAR
                <span />
              </p>

              <h2>
                ¡Queremos
                <br />
                <em>compartirlo contigo!</em>
              </h2>

              <p className="body-copy">
                Hay momentos que se vuelven inolvidables cuando los compartimos
                con las personas que queremos. Nos hace mucha ilusión invitarte
                a celebrar el comienzo de esta nueva etapa de nuestras vidas.
              </p>
              <WeddingCalendar />

              {/* <div className="date-chip">
                <CalendarDays size={19} />
                <span>{CONFIG.dateLabel}</span>
                <i />
                <Clock3 size={18} />
                <span>{CONFIG.timeLabel}</span>
              </div> */}
            </section>

            {/* UBICACIONES */}

            <section className="events section">
              <p className="eyebrow">
              <MapPin size={15} />
                NOS ENCONTRAMOS EN:
              </p>
              <LocationContainer>
                <EventLocation
                  kind="CEREMONIA"
                  title={CONFIG.churchName}
                  address={CONFIG.churchAddress}
                  url={CONFIG.churchMapsUrl}
                  time="19:00 h"
                />

                <EventLocation
                  kind="CELEBRACIÓN"
                  title={CONFIG.venueName}
                  address={CONFIG.venueAddress}
                  url={CONFIG.venueMapsUrl}
                  time="21:00 h"
                />
              </LocationContainer>
            </section>

            {/* CUENTA REGRESIVA */}

            <section className="countdown-section section">
              <p className="eyebrow">LA CUENTA REGRESIVA COMIENZA</p>

              <h2>Falta muy poco</h2>

              <Countdown />

              <p className="small-note">
                Cada segundo nos acerca a un día muy especial.
              </p>
            </section>

            {/* GALERÍA */}

            <section className="gallery-section section">
              <div className="section-heading">
                <p className="eyebrow">
                  <Camera size={15} />
                  NUESTROS MOMENTOS
                </p>

                <h2>
                  Recuerdos que cuentan
                  <br />
                  <em>nuestra historia</em>
                </h2>
              </div>
              <Hero images={CONFIG.gallery} />
            </section>

            {/* BUENOS DESEOS */}

            {/* <section className="wishes-section section">
              <p className="eyebrow">PALABRAS DESDE EL CORAZÓN</p>

              <h2>
                Déjanos tus <em>buenos deseos</em>
              </h2>

              <p className="body-copy">
                Nos encantará guardar tus palabras como parte de este recuerdo.
              </p>

              <form className="form wishes-form" onSubmit={submitWish}>
                <label>
                  Tu nombre
                  <input
                    required
                    value={wishName}
                    onChange={(event) => setWishName(event.target.value)}
                    placeholder="¿Quién nos escribe?"
                    maxLength={80}
                  />
                </label>

                <label>
                  Tu mensaje
                  <textarea
                    required
                    value={wishMessage}
                    onChange={(event) => setWishMessage(event.target.value)}
                    placeholder="Escribe aquí tus buenos deseos..."
                    rows={4}
                    maxLength={500}
                  />
                </label>

                <div className="form-footer">
                  <span>{wishMessage.length}/500</span>

                  <button className="button button-dark" type="submit">
                    Enviar mensaje <Send size={15} />
                  </button>
                </div>

                {wishStatus && (
                  <p className="form-status" role="status">
                    {wishStatus}
                  </p>
                )}
              </form>

              <div className="wishes-list">
                {wishes.length === 0 ? (
                  <p className="empty-wishes">
                    Sé la primera persona en dejarnos un mensaje.
                  </p>
                ) : (
                  wishes.map((wish) => (
                    <article
                      className="wish"
                      key={wish.id ?? `${wish.name}-${wish.message}`}
                    >
                      <div className="wish-heart">
                        <Heart size={17} />
                      </div>

                      <div>
                        <h3>{wish.name}</h3>
                        <p>{wish.message}</p>
                      </div>
                    </article>
                  ))
                )}
              </div>

              {!supabase && (
                <p className="small-note">
                  Modo de demostración: los mensajes no se comparten entre
                  dispositivos hasta conectar la base de datos.
                </p>
              )}
            </section> */}
            {/* PIE DE PÁGINA */}

            <footer className="footer">
              <Heart size={20} />

              <p className="script">Con amor,</p>
              <h2>{CONFIG.couple}</h2>
              <p>{CONFIG.dateLabel}</p>
              <span className="footer-line" />

              <small>HECHO CON AMOR · INVITACIÓN DIGITAL</small>
            </footer>
          </>
        )}

        <audio
          ref={audioRef}
          id="wedding-audio"
          src="/music/wedding-song.mp3"
          loop
          preload="none"
          onEnded={() => setMusicOn(false)}
        />

        {isOpenCard && (
          <button
            className={`music-button ${musicOn ? "is-playing" : ""}`}
            onClick={toggleMusic}
            aria-label={musicOn ? "Pausar música" : "Reproducir música"}
          >
            {musicOn ? <Pause size={17} /> : <Play size={17} />}
            <Music2 size={17} />
            <span>{musicOn ? "Música activada" : "Reproducir música"}</span>
          </button>
        )}

        {musicError && (
          <p className="music-error" role="alert">
            {musicError}
          </p>
        )}
      </main>
    </>
  );
};
export default JoseloNorma;
