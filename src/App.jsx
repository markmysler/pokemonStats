import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PokemonList from "./PokemonList";
import PokemonData from "./PokemonData";

function App() {
	const [allPokemon, setAllPokemon] = useState();
	const capitalizeFirst = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<Router>
			<>
				<h1>Pokemon</h1>
			</>
			<Routes>
				<Route
					path="/"
					element={
						<PokemonList
							setAllPokemon={setAllPokemon}
							allPokemon={allPokemon}
							capitalizeFirst={capitalizeFirst}
						/>
					}
				/>
				<Route
					path="/pokemon/:id"
					element={<PokemonData capitalizeFirst={capitalizeFirst} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
