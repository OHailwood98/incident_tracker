import { useDispatch } from "react-redux";

import SignupForm from "../forms/SignupForm";
import { signup } from "../../redux/actions/userActions";

export default function SignupPage() {
  const dispatch = useDispatch();

  function submit(data) {
    dispatch(signup(data));
  }

  return (
    <div>
      <h1 class="display-4">Sign Up</h1>
      <SignupForm submit={submit} />
    </div>
  );
}
