import React from 'react'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import { Menu, Container, Grid } from 'semantic-ui-react'
import Candidates from './components/Candidates'
import CandidatesNew from './components/CandidatesNew'
import Home from './components/Home'

import 'semantic-ui-css/semantic.min.css'
import './style.scss'

const App = (props) => {
	return (
		<BrowserRouter>
			<Container>
				<Menu>
					<Menu.Item>
						<Link to={'/'}>Home</Link>
					</Menu.Item>

					<Menu.Item>
						<Link to={'/candidates'}> View Candidates </Link>
					</Menu.Item>

					<Menu.Item>
						<Link to={'/candidates/new'}> Add Candidates</Link>
					</Menu.Item>
				</Menu>

				<Switch>
					<Route path="/candidates/new" component={CandidatesNew} />
					<Route path="/candidates" component={Candidates} />
					<Route path="/" component={Home} />
				</Switch>
			</Container>
		</BrowserRouter>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
