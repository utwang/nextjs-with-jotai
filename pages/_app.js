import { Provider } from "jotai";
import { clockAtom } from "../store";

export default function App({ Component, pageProps }) {
  const { initialState } = pageProps;

  return (
    <Provider initialValues={initialState && [[clockAtom, initialState]]}>
      <Component {...pageProps} />
    </Provider>
  );
}
