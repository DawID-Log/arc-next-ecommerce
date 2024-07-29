import { SVGProps } from "react";
import Image from "next/image";

interface logoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo = ({width, height, className}: logoProps ) => (
  <Image 
    src="/availability-svgrepo-com.svg"
    alt={"logo"} 
    width={width || 80} 
    height={height || 80}
    className={className}
  />
);
