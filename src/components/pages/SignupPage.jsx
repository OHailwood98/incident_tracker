import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import SignupForm from "../forms/SignupForm";
import { signup } from "../../redux/actions/userActions";

export default function SignupPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  var [error, setError] = useState({});

  function submit(data) {
    dispatch(signup(data))
      .then(() => navigate("/"))
      .catch((err) => {
        return setError(err.response.data.errors);
      });
  }

  return (
    <div>
      <h1 class="display-4">Sign Up</h1>
      <SignupForm submit={submit} errors={error} />
    </div>
  );
}
