exports.getUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            alunos: [
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
            aluno: {
                id: req.params.id,
                nome: 'Fulano Silva',
                idade: 27
            }
        }
    });
};

exports.createUser = (req, res) => {
    const alunoId = Math.floor(Math.random() * 10);
    const aluno = Object.assign({ id: alunoId }, req.body);

    res.status(200).json({
        status: 'success',
        data: {
            aluno
        }
    });
};

exports.updateUser = (req, res) => {
    const alunoId = req.params.id;
    const aluno = Object.assign({ id: alunoId }, req.body);

    res.status(200).json({
        status: 'success',
        data: {
            aluno
        }
    });
};

exports.deleteUser = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null,
    });
};