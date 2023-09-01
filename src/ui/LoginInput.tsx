import { useSelector } from "react-redux";
import { getErrorNumber } from "../features/auth/authSlice";

interface LoginInputProps {
  htmlFor: string;
  type: string;
  id: string;
  value: string;
  setOnChange: (val: string) => void;
  placeholderText: string;
}

function LoginInput({
  htmlFor,
  type,
  id,
  value,
  setOnChange,
  placeholderText,
}: LoginInputProps) {
  const errorNumber = useSelector(getErrorNumber);

  // console.log(errorNumber);

  let showError = false;
  switch (errorNumber) {
    case 1:
      if (id === "email") showError = true;
      break;
    case 2:
      if (id === "password") showError = true;
      break;
    case 4:
      if (id === "repeat-password") showError = true;
      break;

    case 3:
      if (id === "email") showError = true;
      if (id === "password") showError = true;
      break;
    case 5:
      if (id === "email") showError = true;
      if (id === "repeat-password") showError = true;
      break;
    case 6:
      if (id === "password") showError = true;
      if (id === "repeat-password") showError = true;
      break;
    case 7:
      if (id === "email") showError = true;
      if (id === "password") showError = true;
      if (id === "repeat-password") showError = true;
      break;
    default:
      break;
  }

  return (
    <div className="flex relative items-center">
      <label htmlFor={htmlFor}></label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setOnChange(e.target.value)}
        placeholder={placeholderText}
        className="bg-semi-dark-blue caret-red-600 border-b w-full text-[15px] font-light border-greyish-blue focus:border-pure-white placeholder:text-greyish-blue py-3 focus:outline-none focus:ring-0 focus:caret-red text-pure-white"
      />
      <span
        className={`text-red-700 absolute text-[13px] right-0 ${
          showError ? "" : "hidden"
        }`}
      >
        Can't be empty
      </span>
    </div>
  );
}

export default LoginInput;
