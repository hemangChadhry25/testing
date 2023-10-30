import "../app/globals.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
function App({ Component, pageProps }) {
  const { ...rest } = pageProps;
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </DndProvider>
    </>
  );
}

export default wrapper.withRedux(App);
