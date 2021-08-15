function repeticao1() {
	const listaAprovados = [
		'João',
		'Maria',
		'Ana',
		'Bia',
		'Carlos',
		'Daniel',
		'Laura'
	]
	return (
		<ul>
			{listaAprovados.map((nome, index) => {
				return <li key={index}>{nome}</li>
			})}
		</ul>
	)
}

export default repeticao1
