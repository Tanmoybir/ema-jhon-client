import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <p>loading...</p>
    }

    if (!user) {
        return <Navigate state={location.pathname} to={'/login'} />
    }
    return children
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    product: PropTypes.node
}