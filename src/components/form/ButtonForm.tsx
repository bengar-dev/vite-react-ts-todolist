import React from "react";

interface ButtonFormProps {
  type: "button" | "submit" | "reset";
  style: "classic";
  value: string | React.ReactNode;
  func?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonForm = (props: ButtonFormProps) => {
  const { type, style, value, func } = props;
  return (
    <button
      type={type}
      className={handleButtonStyle(props)}
      onClick={(event) => {
        if (func) func(event);
      }}
    >
      {value}
    </button>
  );
};

function handleButtonStyle({ style }: ButtonFormProps): string {
  switch (style) {
    case "classic":
      return "transition-all duration-200 w-3/12 bg-blue-300 hover:bg-blue-400 rounded-r text-white text-2xl flex items-center justify-center";
  }
}
