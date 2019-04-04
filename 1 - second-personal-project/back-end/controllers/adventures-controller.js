const Adventure = require('../models/adventure')
const { adventures } = require('../data/adventures')

const seedDBAdventures = (req, res) => {
    Adventure.create(adventures)
        .then(adventures => res.status(200).json({ adventures }))
        .catch(err => res.status(500).json({ Error: err.message }))
}

const allAdventures = (req, res) => {
    Adventure.find()
    .exec((err, docs) => {
        if (err) { res.status(500).json({ message: `Database error: ${err}` }) }
        else if (docs.length === 0) { res.status(404).json({ message: "Adventures Database is Empty." }) }
        else { res.status(200).json(docs) }
    })
}

const getByIdAdventure = (req, res) => {
    Adventure.findById(req.params.id)
        .exec((err, adventure) => {
            if (!adventure) {
                res.status(404).json({ message: "No Adventure Found"})
            } else if (err) {
                res.status(500).json({ message: `Database error: ${err}`})
            } else {
                res.status(200).json(adventure);
            }
        })
} 

const createAdventure = (req, res) => {
    let adventure = {...req.body}
    Adventure.create(adventure)
        .then(adventure => res.status(200).json({ adventures }))
        .catch(err => res.status (500).json({ Error}))
}

const deleteAdventure = (req, res) => {
    Adventure.findByIdAndDelete(req.params.id)
        .exec((err, adventure) => {
            if (!adventure) {
                res.status(404).json({ message: "No Adventure Found "})
            } else if (err) {
                res.status(500).json({ messsage: `Database error: ${err}`})
            } else {
                res.status(200).json(adventure)
            }
        })
}

const updateAdventure = (req, res) => {
    Adventure.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true})
        .exec((err, adventure) => {
            if(!adventure) {
                res.status(404).json({ message: "No Adventure Found"})
            } else if (err) {
                res.status(500).json({ message: `Database error: ${err}`})
            } else {
                res.status(200).json(adventure)
            }
        })
}


module.exports = {
    seedDBAdventures, allAdventures,
    getByIdAdventure,createAdventure,
    deleteAdventure, updateAdventure,
}