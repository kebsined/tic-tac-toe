import { useState } from 'react';
import { PoolContainer } from './components/Pool/Pool';
import { InfoContainer } from './components/Info/Info';
import styles from './App.module.css';

export const AppContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	return (
		<>
			<AppLayout
				field={field}
				setField={setField}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
			/>
		</>
	);
};

const AppLayout = ({
	field,
	setField,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	setCurrentPlayer,
}) => {
	return (
		<>
			<InfoContainer
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
			/>
			<PoolContainer
				field={field}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
			/>
			<button className={styles.beginButton}>{`Начать заново`}</button>
		</>
	);
};
