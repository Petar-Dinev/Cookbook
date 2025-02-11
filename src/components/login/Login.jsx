import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
  // const {} = useForm({
  //   email: '',
  //   password: ''
  // })

  return (
    <section>
      <header>
        <h2>Login Form</h2>
      </header>

      <form>
        <label htmlFor="email">
          Email: <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="password">
          Password: <input type="password" name="password" id="password" />
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
