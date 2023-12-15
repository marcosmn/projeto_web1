import api from './api'

const baseAPI = {
    getShares() {
        return api.get('/aulas/')
    },
    getShare(idShare) {
        return api.get('/shares/' + idShare)
    },
    addShare(share) {
        return api.post('/shares/')
    },
    updateShare(idShare, share) {
        return api.put('/shares/' + idShare, aula)
    },
    deleteShare(idShare) {
        return api.delete('/shares/' + idShare)
    },

}

export default baseAPI;