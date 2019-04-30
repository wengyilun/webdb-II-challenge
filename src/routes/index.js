import express from 'express'
// import setupUserRoutes from './users'
// import setupAuthRoutes from './auth'
import setupZoosRoutes from './zoos'

function setupRoutes(app) {
	const zooRouter = express.Router()
	setupZoosRoutes(zooRouter)
	app.use('/api/zoos', zooRouter)
}

export default setupRoutes
