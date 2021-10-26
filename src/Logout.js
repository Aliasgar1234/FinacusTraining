import { useContext } from "react";
import { useHistory } from "react-router";
const Logout = () => {
    const history = useHistory();
    return (
        <div>
            <button>
                Logout
            </button>
        </div>
    );
};


export default Logout;