import "./App.css";
import DataProvider from "./components/Providers/DataProvider";
import FileProvider from "./components/Providers/FileProvider";
import Main from "./pages/Main";

function App() {
  return (
    <DataProvider>
      <FileProvider>
        <Main />
      </FileProvider>
    </DataProvider>
  );
}

export default App;
