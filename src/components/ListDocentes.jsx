function ListDocentes({ docentes }) {
    return (
        <div className="table-responsive">
            <table className="table table-striped align-middle">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Formação</th>
                        <th>Email institucional</th>
                    </tr>
                </thead>

                <tbody>
                    {docentes.map((docente, index) => (
                        <tr key={index}>
                            <td>{docente.nome}</td>
                            <td>{docente.formacao}</td>
                            <td>{docente.emailInstitucional}</td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>
    );
}

export default ListDocentes;