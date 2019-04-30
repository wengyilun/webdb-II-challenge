
import {authMiddleware} from '../utils/auth'
import * as zooController from '../controllers/zoos'

function setupZoosRoutes(router){
	router.get('/', zooController.getZoos)
	router.get('/:id', zooController.getZoo)
	router.post('/', zooController.createZoo)
	
	router.put(
		'/:id',
		zooController.updateZoo
	)
	
	router.delete(
		'/:id',
		zooController.deleteZoo
	)
}
export default setupZoosRoutes
