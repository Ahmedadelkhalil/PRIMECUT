import React from "react";
import RoutesPage from "./routes/routes";
import ScrollToTopBtn from "./global/scrollToTopBtn/scrollToTopBtn";

// import Provider to wrap the entire app with the redux core
import { Provider } from "react-redux";
import store from "./Redux/store";

import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Provider store={store}>
          <RoutesPage />
        </Provider>
        <ScrollToTopBtn />
      </HashRouter>
    </div>
  );
};

export default App;
