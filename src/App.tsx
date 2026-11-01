import { useEffect, useRef, useState } from "react";
import type { SubmitEvent } from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Music2,
  Pause,
  Play,
  Heart,
  Camera,
  ExternalLink,
  Send,
  Sparkles,
} from "lucide-react";
import { supabase } from "./lib/supabase";

type Wish = { id?: number; name: string; message: string; created_at?: string };
type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const WEDDING_DATE = new Date("2026-12-19T19:00:00-03:00");

const CONFIG = {
  couple: "José Luis & Norma",
  dateLabel: "Sábado 19 de diciembre de 2026",
  timeLabel: "19:00 h",

  // Dirección de la iglesia
  churchName: "Iglesia Asamblea de Dios — Rayo de Sol",
  churchAddress: "Calle Ceibo 1506, Glew, Buenos Aires, Argentina (CP 1856)",
  churchMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Calle+Ceibo+1506%2C+Glew%2C+Buenos+Aires%2C+Argentina+1856",

  // Dirección del salón
  venueName: "Local Nor Cinti",
  venueAddress:
    "Calle Manuel Gálvez 4050, Glew, Buenos Aires, Argentina (CP 1856)",
  venueMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Local+Nor+Cinti%2C+Calle+Manuel+Galvez+4050%2C+Glew%2C+Buenos+Aires%2C+Argentina+1856",

  songTitle: "Nuestra canción",
};

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
    alt: "Pareja celebrando una boda al aire libre",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85",
    alt: "Pareja de novios en un momento especial",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",
    alt: "Decoración romántica de boda",
  },
];

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
    const timer = window.setInterval(() => setTime(getCountdown()), 1000);
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

function EventLocation({
  kind,
  title,
  address,
  url,
  time,
}: {
  kind: string;
  title: string;
  address: string;
  url: string;
  time: string;
}) {
  return (
    <article className="location-card">
      <div className="location-icon">
        <MapPin size={22} strokeWidth={1.5} />
      </div>
      <p className="eyebrow">{kind}</p>
      <h3>{title}</h3>
      <p className="muted">{address}</p>
      <p className="event-time">
        <Clock3 size={16} /> {time}
      </p>
      <a className="text-link" href={url} target="_blank" rel="noreferrer">
        Cómo llegar <ExternalLink size={15} />
      </a>
    </article>
  );
}

