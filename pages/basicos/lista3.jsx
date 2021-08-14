function gerarLista(final = 10) {
	const lista = []
	for (let i = 0; i <= final; i++) {
		lista.push(<span key={i}>{i},</span>)
	}
	return lista
}

function lista3() {
	return <div>{gerarLista()}</div>
}

export default lista3
