function Pokecard(props) {
  return (
  <div>
    <p>{props.name}</p>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png"></img>
    <p>Type: {props.type}</p>
    <p>EXP: {props.base_experience}</p>
  </div>
  )
}