export default function App() {
  const [wishName, setWishName] = useState("");
  const [wishMessage, setWishMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [wishStatus, setWishStatus] = useState("");
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpGuests, setRsvpGuests] = useState("1");
  const [rsvpAnswer, setRsvpAnswer] = useState("Sí, allí estaré");
  const [rsvpStatus, setRsvpStatus] = useState("");
  const [showRsvp, setShowRsvp] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [musicError, setMusicError] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

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

  const params = new URLSearchParams(window.location.search);

  const nombreInvitado = params.get("invitado")?.trim() || "Familia invitada";

  const musicStartedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    async function startMusic() {
      if (!audio || musicStartedRef.current || !audio.paused) return;

      try {
        // Adelantar la introducción una sola vez
        audio.currentTime = 12;

        await audio.play();
        if (audio.paused) {
          try {
            await audio.play();
            musicStartedRef.current = true;
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
        musicStartedRef.current = true;
        setMusicOn(true);
        setMusicError("");
      } catch {
        setMusicOn(false);
      }
    }

    // En móviles, touchstart detecta el primer contacto
    // antes de que comience el desplazamiento.
    window.addEventListener("touchstart", startMusic, { passive: true });
    window.addEventListener("pointerdown", startMusic);
    window.addEventListener("keydown", startMusic);

    return () => {
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("pointerdown", startMusic);
      window.removeEventListener("keydown", startMusic);
    };
  }, []);

  async function submitWish(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setWishStatus("");
    const wish = { name: wishName.trim(), message: wishMessage.trim() };
    if (!wish.name || !wish.message) return;
    if (supabase) {
      const { data, error } = await supabase
        .from("wishes")
        .insert(wish)
        .select("id,name,message,created_at")
        .single();
      if (error) {
        setWishStatus(
          "No se pudo publicar. Inténtalo de nuevo en unos minutos.",
        );
        return;
      }
      setWishes((current) => [data as Wish, ...current]);
    } else {
      const next = [
        { ...wish, id: Date.now(), created_at: new Date().toISOString() },
        ...wishes,
      ].slice(0, 50);
      setWishes(next);
      try {
        localStorage.setItem("wedding-demo-wishes", JSON.stringify(next));
      } catch {
        /* demo */
      }
    }
    setWishName("");
    setWishMessage("");
    setWishStatus(
      supabase
        ? "¡Tu mensaje se publicó! Gracias por tus buenos deseos."
        : "Mensaje guardado en esta demo en este navegador. Conecta Supabase para compartirlo con todos.",
    );
  }

  async function submitRsvp(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    // La confirmación se abre en WhatsApp para evitar aparentar que se guardó en una base de datos.
    const message = `Confirmación de asistencia a la boda\nNombre: ${rsvpName.trim()}\nRespuesta: ${rsvpAnswer}\nCantidad de personas: ${rsvpGuests}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setRsvpStatus(
      "Se abrió WhatsApp para que puedas enviar la confirmación. Configura el número de contacto de los novios antes de publicar.",
    );
  }

  return (
    <main>
      <audio
        ref={audioRef}
        id="wedding-audio"
        src="/music/wedding-song.mp3"
        loop
        preload="none"
        onEnded={() => setMusicOn(false)}
      />
      <button
        className={`music-button ${musicOn ? "is-playing" : ""}`}
        onClick={toggleMusic}
        aria-label={musicOn ? "Pausar música" : "Reproducir música"}
      >
        {musicOn ? <Pause size={17} /> : <Play size={17} />}
        <Music2 size={17} />
        <span>{musicOn ? "Música activada" : "Reproducir música"}</span>
      </button>

      {musicError && (
        <p role="status" className="form-status">
          {musicError}
        </p>
      )}
      {musicError && (
        <p className="music-error" role="alert">
          {musicError}
        </p>
      )}
      <section className="hero" id="inicio">
        <div
          className="hero-image"
          role="img"
          aria-label="Decoración romántica de boda"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-kicker">
            <span /> NOS CASAMOS <span />
          </p>
          <p className="script">¡Una historia de amor!</p>
          <h1>{CONFIG.couple}</h1>
          <div className="hero-divider">
            <span />
            <Heart size={16} />
            <span />
          </div>
          <p className="hero-date">{CONFIG.dateLabel}</p>
          <h2 className="invitation-recipient">Para:</h2>

          <h2 className="invitation-recipient">{nombreInvitado}</h2>
          <p>
            Tenemos el agrado de invitar a {nombreInvitado}a compartir con
            nosotros este día tan especial.
          </p>

          <a
            href="#invitacion"
            className="button button-light"
            onClick={async () => {
              const audio = document.getElementById(
                "wedding-audio",
              ) as HTMLAudioElement | null;

              if (audio) {
                try {
                  await audio.play();
                  setMusicOn(true);
                  setMusicError("");
                } catch {
                  setMusicError(
                    "No se pudo reproducir la música. Comprueba el archivo de audio.",
                  );
                }
              }
            }}
          >
            Descubrir invitación <span>↓</span>
          </a>
        </div>
        <div className="hero-bottom">CON TODO NUESTRO AMOR</div>
      </section>

      <section className="intro section" id="invitacion">
        <p className="eyebrow">UN DÍA PARA RECORDAR</p>
        <h2>
          ¡Nos encantaría
          <br />
          <em>compartirlo contigo!</em>
        </h2>
        <p className="body-copy">
          Hay momentos que se vuelven inolvidables cuando los compartimos con
          las personas que queremos. Nos hace mucha ilusión invitarte a celebrar
          el comienzo de esta nueva etapa de nuestras vidas.
        </p>
        <div className="date-chip">
          <CalendarDays size={19} />
          <span>{CONFIG.dateLabel}</span>
          <i /> <Clock3 size={18} />
          <span>{CONFIG.timeLabel}</span>
        </div>
      </section>

      <section className="countdown-section section">
        <p className="eyebrow">LA CUENTA REGRESIVA COMIENZA</p>
        <h2>Falta muy poco</h2>
        <Countdown />
        <p className="small-note">
          Cada segundo nos acerca a un día muy especial.
        </p>
      </section>

      <section className="gallery-section section">
        <div className="section-heading">
          <p className="eyebrow">
            <Camera size={15} /> NUESTROS MOMENTOS
          </p>
          <h2>
            Recuerdos que cuentan
            <br />
            <em>nuestra historia</em>
          </h2>
        </div>
        <div className="gallery">
          {gallery.map((photo, index) => (
            <figure
              className={`gallery-photo photo-${index + 1}`}
              key={photo.src}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
        <p className="small-note">Estas son imágenes de muestra.</p>
      </section>

      <section className="events section">
        <p className="eyebrow">NOS ENCONTRAMOS EN</p>
        <h2>
          Un día, <em>dos momentos</em>
        </h2>
        <div className="locations">
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
        </div>
      </section>

      <section className="rsvp-section section">
        <div className="rsvp-card">
          <Sparkles size={23} strokeWidth={1.4} />
          <p className="eyebrow">QUEREMOS CONTAR CONTIGO</p>
          <h2>¿Nos acompañas?</h2>
          <p className="body-copy">
            Tu presencia hará que este día sea aún más especial. Confírmanos si
            podrás acompañarnos.
          </p>
          <button
            className="button button-dark"
            onClick={() => setShowRsvp((v) => !v)}
          >
            {showRsvp ? "Cerrar formulario" : "Confirmar asistencia"}
          </button>
          {showRsvp && (
            <form className="form rsvp-form" onSubmit={submitRsvp}>
              <label>
                Tu nombre
                <input
                  required
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  placeholder="Nombre y apellido"
                  maxLength={80}
                />
              </label>
              <label>
                ¿Podrás asistir?
                <select
                  value={rsvpAnswer}
                  onChange={(e) => setRsvpAnswer(e.target.value)}
                >
                  <option>Sí, allí estaré</option>
                  <option>Lo siento, no podré asistir</option>
                </select>
              </label>
              <label>
                Personas incluyéndote
                <select
                  value={rsvpGuests}
                  onChange={(e) => setRsvpGuests(e.target.value)}
                >
                  {["1", "2", "3", "4", "5", "6"].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              <button className="button button-dark" type="submit">
                Continuar por WhatsApp <Send size={16} />
              </button>
              {rsvpStatus && <p className="form-status">{rsvpStatus}</p>}
            </form>
          )}
        </div>
      </section>

      <section className="wishes-section section">
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
              onChange={(e) => setWishName(e.target.value)}
              placeholder="¿Quién nos escribe?"
              maxLength={80}
            />
          </label>
          <label>
            Tu mensaje
            <textarea
              required
              value={wishMessage}
              onChange={(e) => setWishMessage(e.target.value)}
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
      </section>

      <footer className="footer">
        <Heart size={20} />
        <p className="script">Con amor,</p>
        <h2>{CONFIG.couple}</h2>
        <p>{CONFIG.dateLabel}</p>
        <span className="footer-line" />
        <small>HECHO CON AMOR · INVITACIÓN DIGITAL</small>
      </footer>
    </main>
  );
}
