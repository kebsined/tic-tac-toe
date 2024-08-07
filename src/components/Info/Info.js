import styles from './Info.module.css';
export const InfoContainer = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<InfoLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
	);
};

const InfoLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<h1 className={styles.info}>{`${isDraw ? 'Ничья' : ''} ${
			!isDraw && !isGameEnded
				? `Ходит ${currentPlayer}`
				: `Победа: ${currentPlayer}`
		}`}</h1>
	);
};
