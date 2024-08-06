import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

const Routes = () => {
    return (
        <BrowserRouter>
            {/* <Route path="/" component={Header} />
            <Route path="/" component={Footer} /> */}
            <Route path="/" component={Dashboard} />
        </BrowserRouter>
    );
}

export default Routes;