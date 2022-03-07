import { Provider, useSelector } from "react-redux";
import "../../styles/globals.css";
import App from "../components/App";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <App Component={Component} pageProps={pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
