exports.getUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            users: [
                {
                    id: 1,
                    nome: 'Fulano Silva',
                    idade: 27
                },
                {
                    id: 2,
                    nome: 'Ciclano Almeida',
                    idade: 32
                }
            ]
        }
    });
};

exports.getUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            user: {
                id: req.params.id,
                nome: 'Fulano Silva',
                idade: 27
            }
        }
    });
};

exports.createUser = (req, res) => {
    const userId = Math.floor(Math.random() * 10);
    const user = Object.assign({ id: userId }, req.body);

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const user = Object.assign({ id: userId }, req.body);

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
};

exports.deleteUser = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null,
    });
};