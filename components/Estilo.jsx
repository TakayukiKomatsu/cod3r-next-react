function Estilo(props) {
	return (
		<div>
			<h1
				style={{
					backgroundColor: props.numero >= 0 ? '#2d2' : '#d22',
					color: props.color,
					textAlign: props.direita ? 'right' : 'left'
				}}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut
				veritatis facere, nihil, laudantium ullam ea doloribus, incidunt sunt
				nesciunt similique veniam? Maxime, rerum autem! Qui praesentium mollitia
				numquam dolores. Eos cum fuga voluptatum excepturi beatae
			</h1>

			<h2 className={props.numero >= 0 ? 'azul' : 'vermelho'}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit aliquam
				hic consequatur doloribus tempore aspernatur ex, labore id aliquid. Esse
				a incidunt quas numquam? Sit eos iste delectus deserunt fugiat!{' '}
			</h2>
		</div>
	)
}

export default Estilo
