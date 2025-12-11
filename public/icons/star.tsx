
interface Props {
  width: number | string;
  height: number | string;
}

const StarIcon = ({ width, height }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 120"
      fill="none"
    >
      <defs>
        <linearGradient id="geminiGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#0041D5" />
          <stop offset="50%" stopColor="#00B0FF" />
          <stop offset="100%" stopColor="#0041D5" />
        </linearGradient>
      </defs>
      {/* Akta/Gemini-style 4-pointed sparkle - elongated vertical */}
      <path
        d="M50 0
           C50 45, 52 52, 85 60
           C52 68, 50 75, 50 120
           C50 75, 48 68, 15 60
           C48 52, 50 45, 50 0Z"
        fill="url(#geminiGradient)"
      />
    </svg>
  );
};

export default StarIcon;
