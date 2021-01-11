module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');

        db.create_product()
            .then(product => res.status(200).send(product))
            .catch(err => res.status(500).send(err))
    },
    getOne: (req, res) => {
        const db = req.app.get('db');

        db.read_product()
            .then(product => res.status(200).send(product))
            .catch(err => res.status(500).send(err))
    },
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.read_products()
            .then(product => res.status(200).send(product))
            .catch(err => res.status(500).send(err))
    },
    update: (req, res) => {
        const { id } = req.params,
            { description } = req.body;
        const db = req.app.get('db')

        db.update_product(description, id)
            .then(product => res.status(200).send(product))
            .catch(err => res.status(500).send(err));
    },
    delete: (req, res) => {
        const { id } = req.params;

        const db = req.app.get('db')

        db.delete_product(id)
            .then(product => res.status(200).send(product))
            .catch(err => res.status(500).send(err));
    }
}