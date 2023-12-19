import { useEffect } from "react";

export type Mood = {
  fontColor: string;
  color: string;
  ko: string;
};

interface Props {
  color: string;
  fontColor: "white" | "black";
  ko: string;
  en: string;
  onSelect: (mood: Mood) => void;
}

export function MoodBox({ ko, fontColor, color, onSelect }: Props) {
  const handleSelect = () => {
    onSelect({ color, ko, fontColor });
  };

  return (
    <div
      style={{
        backgroundColor: color,
        width: "100px",
        height: "50px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 0,
      }}
      onClick={handleSelect}
    >
      <p
        style={{
          color: fontColor,
          fontSize: "0.8rem",
          fontWeight: "bold",
        }}
      >
        {ko}
      </p>
    </div>
  );
}
