import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

/* function LoadData() {
  const [Countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);
  return (
    <div>
      <h1>All Countries</h1>
      <p>Available country {Countries.length}</p>
      {Countries.map((country) => (
        <Country
          name={country.name.common}
          population={country.population}
        ></Country>
      ))}
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <p>Population: {props.population}</p>
    </div>
  );
} */

export default App;
