const Candidate = require('../models/candidate')

function indexRoute(req, res, next) {
	Candidate.find(req.query).then((cand) => res.status(200).json(cand))
}

function createRoute(req, res, next) {
	Candidate.create(req.body).then((cand) => res.status(201).json(cand))
}

function showRoute(req, res, next) {
	Candidate.findById(req.params.id).then((cand) => res.status(200).json(cand)).catch(next)
}

module.exports = {
	index: indexRoute,
	create: createRoute,
	show: showRoute
}
