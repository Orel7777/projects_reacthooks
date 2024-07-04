import Graph from "./Graph";
import LineGraph from "./LineGraph";


export default function AppGraph() {
  return (
    <div className='container bg-success'>
      <Graph/>
      <hr />
      <LineGraph/>
    </div>
  )
}
