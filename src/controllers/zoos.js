import db from '../utils/db'

// async function authorize(req, res, next) {
// 	const {authorId} = await db.getPost(req.params.id)
// 	if (req.user.id === authorId) {
// 		return next()
// 	} else {
// 		return res.status(403).send()
// 	}
// }

export const getZoos = async (req, res, next) => {
	 	 db('zoos')
		.then(zoos  => {
			res.status(200).json(zoos)
		})
		.catch(err => {
		    res.status(500).json({ error: err })
		})
}

export const getZoo = async (req, res, next) => {
	db('zoos')
	    .where({id:req.params.id})
	    .first()
		.then(zoo  => {
			if(zoo){
				res.status(200).json(zoo)
			}else{
				res.status(404).json({message: 'zoo not found'})
			}
		})
		.catch(err => {
		    res.status(500).json({ error: err })
		})
}

export const createZoo = async (req, res, next) => {
	 if(!req.body.name){
		res.status(400).json({message: 'Name cannot be blank'})
	 }
  	 db.insert(req.body, ['id'])
		.into('zoos')
		.then(ids  => {
			db('zoos')
				.where({id:ids[0]})
				.first()
				.then(zoo =>{
					 res.status(201).json(zoo)
				})
				.catch(err => {
					res.status(500).json(err);
				});
		})
		.catch(err => {
			res.status(500).json({ error: err })
		})
		
}

export const updateZoo = async (req, res, next) => {
	if(!req.body.name || !req.params.id){
		res.status(400).json({message: 'Name and id cannot be blank'})
	}
	db('zoos')
		.where({id:req.params.id})
		.update(req.body)
		.then(count => {
			if (count > 0) {
				res.status(200).json({
					message: `${count} ${count > 1 ? 'records' : 'record'} updated`,
				});
			} else {
				res.status(404).json({ message: 'zoos does not exist' });
			}
		})
		.catch(err => {
			res.status(500).json(err);
		});
}

export const deleteZoo = async (req, res, next) => {
	if(!req.params.id){
		res.status(400).json({message: 'id cannot be blank'})
	}
	db('zoos')
		.where({id:req.params.id})
		.del()
		.then(count => {
			if (count > 0) {
				res.status(200).json({
					message: `${count} ${count > 1 ? 'records' : 'record'} deleted`,
				});
			} else {
				res.status(404).json({ message: 'zoos does not exist' });
			}
		})
		.catch(err => {
			res.status(500).json(err);
		});
}
