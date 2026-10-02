import { useState } from 'react';
import DocenteForm from './components/DocenteForm';
import ListDocentes from './components/ListDocentes';

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

  function handleSubmit(e) {
    e.preventDefault();

    const erros = validar();

    if (Object.keys(erros).lenght > 0) {
      return;
    }

    setDocentes([
      ...docentes,
      {
        "nome": nome,
        "cpf": cpf,
        "formacao": formacao,
        "emailInstitucional": emailInstitucional,
        "emailParticular": emailParticular,
        "telefone": telefone,
        "endereco": endereco,
        "numero": numero,
        "cidade": cidade,
        "cep": cep,
        "estado": estado
      }
    ]);

    setNome("");
    setCpf("");
    setFormacao("");
    setEmailInstitucional("");
    setEmailParticular("");
    setTelefone("");
    setEndereco("");
    setNumero("");
    setCidade("");
    setCep("");
    setEstado("");
  }

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

  return (
    <div>
      <DocenteForm
        nome={nome}
        setNome={setNome}
        cpf={cpf}
        setCpf={setCpf}
        formacao={formacao}
        setFormacao={setFormacao}
        emailInstitucional={emailInstitucional}
        setEmailInstitucional={setEmailInstitucional}
        emailParticular={emailParticular}
        setEmailParticular={setEmailParticular}
        telefone={telefone}
        setTelefone={setTelefone}
        endereco={endereco}
        setEndereco={setEndereco}
        numero={numero}
        setNumero={setNumero}
        cidade={cidade}
        setCidade={setCidade}
        cep={cep}
        setCep={setCep}
        estado={estado}
        setEstado={setEstado}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App
