import { useState } from "react";

function App() {
  const maskCPF = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const maskCEP = (value: string) => {
    return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
  };

  const maskDate = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };

  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [data, setData] = useState("");

  return (
    <div className="App">
      <div className="flex">
        <label>
          CPF
          <input
            value={cpf}
            onChange={(e) => setCpf(maskCPF(e.target.value))}
          />
        </label>
        <span>{cpf}</span>

        <label>
          CEP
          <input
            value={cep}
            onChange={(e) => setCep(maskCEP(e.target.value))}
          />
        </label>
        <span>{cep}</span>

        <label>
          Data
          <input
            value={data}
            onChange={(e) => setData(maskDate(e.target.value))}
          />
        </label>
        <span>{data}</span>
      </div>
    </div>
  );
}

export default App;
