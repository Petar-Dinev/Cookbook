import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const { onLogin } = useAuthContext();
  const { values, onChangeHandler, onSubmitHandler } = useForm(
    {
      email: "",
      password: "",
    },
    onLogin
  );

  return (
    <section>
      <header>
        <h2>Login Form</h2>
      </header>

      <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={onChangeHandler}
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={onChangeHandler}
          />
        </label>
        <button>Log in</button>
      </form>

      <footer>
        <p>
          If you don't have account, you can create one{" "}
          <Link to="/register">here</Link>.
        </p>
      </footer>
    </section>
  );
};
