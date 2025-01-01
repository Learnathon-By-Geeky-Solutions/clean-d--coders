import { Button } from "@/components";
import { useStore } from "@/hooks";

const App = () => {
  const {counter, increment, decrement} = useStore();
  return (
    <div className="h-screen flex gap-10 flex-col justify-center items-center w-full">
      <Button onClick={increment} variant="secondary">Increase</Button>
      <h1 className="text-5xl" 
          style={{
            color: counter === 0 ? "red" : counter === 5 ? "green" : "black"
            }}
        >{counter}</h1>
      <Button onClick={decrement} variant="destructive">Decrease</Button>
    </div>
  );
};

export default App;