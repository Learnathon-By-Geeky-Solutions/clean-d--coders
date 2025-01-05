import { Button, Img } from "@/components";
import { useGetData } from "@/hooks";
import { useCounterStore } from "@/store";
import { getCapitalCase, getSentenceCase } from "@/utils";
import { useEffect } from "react";
const App = () => {
  const {counter, increment, decrement, setCounter} = useCounterStore();
  
  const {data, isLoading} = useGetData("https://sonarcloud.io/api/measures/component?component=Learnathon-By-Geeky-Solutions_clean-d--coders&metricKeys=bugs,vulnerabilities,code_smells,coverage,duplicated_lines_density,ncloc,reliability_rating,security_rating,sqale_rating,sqale_index,complexity")
  
  useEffect(()=> {
    if(!isLoading) {
      let val = 0;
      if(data.component.measures) {
        val = +data.component.measures.find(d => d.metric === "complexity").value;
      }
      setCounter(val);
    }
  }, [isLoading])


  return (
    <div className="h-screen flex gap-10 flex-col justify-center items-center w-full">
      <Img 
        src="https://i.ibb.co.com/dk96X5j/upload.png"
        lowSrc="https://i.ibb.co.com/TPXRJgY/upload.png"
        className="w-full max-w-72 aspect-square object-cover object-center"
      />
      <Button onClick={increment} variant="success">
        {getCapitalCase("increase")}
        </Button>
      <h1 className="text-5xl" 
          style={{
            color: counter === 0 ? "red" : counter === 5 ? "green" : "black"
            }}
        >{counter}</h1>
      <Button onClick={decrement} variant="destructive">
        {getSentenceCase("decrease")}
        </Button>
    </div>
  );
};

export default App;