import { FieldError, FieldErrorsImpl, FieldValues } from "react-hook-form";

interface InputValueProps {
  type: "text" | "email" | "number" | "password";
  style: "classic";
  field: FieldValues;
  errors?: FieldError | FieldErrorsImpl<any>;
  placeholder?: string;
}

export const InputValue = (props: InputValueProps) => {
  const { type, placeholder, field, errors } = props;
  return (
    <input
      type={type}
      className={`${handleInputStyle(props)} ${errors && "border-rose-300"}`}
      placeholder={placeholder}
      {...field}
    />
  );
};

function handleInputStyle({ style }: InputValueProps): string {
  switch (style) {
    case "classic":
      return "w-9/12 outline-none p-2 rounded-l border-4 border-blue-300 text-gray-700 text-sm";
  }
}
