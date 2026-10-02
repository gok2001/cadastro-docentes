export default function Menu({
    activeScreen,
    setActiveScreen
}) {
    return (
        <nav>
            <div className="nav nav-tabs">

                <button
                    className={`nav-link ${activeScreen === "inicio" ? "active" : ""}`}
                    onClick={() => setActiveScreen("inicio")}
                >
                    Início
                </button>

                <button
                    className={`nav-link ${activeScreen === "cadastrar" ? "active" : ""}`}
                    onClick={() => setActiveScreen("cadastrar")}
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
        </nav>
    );
}