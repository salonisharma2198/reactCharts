import './App.css';
import Graph from './components/GraphComponent';

function App() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthlyData = [100, 200, 150, 300, 250, 180, 220, 280, 210, 190, 270, 230];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-screen-md w-full px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">React Bar Chart</h1>
        <Graph labels={months} data={monthlyData} />
      </div>
    </div>
  );
}

export default App;
