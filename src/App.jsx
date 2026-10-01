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

  const [docentes, setDocentes] = useState([]);

  const [erros, setErros] = useState({});

  function validar() {
    const erros = {};

    if (nome.length < 3) {
      erros.nome = "Nome deve ter pelo menos 3 caracteres";
    }

    if (!cpf) {
      erros.cpf = "CPF obrigatório";
    }

    if (!formacao) {
      erros.formacao = "Formação obrigatória";
    }

    if (!emailInstitucional) {
      erros.emailInstitucional = "Email institucional obrigatório";
    }

    if (!telefone) {
      erros.telefone = "Telefone obrigatório";
    }

    if (!endereco) {
      erros.endereco = "Endereço obrigatório";
    }

    if (!numero) {
      erros.numero = "Número obrigatório";
    }

    if (!cidade) {
      erros.cidade = "Cidade obrigatória";
    }

    if (!cep) {
      erros.cep = "CEP obrigatório";
    }

    if (!estado) {
      erros.estado = "Estado obrigatório";
    }

    setErros(erros);

    return erros;
  }
}

export default App
