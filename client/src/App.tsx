import "antd/dist/antd.css";
import Documents from "./components/Documents/Documents";
import {store} from "./store/store";
import {Provider} from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
            <Documents/>
        </Provider>
    );
};

export default App;