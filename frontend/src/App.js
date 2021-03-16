import './css/App.css';
import Routes from './Routes';
import LoggedInContext from './LoggedInContext';
import useToggleLogin from './components/hooks/useToggleLogin';

function App() {
  const [currentUser, toggleUserLogin] = useToggleLogin();

  return (
    <div className="App">
      <LoggedInContext.Provider value={{ currentUser, toggleUserLogin }}>
        <Routes />
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
