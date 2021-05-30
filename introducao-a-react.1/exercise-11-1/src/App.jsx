import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const talksList = [ 'fazer compras', 'Pagar as contsa', 'trocra fralda', 'dormir', 'almoçar', 'jantar', 'estudar', 'assistir', 'ouvir músicas' ]

function App() {
  return (
    <div className="App">
      { 
      talksList.map((value) => Task(value))
      }
    </div>
  );
}

export default App;
