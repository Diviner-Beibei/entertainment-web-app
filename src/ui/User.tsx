import { useSelector } from "react-redux";
import { getUserFace } from "../features/auth/authSlice";

function User() {
  const avater = useSelector(getUserFace);

  return (
    <div>
      <img src={avater} alt="User Face" className="rounded-full w-6 h-6" />
    </div>
  );
}

export default User;
