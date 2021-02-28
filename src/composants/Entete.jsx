import avatar from '../images/avatar.png';
import "./Entete.scss"

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Abdirahman Omar <img src={avatar} alt="Abdirahman Omar" /></div>
    </header>
  );
}