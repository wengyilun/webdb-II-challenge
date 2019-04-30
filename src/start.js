const express = require('express');
const helmet = require('helmet');
import detectPort from 'detect-port'
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from 'passport'
import {getLocalStrategy} from './utils/auth'
import setupRoutes from './routes'


async function startServer({port = process.env.SERVER_PORT} = {}){
	//port = port || (await detectPort(3000))
	port = 3000;
	const app = express()
	app.use(cors())
	app.use(bodyParser.json())
	app.use(passport.initialize())
	passport.use(getLocalStrategy())
	
	setupRoutes(app)
	
	app.listen(port, function() {
		console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
	});
}


// endpoints here
export default startServer
