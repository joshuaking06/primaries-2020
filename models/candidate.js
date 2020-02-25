const mongoose = require('mongoose')

const candidateSchema = new mongoose.Schema({
	name: { type: String, required: true },
	party: { type: String, required: true },
	delegates: { type: Number, required: true },
	totalVotes: { type: Number, required: true },
	color: { type: String, required: true },
	views: { type: String, required: true },
	age: { type: Number, required: true },
	image: { type: String }
})

module.exports = mongoose.model('Candidate', candidateSchema)
