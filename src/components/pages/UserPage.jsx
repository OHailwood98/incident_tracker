import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { LoadUsers } from "../../redux/actions/usersActions";

export default function SignupPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadUsers());
  });

  return (
    <div>
      <h1 class="display-4">Current Users</h1>
    </div>
  );
}
