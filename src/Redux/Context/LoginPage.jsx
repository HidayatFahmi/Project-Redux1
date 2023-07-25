import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../Action/loginAction";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.login.isLoading);
  const error = useSelector((state) => state.login.error);

  const handleLogin = () => {
    dispatch(onLogin(email, password));
  };

  return (
    <div>
      <h1>Silahkan Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={isLoading}>
        Login
      </button>
      {email}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default LoginPage;
