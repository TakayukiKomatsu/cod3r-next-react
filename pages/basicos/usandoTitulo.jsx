import Titulo from '../../components/Titulo'

function usandoTitulo() {
	return (
		<>
			<Titulo
				principal='Página de Cadastro'
				secundario='Incluir, alterar e excluir coisas'
			/>
			<Titulo
				principal='Página de Login'
				secundario='Informe o seu email e senha'
			/>
		</>
	)
}

export default usandoTitulo
