import type { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="40"
    height="40"
    {...props}
  >
    <rect width="100" height="100" rx="20" fill="hsl(var(--primary))" />
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize="50"
      fontWeight="bold"
      fill="hsl(var(--primary-foreground))"
      className="font-headline"
    >
      GB
    </text>
  </svg>
);

export default Logo;
