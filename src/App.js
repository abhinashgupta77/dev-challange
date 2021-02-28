import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import TopNav from "./components/TopNav/TopNav";
import "./styles/common/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <TopNav />
      <Main />
    </div>
  );
}

export default App;
