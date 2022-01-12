// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
  const statusChange = matchStatus === 'Won' ? 'green' : ''

  return (
    <li className="card">
      <img
        src={competingTeamLogo}
        alt={`latest match${competingTeam}`}
        className="logo"
      />
      <p className="com-head">{competingTeam}</p>
      <p className="com-para">{result}</p>
      <p className={`status ${statusChange}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
