// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamItem} = props
  const {id, name, teamImageUrl} = teamItem

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-head">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
