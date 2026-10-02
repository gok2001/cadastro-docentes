export default function Menu({
    activeScreen,
    setActiveScreen,
    handleNovoCadastro
}) {
    return (
        <nav className="navbar navbar-expand bg-dark mb-4" data-bs-theme="dark">
            <div className="container">
                <div className="navbar-nav">

                    <button
                        className={`nav-link ${activeScreen === "inicio" ? "active" : ""}`}
                        onClick={() => setActiveScreen("inicio")}
                    >
                        Início
                    </button>

                    <button
                        className={`nav-link ${activeScreen === "cadastrar" ? "active" : ""}`}
                        onClick={handleNovoCadastro}
                    >
                        Cadastrar
                    </button>

                    <button
                        className={`nav-link ${activeScreen === "listar" ? "active" : ""}`}
                        onClick={() => setActiveScreen("listar")}
                    >
                        Listar
                    </button>

                </div>
            </div>
        </nav>
    );
}