const Element = require('../models/element')
const { elements } = require('../data/elements')

const seedDBElements = (req, res) => {
    Element.create(elements)
        .then(elements => res.status(200).json({ elements }))
        .catch(err => res.status(500).json({ Error: err.message }))
}

const allElements = (req, res) => {
    Element.find()
        .exec((err, docs) => {
            if (err) { res.status(500).json({ message: `Database error: ${err}` }) }
            else if (docs.length === 0) { res.status(404).json({ message: "Elements Database is Empty." }) }
            else { res.status(200).json(docs) }
        })
}

const getByIdElement = (req, res) => {
    Element.findById(req.params.id)
        .exec((err, element) => {
            if (!element) {
                res.status(404).json({ message: "No Element Found"})
            } else if (err) {
                res.status(500).json({ message: `Database error: ${err}`})
            } else {
                res.status(200).json(element);
            }
        })
}

const createElement = (req, res) => {
    let element = {...req.body}
    Element.create(element)
        .then(elements => res.status(200).json({ elements }))
        .catch(err => res.status (500).json({ Error}))
}

const deleteElement = (req, res) => {
    Element.findByIdAndDelete(req.params.id)
        .exec((err, element) => {
            if (!element) {
                res.status(404).json({ message: "No Element Found "})
            } else if (err) {
                res.status(500).json({ messsage: `Database error: ${err}`})
            } else {
                res.status(200).json(element)
            }
        })
}

const updateElement = (req, res) => {
    Element.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true})
        .exec((err, element) => {
            if(!element) {
                res.status(404).json({ message: "No Element Found"})
            } else if (err) {
                res.status(500).json({ message: `Database error: ${err}`})
            } else {
                res.status(200).json(element)
            }
        })
}


module.exports = {
    seedDBElements, allElements,
    getByIdElement, createElement,
    deleteElement, updateElement,
}