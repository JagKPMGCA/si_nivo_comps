import logo from './logo.svg';
import './App.css';
import ErrorBoundary from "./components/ErrorBoundary";
import RadialBarChart from "./components/RadialBarChart";
import BarChart from "./components/BarChart";

function App() {

  return (
    <div className="App">

    <ErrorBoundary>
     <RadialBarChart />
    </ErrorBoundary>


    <ErrorBoundary>
     <BarChart />
    </ErrorBoundary>

    </div>
  );
}

export default App;
