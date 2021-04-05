import './Pokecard.css';

function Pokecard(props) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
  return (
    <div className="pokecard">
      <p>{props.name}</p>
      <img src={ url }></img>
      <p>Type: {props.type}</p>
      <p>EXP: {props.base_experience}</p>
    </div>
  )
}

export default Pokecard;