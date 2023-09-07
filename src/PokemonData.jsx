import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
function PokemonData({ capitalizeFirst }) {
	const [userPokemon, setUserPokemon] = useState();
	const [abilities, setAbilities] = useState();
	const { id } = useParams();
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	useEffect(() => {
		try {
			fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
				.then((res) => res.json())
				.then((res) => setUserPokemon(res));
		} catch (error) {
			console.log(error);
		}
	}, [id]);
	useEffect(() => {
		if (userPokemon !== undefined) {
			setAbilities(userPokemon.abilities);
		}
	}, [userPokemon]);
	return (
		<>
			<button onClick={goBack}>🏠 Home</button>
			<h2>{capitalizeFirst(id)}</h2>
			<img
				src={userPokemon ? userPokemon["sprites"]["front_default"] : ""}
				alt="img pokemon"
				className="pokemonImg"
			/>
			{abilities !== undefined ? (
				<>
					<div className="habilidadesDiv">
						<h3 className="subtitulo">Habilidades:</h3>
						<ul className="abilityList">
							{abilities.map((i) => {
								return (
									<li
										className="abilityListItem"
										key={i.ability.name}
									>
										{capitalizeFirst(i.ability.name)}
									</li>
								);
							})}
						</ul>
					</div>
					<div className="infoDiv">
						<h3 className="subtitulo">XP inicial:</h3>
						<p className="xpInicial">
							{userPokemon ? userPokemon["base_experience"] : ""}
						</p>
					</div>
					<div className="infoDiv">
						<h3 className="subtitulo">HP inicial:</h3>
						<p className="vida">
							{userPokemon
								? userPokemon["stats"][0]["base_stat"]
								: ""}
						</p>
					</div>
					<div className="infoDiv">
						<h3 className="subtitulo">Daño inicial:</h3>
						<p className="ataqueInicial">
							{userPokemon
								? userPokemon["stats"][1]["base_stat"]
								: ""}
						</p>
					</div>
					<div className="infoDiv">
						<h3 className="subtitulo">Defensa inicial:</h3>
						<p className="defensaInicial">
							{userPokemon
								? userPokemon["stats"][2]["base_stat"]
								: ""}
						</p>
					</div>
					<div className="infoDiv">
						<h3 className="subtitulo">Altura:</h3>
						<p className="altura">
							{userPokemon ? userPokemon["height"] : ""}
						</p>
					</div>
				</>
			) : (
				""
			)}
		</>
	);
}

export default PokemonData;
