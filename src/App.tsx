import { Button } from "primereact/button";

function App() {
  return (
    <div className='text-center p-8'>
      <h1 className='text-3xl font-bold'>Star Trek Watchlist Creator</h1>
      <Button icon='pi pi-plus' className='m-4 p-button' label='Increment'/>
    </div>
  );
}

export default App;
