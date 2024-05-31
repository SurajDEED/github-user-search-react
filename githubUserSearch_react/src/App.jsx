import { useState, useEffect } from "react";
import Head from "./components/Head";
import Output from "./components/Output";
import Search from "./components/Search";
import { ThemeProvider } from "./Context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [userData, setUserData] = useState(null);
  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  const toggleTheme = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  const handleData = (data) => {
    console.log("This data is from the app.jsx file " + data.login);
    setUserData(data);
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme, toggleTheme }}>
        <div className="flex h-full justify-center items-center flex-col">
          <Head />
          <Search onSearch={handleData} />
          <Output userData={userData} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
