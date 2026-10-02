export default function Login({
    usuario,
    setUsuario,
    senha,
    setSenha,
    handleLogin,
    errosAutenticacao
}) {
    return (
        <form className="form-login" onSubmit={handleLogin}>
            <fieldset className="col-md-6">
                <legend>Login</legend>

                <label htmlFor="usuario">Usuário</label>
                <input
                    type="text"
                    name="usuario"
                    id="usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    className={errosAutenticacao.usuario ? "form-control is-invalid" : "form-control"}
                />
                <div className="invalid-feedback">
                    {errosAutenticacao.usuario}
                </div>

                <label htmlFor="senha">Senha</label>
                <input
                    type="password"
                    name="senha"
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className={errosAutenticacao.senha ? "form-control is-invalid" : "form-control"}
                />
                <div className="invalid-feedback">
                    {errosAutenticacao.senha}
                </div>

            </fieldset>

            <button type="submit">Logar</button>
        </form>
    );
}