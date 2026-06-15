type BlurWordLayerProps = {
  sharp?: boolean;
};

const mainPhrase =
  "PRECISÃO ALEMÃ • TECNOLOGIA ZEISS • CONFORTO VISUAL";
const secondaryPhrase =
  "ZEISS VISION CENTER ARAGUAÍNA • LENTES ZEISS • ARMAÇÕES PREMIUM • ATENDIMENTO CONSULTIVO";

export function BlurWordLayer({ sharp = false }: BlurWordLayerProps) {
  return (
    <div
      className={sharp ? "clarity-reveal-layer" : "clarity-blur-layer"}
      aria-hidden="true"
    >
      <div className="clarity-stack">
        <div className="clarity-track clarity-track-main">
          <span>{mainPhrase}</span>
          <span>{mainPhrase}</span>
          <span>{mainPhrase}</span>
        </div>
        <div className="clarity-track clarity-track-secondary">
          <span>{secondaryPhrase}</span>
          <span>{secondaryPhrase}</span>
          <span>{secondaryPhrase}</span>
        </div>
      </div>
    </div>
  );
}
