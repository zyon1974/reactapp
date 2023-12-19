import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './HomeView';
import TechNews from './Users';
import NavigationMenu from './NavigationMenu';

const App = () => {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `clicked ${count} times`;
  // });

  // const increment = () => {
  //   setCount(count + 1);
  // };

  return (
  <Router>
    <div>
      <h2>react project</h2>
      <NavigationMenu />
      {/* <button onClick={increment}>pippato {count} {count == 1 ? 'volta' : 'volte'}</button> */}
        <Routes>
          <Route path="/" exact element={<HomeView />} />
          <Route path="/users" element={<TechNews />} />
        </Routes>
    </div>
  </Router>
  )
}

export default App;
