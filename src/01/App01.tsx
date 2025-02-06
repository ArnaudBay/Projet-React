import "./style.css";
import logo from './logo-react.jpg';

function App01() {
  return (
    <div className="wrapper">
      <img src={logo} alt="Logo React" className="custom-image" />
      <h1>Bienvenue dans mon composant React</h1>
    </div>
  );
}

export default App01;
