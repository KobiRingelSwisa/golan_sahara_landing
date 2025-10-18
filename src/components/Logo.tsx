import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <img
        src="/logo.png"
        alt="סהרה - לוגו"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
