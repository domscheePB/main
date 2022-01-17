import './App.css';

let i = 0;

const entradaCalculo = (entrada) => {
  return () => {
    document.getElementById("calc").value += entrada
  }
};

const definirArg = (tArg) =>
{
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const signs = ["+", "-", "x", "/"];
  let outScan = false;
  let arg;
  arg = undefined;

  while(!outScan && tArg[i] !== undefined)
  {
    if(numbers[tArg[i]] !== undefined)
    {
      if(arg === undefined)
      {
        arg = tArg[i];
      }
      else
      {
        arg += tArg[i];
      }
      i++;
    }
    else if(signs.includes(tArg[i]))
    {
      outScan = true;
      return arg;
    }
    else
    {
      outScan = true;
      return "error";
    }

    if(tArg[i] === undefined)
    {
      return arg;
    }
  }
}

const definirOp = (tArg) =>
{
  const signs = ["+", "-", "x", "/"];
  let outScan = false;

  while(!outScan && tArg[i] !== undefined)
  {
    if(signs.includes(tArg[i]))
    {
      outScan = true;
      return tArg[i];
    }
    else
    {
      outScan = true;
      return "error";
    }
  }
}

const salidaCalculo = () => {
  i = 0;
  let arg1, arg2, operation, tArg;
  tArg = document.getElementById("calc").value;
  arg1 = definirArg(tArg);
  operation = definirOp(tArg);
  i++;
  arg2 = definirArg(tArg);
  arg1 = +arg1;
  arg2 = +arg2;

  if(arg1 === undefined || arg1 === "error" || arg2 === undefined || arg2 === "error")
  {
    alert("Uno de los valores ingresados no es correcto.")
    return tArg;
  }

  if(operation === "+")
  {
    arg1 = arg1 + arg2;
  }
  else if(operation === "-")
  {
    arg1 = arg1 - arg2;
  }
  else if(operation === "x")
  {
    arg1 = arg1 * arg2;
  }
  else if(operation === "/")
  {
    arg1 = arg1 / arg2;
  }

  return arg1;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((numeros) =>{
          return(
            <buttonNum className="App-boton"
              onClick={entradaCalculo(numeros)}
            >
              {numeros}
            </buttonNum>
          );
        })}
        {["+","-","x","/"].map((signos) =>{
          return(
            <buttonNum className="App-boton buttonSign"
              onClick={entradaCalculo(signos)}
            >
              {signos}
            </buttonNum>
          );
        })}
        <buttonEqual className="App-boton buttonEqual"
          onClick={() => document.getElementById("calc").value = salidaCalculo()}>
          =
        </buttonEqual>
        <input className="App-input" id="calc"/>
      </header>
    </div>
  );
}

export default App;
