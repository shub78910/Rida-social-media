import { Provider } from "react-redux";
import "../../styles/globals.css";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      ;
    </div>
  );
}

export default MyApp;
