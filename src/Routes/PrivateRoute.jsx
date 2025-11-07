import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ element }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return element;
};
