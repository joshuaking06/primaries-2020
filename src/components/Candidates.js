import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Image, Card } from 'semantic-ui-react'

const Candidates = (props) => {
	const [ candidates, setCandidates ] = useState([])
	useEffect(() => {
		axios.get('/api/candidates').then((res) => setCandidates(res.data))
	}, [])

	if (!candidates) return null
	console.log(candidates)
	return (
		<Grid columns={5}>
			{candidates.map((cand) => (
				<Grid.Column key={cand._id}>
					<Card>
						<Image src={cand.image} />
						<Card.Content>
							<Card.Header>{cand.name}</Card.Header>
							<Card.Meta>
								<span className="date">Age: {cand.age}</span>
							</Card.Meta>
						</Card.Content>
					</Card>
				</Grid.Column>
			))}
		</Grid>
	)
}

export default Candidates
