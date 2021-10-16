import { Route } from "react-router-dom";

const Welcome = () => {
    return(
        <section>
        <h1>My Welcome page!</h1>
        <Route path="/Welcome/new-user">
            <p>Welcome New user!</p>
        </Route>
        </section>
    );
};


export default Welcome;