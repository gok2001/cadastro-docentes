export default function ListDocentes({
    docentes,
    handleUpdate,
    handleDelete
}) {
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Docentes cadastrados</h2>
            </div>

            <div className="table-responsive shadow-sm rounded">
                <table className="table table-striped table-hover align-middle mb-0">

                    <thead className="table-dark">
                        <tr>
                            <th>Nome</th>
                            <th>Formação</th>
                            <th>Email institucional</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {docentes.length === 0 && (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-center text-body-secondary py-4"
                                >
                                    Nenhum docente cadastrado.
                                </td>
                            </tr>
                        )}

                        {docentes.map((docente) => (
                            <tr key={docente.id}>
                                <td>{docente.nome}</td>
                                <td>{docente.formacao}</td>
                                <td>{docente.emailInstitucional}</td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => handleUpdate(docente)}
                                    >
                                        Alterar
                                    </button>
                                    <button 
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(docente.id)}
                                    >
                                        Remover
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}
