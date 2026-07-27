import { useState } from "react";
import { Link } from "react-router-dom";
import { resetPassword } from "./authService";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await resetPassword(email);

      alert("Password reset email sent.");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="container">

      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">

          Send Reset Link

        </button>

      </form>

      <Link to="/">

        Back to Login

      </Link>

    </div>

  );

}

export default ForgotPassword;
