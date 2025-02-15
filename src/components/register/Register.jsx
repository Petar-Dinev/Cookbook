import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useForm } from '../../hooks/useForm';

export default function Register() {
    const { onRegister } = useAuthContext();
    const { values, onChangeHandler, onSubmitHandler } = useForm({
        email: '',
        username: '',
        password: '',
        rePass: ''
    }, onRegister);

    return (
        <section>
            <header>
                <h2>Register Form</h2>
            </header>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="email">Email: <input type="text" name="email" id="email" value={values.email} onChange={onChangeHandler} /></label>
                <label htmlFor="username">Username: <input type="text" name="username" id="username" value={values.username} onChange={onChangeHandler} /></label>
                <label htmlFor="password">Password: <input type="password" name="password" id="password" value={values.password} onChange={onChangeHandler} /></label>
                <label htmlFor="rePass">Repeat: <input type="password" name="rePass" id="rePass" value={values.rePass} onChange={onChangeHandler} /></label>
                <button type="submit">Register</button>
            </form>

            <footer>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </footer>
        </section>
    )
}