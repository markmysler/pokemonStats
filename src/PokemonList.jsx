import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
function PokemonList({ capitalizeFirst }) {
	const [pokemon, setPokemon] = useState("");
	const [search, setSearch] = useState();
	const [all, setAll] = useState();
	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
			.then((res) => res.json())
			.then((res) => setAll(res["results"]));
	}, []);
	useEffect(() => {
		setPokemon(all);
	}, [all]);
	useEffect(() => {
		if (search && search.length > 0) {
			setPokemon(all.filter((i) => i.name.includes(search)));
		} else {
			setPokemon(all);
		}
	}, [search]);
	return (
		<>
			<SearchBar setSearch={setSearch} />
			<ul className="pokemonList">
				{pokemon
					? pokemon.map((i) => (
							<li key={i.name} className="pokemonListItem">
								<Link to={"/pokemon/" + i.name}>
									{capitalizeFirst(i.name)}
								</Link>
							</li>
					  ))
					: ""}
			</ul>
		</>
	);
}

export default PokemonList;
