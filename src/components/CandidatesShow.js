import React, { useState, useEffect } from 'react'
import { Container, Button } from 'semantic-ui-react'
import axios from 'axios'

const CandidatesShow = (props) => {
	const [ candidate, setCandidate ] = useState()
	useEffect(() => {
		axios.get(`/api/candidates/${props.match.params.id}`).then((res) => {
			setCandidate(res.data)
		})
	})

	if (!candidate) return null
	return (
		<Container>
			<div>{candidate.name}</div>
		</Container>
	)
}

export default CandidatesShow
