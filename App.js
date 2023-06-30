import MainScreen from './src/screens/MainScreen';


const taskList = [
  {
    id: 1,
    task: "Comprar Bebida",
    completed: false
  },
  {
    id: 2,
    task: "Comprar Postre",
    completed: false
  },
  {
    id: 3,
    task: "Limpiar el patio",
    completed: false
  },{
    id: 4,
    task: "Ir a comprar carne",
    completed: false
  },{
    id: 5,
    task: "Comprar carbón",
    completed: false
  },
]

export default function App() {
  return (
    
      <MainScreen taskList={taskList}/>
    
  );
}
