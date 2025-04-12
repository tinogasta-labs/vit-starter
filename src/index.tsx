import { LocationProvider, hydrate, prerender as ssr } from "preact-iso";

import { Header } from "./components/Header.jsx";
import "./style.css";
import DefaultRouter from "./router.js";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <DefaultRouter />
      </main>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data: any) {
  return await ssr(<App {...data} />);
}
