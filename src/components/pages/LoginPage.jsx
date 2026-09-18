import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import LoginForm from "../forms/LoginForm";
import { login } from "../../redux/actions/userActions";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  var [error, setError] = useState({});

  function submit(data) {
    console.dir("login");
    dispatch(login(data))
      .then(() => navigate("/"))
      .catch((err) => {
        return setError(err.response.data.errors);
      });
  }

  return (
    <div>
      <h1 class="display-4">Sign Up</h1>
      <LoginForm submit={submit} errors={error} />
    </div>
  );
}
