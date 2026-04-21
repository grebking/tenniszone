export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top tennis ball */}
      <circle cx="160" cy="18" r="16" fill="#C8E620" stroke="#222" strokeWidth="2" />
      <path d="M148 8 Q160 18 148 28" fill="none" stroke="#fff" strokeWidth="1.5" />
      <path d="M172 8 Q160 18 172 28" fill="none" stroke="#fff" strokeWidth="1.5" />

      {/* Horizontal line */}
      <line x1="20" y1="34" x2="300" y2="34" stroke="currentColor" strokeWidth="3" />

      {/* TENNIS text */}
      <text
        x="160"
        y="68"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="40"
        fontStyle="italic"
        fill="currentColor"
        letterSpacing="2"
      >
        TENNIS
      </text>

      {/* ZONE text with ball as O */}
      <text
        x="110"
        y="105"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="40"
        fontStyle="italic"
        fill="currentColor"
        letterSpacing="2"
      >
        Z
      </text>

      {/* Tennis ball as O in ZONE */}
      <circle cx="160" cy="95" r="14" fill="#C8E620" stroke="#222" strokeWidth="2" />
      <path d="M150 86 Q160 95 150 104" fill="none" stroke="#fff" strokeWidth="1.5" />
      <path d="M170 86 Q160 95 170 104" fill="none" stroke="#fff" strokeWidth="1.5" />

      <text
        x="215"
        y="105"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="40"
        fontStyle="italic"
        fill="currentColor"
        letterSpacing="2"
      >
        NE
      </text>
    </svg>
  );
}
