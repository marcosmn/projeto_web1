exports.getShares = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            shares: [
                {
                    id: 1,
                    empresa: 'Microsoft',
                    valor: 2.7
                },
                {
                    id: 2,
                    empresa: 'Amazon',
                    valor: 3.2
                }
            ]
        }
    });
};

exports.getShare = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            share: {
                id: req.params.id,
                empresa: 'Microsoft',
                valor: 2.7
            }
        }
    });
};

exports.createShare = (req, res) => {
    const shareId = Math.floor(Math.random() * 10);
    const share = Object.assign({ id: shareId }, req.body);

    res.status(200).json({
        status: 'success',
        data: {
            share
        }
    });
};

exports.updateShare = (req, res) => {
    const shareId = req.params.id;
    const share = Object.assign({ id: shareId }, req.body);

    res.status(200).json({
        status: 'success',
        data: {
            share
        }
    });
};

exports.deleteShare = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null,
    });
};