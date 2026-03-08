export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* M icon */}
      <path d="M4 8L12 28L20 14L28 28L36 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="20" cy="32" r="3" fill="#FFD700"/>
      {/* MENTAL text */}
      <text x="46" y="28" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="white" letterSpacing="3">MENTAL</text>
    </svg>
  );
};
