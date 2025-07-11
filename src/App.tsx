import { useDarkMode } from "usehooks-ts";
import Main from "./pages/Main";
import { useEffect } from "react";
import Loading from "./pages/Loading";

function App() {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <>
      <div className="min-h-screen">
        <Loading />
        <Main />
      </div>
    </>
  );
}

export default App;
