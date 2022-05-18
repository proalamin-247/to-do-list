import './App.css';
import Home from './Home';
import TaskArea from './TaskArea';

function App() {
  return (
    <div className="">
      <Home></Home>

      <div className='d-flex align-items-center justify-content-center mt-5'>
        <div style={{ height: '1px' }} className="bg-primary w-25"></div>
        <p className='px-2 mt-2 fw-bold fs-3'>To Do Task</p>
        <div style={{ height: '1px' }} className="bg-primary w-25"></div>
      </div>

      <TaskArea></TaskArea>
    </div>
  );
}

export default App;
