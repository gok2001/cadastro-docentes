function DocenteForm({
    nome,
    setNome,
    cpf,
    setCpf,
    formacao,
    setFormacao,
    emailInstitucional,
    setEmailInstitucional,
    emailParticular,
    setEmailParticular,
    telefone,
    setTelefone,
    endereco,
    setEndereco,
    numero,
    setNumero,
    cidade,
    setCidade,
    cep,
    setCep,
    estado,
    setEstado,
    handleSubmit,
    erros
}) {

    function formatarCpf(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
            .substring(0, 14);
    }

    function formatarTelefone(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .substring(0, 15);
    }

    function formatarCep(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .substring(0, 9);
    }

    return (
        <div>

            <form className="form-docente" onSubmit={handleSubmit}>

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label htmlFor="nome">Nome Completo</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className={erros.nome ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.nome}
                    </div>

                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text"
                        name="cpf"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(formatarCpf(e.target.value))}
                        placeholder="000.000.000-00"
                        className={erros.cpf ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.cpf}
                    </div>

                    <label htmlFor="formacao">Formação/Área de atuação</label>
                    <input
                        type="text"
                        name="formacao"
                        id="formacao"
                        value={formacao}
                        onChange={(e) => setFormacao(e.target.value)}
                        className={erros.formacao ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.formacao}
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Contatos</legend>

                    <label htmlFor="email-institucional">Email institucional</label>
                    <input
                        type="email"
                        name="email-institucional"
                        id="email-institucional"
                        value={emailInstitucional}
                        onChange={(e) => setEmailInstitucional(e.target.value)}
                        className={erros.emailInstitucional ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.emailInstitucional}
                    </div>

                    <label htmlFor="email-particular">Email particular</label>
                    <input
                        type="email"
                        name="email-particular"
                        id="email-particular"
                        value={emailParticular}
                        onChange={(e) => setEmailParticular(e.target.value)}
                        className="form-control"
                    />

                    <label htmlFor="telefone">Telefone celular</label>
                    <input
                        type="tel"
                        name="telefone"
                        id="telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                        placeholder="(00) 00000-0000"
                        className={erros.telefone ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.telefone}
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <label htmlFor="endereco">Endereço residencial</label>
                    <input
                        type="text"
                        name="endereco"
                        id="endereco"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        className={erros.endereco ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.endereco}
                    </div>

                    <label htmlFor="numero">Número</label>
                    <input
                        type="text"
                        name="numero"
                        id="numero"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        className={erros.numero ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.numero}
                    </div>

                    <label htmlFor="cidade">Cidade</label>
                    <input
                        type="text"
                        name="cidade"
                        id="cidade"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        className={erros.cidade ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.cidade}
                    </div>

                    <label htmlFor="cep">CEP</label>
                    <input
                        type="text"
                        name="cep"
                        id="cep"
                        value={cep}
                        onChange={(e) => setCep(formatarCep(e.target.value))}
                        placeholder="00000-000"
                        className={erros.cep ? "form-control is-invalid" : "form-control"}
                    />
                    <div className="invalid-feedback">
                        {erros.cep}
                    </div>

                    <label htmlFor="estado">Estado</label>
                    <select
                        name="estado"
                        id="estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        className={erros.estado ? "form-control is-invalid" : "form-control"}
                    >
                        <option value="">Escolha uma opção</option>
                        <option value="ac">AC</option>
                        <option value="al">AL</option>
                        <option value="ap">AP</option>
                        <option value="am">AM</option>
                        <option value="ba">BA</option>
                        <option value="ce">CE</option>
                        <option value="df">DF</option>
                        <option value="es">ES</option>
                        <option value="go">GO</option>
                        <option value="ma">MA</option>
                        <option value="mt">MT</option>
                        <option value="ms">MS</option>
                        <option value="mg">MG</option>
                        <option value="pa">PA</option>
                        <option value="pb">PB</option>
                        <option value="pr">PR</option>
                        <option value="pe">PE</option>
                        <option value="pi">PI</option>
                        <option value="rj">RJ</option>
                        <option value="rn">RN</option>
                        <option value="rs">RS</option>
                        <option value="ro">RO</option>
                        <option value="rr">RR</option>
                        <option value="sc">SC</option>
                        <option value="sp">SP</option>
                        <option value="se">SE</option>
                        <option value="to">TO</option>
                    </select>
                    <div className="invalid-feedback">
                        {erros.estado}
                    </div>
                </fieldset>

                <button type="submit">Cadastrar</button>

            </form>

        </div>
    );
}

export default DocenteForm;
