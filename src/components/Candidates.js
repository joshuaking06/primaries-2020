import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Divider, Container, Image, Table, Header } from 'semantic-ui-react'

const Candidates = (props) => {
	const [ candidates, setCandidates ] = useState([])
	useEffect(() => {
		axios.get('/api/candidates').then((res) => {
			const data = res.data.splice(0)
			data.sort((a, b) => b.delegates - a.delegates)
			setCandidates(data)
		})
	}, [])

	if (!candidates.length) return null
	return (
		<Container fluid>
			<Divider hidden section />
			<Table id="candtable" basic="very" celled collapsing>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Candidate</Table.HeaderCell>
						<Table.HeaderCell>Delegates</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{candidates.map((cand) => (
						<Table.Row key={cand._id}>
							<Table.Cell>
								<Link to={`/candidates/${cand._id}`}>
									<Header as="h4" image>
										<Image src={cand.image} rounded size="mini" />
										<Header.Content>
											{cand.name}
											<Header.Subheader>
												{cand.totalVotes}% of Popular Vote
											</Header.Subheader>
										</Header.Content>
									</Header>
								</Link>
							</Table.Cell>
							<Table.Cell>{cand.delegates || 0}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</Container>
	)
}

export default Candidates
