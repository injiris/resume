import MainPage from "./pages/MainPage";
import configLocalization from "./configs/localization";
import "./App.scss";

export default function App() {
  configLocalization();
  return <MainPage />;
}
