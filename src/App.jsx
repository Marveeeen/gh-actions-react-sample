import logo from "./assets/images/logo.png";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} alt="LOGO" />
        </div>
        <h1>Learn Github Actions</h1>
        <MainContent />
      </header>
    </>
  );
}

export default App;
