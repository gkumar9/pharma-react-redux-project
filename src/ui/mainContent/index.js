import Dashboard from "./dashboard";
import Inventory from "./inventory";
import Orders from "./orders";
import Prescription from "./prescription";

const MainContent = () => {
    return (
        <article className="content">
            <div className="tab-content m-3">
                <Dashboard />
                <Inventory />
                <Prescription />
                <Orders />
            </div>
        </article>
    )
}
export default MainContent;