const Model = require('../models/model');

module.exports.getTask = async (req, res) => {
    const task = await Model.find();
    res.send(task);
}
module.exports.saveTask = async (req, res) => {
    const { text } = req.body;

    Model
        .create({text})
        .then(() => res.set(201).send('Added Successfully...'))
        .catch((err) => console.log(err))
}

module.exports.deleteTask = (req, res) => {
    const { _id } = req.body;

    Model
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send('Deleted Successfully...'))
        .catch((err) => console.log(err))
}

module.exports.updateTask = (req, res) => {
    const { _id, text } = req.body;

    Model
        .findByIdAndUpdate(_id, {text})
        .then(() => res.set(201).send('Updated Successfully...'))
        .catch((err) => console.log(err))
}
