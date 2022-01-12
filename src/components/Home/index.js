// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.renderOfIplTeams()
  }

  renderOfIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamData: updatedData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state

    return (
      <div className="container">
        <div className="detail-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="logo"
            alt="ipl logo"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="team-card-container">
            {teamData.map(each => (
              <TeamCard key={each.id} teamItem={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
