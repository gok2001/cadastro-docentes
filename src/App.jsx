import { useState } from 'react';

function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [formacao, setFormacao] = useState("");

  const [emailInstitucional, setEmailInstitucional] = useState("");
  const [emailParticular, setEmailParticular] = useState("");
  const [telefone, setTelefone] = useState("");

  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
}

export default App
