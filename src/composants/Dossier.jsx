import "./ListeDossiers"
import "./Dossier.scss"
import { MdSort } from 'react-icons/md';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';

export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier" style={{backgroundColor:couleur}}>
      <div className="couverture" >
        <span className="deplacer"><MdSort size={50}/></span>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié: {dateModif}</p>
      </div>
      <button><MoreVertTwoToneIcon/></button>
    </article>
  );
}