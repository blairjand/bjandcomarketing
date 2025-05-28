export default function NoiseTexture() {
  return (
    <svg
      className="fixed inset-0 w-full h-full opacity-50 pointer-events-none"
      style={{ filter: 'contrast(200%) brightness(150%)' }}
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
} 