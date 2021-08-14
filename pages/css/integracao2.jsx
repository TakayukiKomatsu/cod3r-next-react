import styles from './integracao2.module.css'

function integracao() {
	return (
		<div id={styles.integracao2}>
			<div className={styles.vermelha}>Texto #1</div>
			<div className={styles.azul}>Texto #2</div>
			<div className={styles.branca}>Texto #3</div>
		</div>
	)
}

export default integracao
