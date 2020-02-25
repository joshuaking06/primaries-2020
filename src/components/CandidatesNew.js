import React, { useState } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import axios from 'axios'

const CandidatesNew = (props) => {
	const [ candData, setCandData ] = useState({
		name: '',
		party: '',
		color: '',
		delegates: '',
		totalVotes: '',
		views: '',
		image: '',
		age: ''
	})

	const handleChange = ({ target: { name, value } }) => {
		const newData = { ...candData, [name]: value }
		setCandData(newData)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('/api/candidates', candData).then((res) => props.history.push('/candidates'))
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Field>
				<label>Candidate's Name</label>
				<Input
					onChange={handleChange}
					placeholder="Candidate's Name"
					name="name"
					value={candData.name}
				/>
			</Form.Field>

			<Form.Field>
				<label>Image</label>
				<Input
					onChange={handleChange}
					placeholder="Candidate's Image"
					name="image"
					value={candData.image}
				/>
			</Form.Field>

			<Form.Field>
				<label>Age</label>
				<Input onChange={handleChange} placeholder="Age" name="age" value={candData.age} />
			</Form.Field>

			<Form.Field>
				<label>Party</label>
				<Input
					onChange={handleChange}
					placeholder="Party of Candidate"
					name="party"
					value={candData.party}
				/>
			</Form.Field>

			<Form.Field>
				<label>Candidate's Views</label>
				<Input
					onChange={handleChange}
					placeholder="Candidate's Views"
					name="views"
					value={candData.views}
				/>
			</Form.Field>

			<Form.Field>
				<label>Candidate's Color</label>
				<Input
					onChange={handleChange}
					placeholder="Color Label for Candidate"
					name="color"
					value={candData.color}
				/>
			</Form.Field>

			<Form.Field>
				<label>Number of Delegates</label>
				<Input
					onChange={handleChange}
					placeholder="Number of Delegates"
					name="delegates"
					value={candData.delegates}
				/>
			</Form.Field>

			<Form.Field>
				<label>Number of Total Votes</label>
				<Input
					onChange={handleChange}
					placeholder="Number of Total Votes"
					name="totalVotes"
					value={candData.totalVotes}
				/>
			</Form.Field>

			<Button type="submit">Submit</Button>
		</Form>
	)
}

export default CandidatesNew
