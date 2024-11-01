export default function PassingFunctions(
    // function is param
    { theFunction }: { theFunction: () => void }) {
     return (
       <div>
         <h2>Passing Functions</h2>
         {/* invoking function with no arguments */}
         <button onClick={theFunction} className="btn btn-primary">
           Invoke the Function
         </button>
         <hr/>
       </div>
   );}

   