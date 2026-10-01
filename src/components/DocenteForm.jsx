function DocenteForm() {
    return (
        <div>

            <form>

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label htmlFor="nome">Nome Completo</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                    />

                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text"
                        name="cpf"
                        id="cpf"
                    />

                    <label htmlFor="formacao">Formação/Área de atuação</label>
                    <input
                        type="text"
                        name="formacao"
                        id="formacao"
                    />
                </fieldset>

                <fieldset>
                    <legend>Contatos</legend>

                    <label htmlFor="email-institucional">Email institucional</label>
                    <input
                        type="email"
                        name="email-institucional"
                        id="email-institucional"
                    />

                    <label htmlFor="email-particular">Email particular</label>
                    <input
                        type="email"
                        name="email-particular"
                        id="email-particular"
                    />

                    <label htmlFor="telefone">Telefone celular</label>
                    <input
                        type="tel"
                        name="telefone"
                        id="telefone"
                    />
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <label htmlFor="endereco">Endereço residencial</label>
                    <input
                        type="text"
                        name="endereco"
                        id="endereco"
                    />

                    <label htmlFor="numero">Número</label>
                    <input
                        type="text"
                        name="numero"
                        id="numero"
                    />

                    <label htmlFor="cidade">Cidade</label>
                    <input
                        type="text"
                        name="cidade"
                        id="cidade"
                    />

                    <label htmlFor="cep">CEP</label>
                    <input
                        type="text"
                        name="cep"
                        id="cep"
                    />

                    <label htmlFor="estado">Estado</label>
                    <select
                        name="estado"
                        id="estado"
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
                </fieldset>

                <button type="submit">Cadastrar</button>

            </form>

        </div>
    );
}

export default DocenteForm;