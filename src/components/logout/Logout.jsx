import { useEffect } from "react";
import { Navigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Logout() {
    const { onLogout } = useAuthContext()

    useEffect(() => {
        onLogout()
    }, [onLogout])

    return (
        <Navigate to="/" replace={true} />
    )
}