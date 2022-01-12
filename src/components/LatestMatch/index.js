// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competing,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails

  return (
    <div className="latest-match-card">
      <div className="match-details">
        <p className="competing-head">{competing}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competing}`}
        className="competing-logo"
      />
      <div className="innings-details">
        <p className="first">First Innings</p>
        <p className="first-r">{firstInnings}</p>
        <p className="first">Second Innings</p>
        <p className="first-r">{secondInnings}</p>
        <p className="first">Man he Match</p>
        <p className="first-r">{manOfTheMatch}</p>
        <p className="first">umpires</p>
        <p className="first-r">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
