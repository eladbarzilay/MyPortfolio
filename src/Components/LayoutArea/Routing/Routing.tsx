import { Switch, Route, Redirect } from "react-router";
import Page404 from "../../SharedArea/Page404/Page404";
import Main from "../Main/Main";
import Skills from "../../HomeArea/Skills/Skills";
import "./Routing.css";
import About from "../../HomeArea/About/About";
import Projects from "../../HomeArea/Projects/Projects";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import ContactMe from "../../HomeArea/ContactMe/ContactMe";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
						<Switch>
            <Route path = '/home' component = {Main} exact/>
            <Route path = '/about' component = {About} exact/>
            <Route path = '/skills' component = {Skills} exact/>
            <Route path = '/projects' component = {Projects} exact/>
            <Route path = '/emptyview' component = {EmptyView} exact/>
            <Route path = '/contactMe' component = {ContactMe} exact/>
            <Redirect from='/' to='home' exact/>
            <Route component={Page404}/> 

            </Switch>
        </div>
    );
}

export default Routing;
