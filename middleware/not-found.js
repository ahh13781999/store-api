const notFound = (req,res) => res.status(404).send("The route doesn't exists");

module.exports = notFound;