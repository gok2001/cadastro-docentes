function ListDocentes({
    docentes,
    handleUpdate,
    handleDelete
}) {
    return (
        <div className="table-responsive">
            <table className="table table-striped align-middle">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Formação</th>
                        <th>Email institucional</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {docentes.map((docente) => (
                        <tr key={docente.id}>
                            <td>{docente.nome}</td>
                            <td>{docente.formacao}</td>
                            <td>{docente.emailInstitucional}</td>
                            <td>
                                <button onClick={() => handleUpdate(docente)}>Alterar</button>
                                <button onClick={() => handleDelete(docente.id)}>Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default ListDocentes;
