export default function Login({
    usuario,
    setUsuario,
    senha,
    setSenha,
    handleLogin,
    errosAutenticacao
}) {
    return (
        <form
            className="container col-md-6 col-lg-4 mt-5"
            onSubmit={handleLogin}
        >
            <fieldset className="card shadow-sm p-4">
                <legend className="text-center mb-4 fw-bold">Login</legend>

                <label className="form-label mt-3" htmlFor="usuario">Usuário</label>
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

                <label className="form-label mt-3" htmlFor="senha">Senha</label>
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

            <button
                type="submit"
                className="btn btn-primary w-100 mt-4"
            >
                Entrar
            </button>
        </form>
    );
}