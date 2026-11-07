import { useState } from "react";
import { Copy, ExternalLink, Send, Check } from "lucide-react";

import {
  GeneratorPage,
  GeneratorCard,
  Title,
  Description,
  FieldLabel,
  NameInput,
  GenerateButton,
  GeneratedResult,
  UrlBox,
  CopyButton,
  ActionButtons,
  ShareButton,
  OpenButton,
  CopiedMessage,
} from "./styles";
import envelope from "../../assets/images/invite/envelope.png";
import { HeartDivider } from "../../components";

const BASE_URL = "https://xavieventos.vercel.app/joselo-&-norma/";

const InvitationGeneratorJoseloNorma = () => {
  const [guestName, setGuestName] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const generateInvitation = () => {
    const name = guestName.trim();

    if (!name) return;

    const url = `${BASE_URL}?invitado=${encodeURIComponent(name)}`;

    setGeneratedUrl(url);
    setCopied(false);
  };

  const copyInvitation = async () => {
    if (!generatedUrl) return;

    try {
      await navigator.clipboard.writeText(generatedUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("No se pudo copiar el enlace:", error);
    }
  };

  const capitalizeName = (value: string) => {
    return value
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
  };

  const shareInvitation = async () => {
    if (!generatedUrl) return;

    try {
      const response = await fetch(envelope);

      if (!response.ok) {
        throw new Error("No se pudo cargar la imagen");
      }

      const blob = await response.blob();

      const file = new File([blob], "invitacion-jose-luis-norma.webp", {
        type: blob.type || "image/webp",
      });

      const shareData = {
        title: "Invitación de José Luis & Norma",
        text: `${guestName}\n\n${generatedUrl}`,
        url: generatedUrl,
        files: [file],
      };

      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(generatedUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      if ((error as Error).name === "AbortError") {
        return;
      }

      console.error("No se pudo compartir:", error);

      try {
        await navigator.clipboard.writeText(generatedUrl);

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (clipboardError) {
        console.error("No se pudo copiar el enlace:", clipboardError);
      }
    }
  };

  return (
    <GeneratorPage>
      <GeneratorCard>
        <Title>Generar invitación</Title>
        <HeartDivider />
        <Description>
          Introduce el nombre de la persona o familia que recibirá la
          invitación.
        </Description>
        <FieldLabel htmlFor="guestName">Nombre del invitado</FieldLabel>
        <NameInput
          id="guestName"
          type="text"
          value={guestName}
          onChange={(e) => {
            setGuestName(capitalizeName(e.target.value));
          }}
          placeholder="Ej. Heriberto Mamani y Familia"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              generateInvitation();
            }
          }}
        />

        <GenerateButton
          type="button"
          onClick={generateInvitation}
          disabled={!guestName.trim()}
        >
          Generar invitación
        </GenerateButton>

        {generatedUrl && (
          <GeneratedResult>
            <HeartDivider />

            <FieldLabel htmlFor="generatedUrl">Enlace generado</FieldLabel>

            <UrlBox>
              <NameInput
                id="generatedUrl"
                type="text"
                value={generatedUrl}
                readOnly
              />

              <CopyButton
                type="button"
                onClick={copyInvitation}
                title="Copiar enlace"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </CopyButton>
            </UrlBox>

            <ActionButtons>
              <ShareButton type="button" onClick={shareInvitation}>
                <Send size={18} />
                Compartir invitación
              </ShareButton>

              <OpenButton
                href={generatedUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
                Abrir invitación
              </OpenButton>
            </ActionButtons>

            {copied && (
              <CopiedMessage>
                <Check size={16} />
                Enlace copiado correctamente.
              </CopiedMessage>
            )}
          </GeneratedResult>
        )}
      </GeneratorCard>
    </GeneratorPage>
  );
};

export default InvitationGeneratorJoseloNorma;
