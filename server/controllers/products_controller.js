module.exports = {
    create: (req, res, next, next) => {
        const { name, description, price, image_url } = req.body;
        const db = req.app.get('db');

        db.create_product([name, description, price, image_url])
            .then(product => res.status(200).send(product))
            .catch(err => res.status(500).send(err))
    },
    getOne: (req, res, next) => {
        const { id } = req.params;
        const db = req.app.get('db');

        db.read_product(id)
            .then(product => res.status(200).send(product))
            .catch(err => res.status(500).send(err))
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db')

        db.read_products()
            .then(product => res.status(200).send(product))
            .catch(err => res.status(500).send(err))
    },
    update: (req, res, next) => {
        const { id } = req.params,
            { description } = req.query;
        const db = req.app.get('db')

        db.update_product(description, id)
            .then(product => res.status(200).send(product))
            .catch(err => res.status(500).send(err));
    },
    delete: (req, res, next) => {
        const { id } = req.params;

        const db = req.app.get('db')

        db.delete_product(id)
            .then(product => res.status(200).send(product))
            .catch(err => res.status(500).send(err));
    }
}