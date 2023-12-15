import api from './api'

const baseAPI = {
    getAula(idAula) {
        return api.get('/aulas/' + idAula)
    },
    getAulasByModulo(idModulo) {
        return api.get('/modulos/' + idModulo + '/aulas')
    },
    addAula(idModulo, aula) {
        return api.post('/modulos/' + idModulo + '/aulas', aula)
    },
    updateAula(idAula, aula) {
        return api.put('/aulas/' + idAula, aula)
    },
    deleteAula(idAula, pin) {
        return api.delete('/aulas/' + idAula, { data: { pin: pin } })
    },
    getStatusAula() {
        return api.get('/aulas/status');
    },
    getProfessores(idAula) {
        return api.get('/aulas/'+ idAula +'/professores');
    },
    updateProfessores(idAula, professores) {
        return api.put('/aulas/'+ idAula +'/professores', professores);
    },
    getConteudos(idAula) {
        return api.get('/aulas/'+ idAula +'/conteudos');
    },
    reordenaConteudo(idAula, ReordenaDTO) {
        return api.put('/aulas/'+ idAula +'/conteudos/reordenar', ReordenaDTO)
    },
    addConteudo(idAula, conteudo) {
        return api.post('/aulas/' + idAula + '/conteudos', conteudo);
    },
    getQuestoesSearch(idAula, parametros) {
        return api.get('/aulas/' + idAula + '/questoes?'+parametros);
    },
    excluirQuestaoDaAula(idAula, idQuestao) {
        return api.delete('/aulas/' + idAula+'/questoes/'+idQuestao);
    },
    getQuestoesAulaAluno(idAula) {
      return api.get('/aulas/' + idAula + '/questoes-aluno');
    },
    getQuestoesAulaAlunoAcerto(idAula, acerto) {
        return api.get('/aulas/' + idAula + '/questoes-aluno?acerto='+acerto);
    },
    getQuestoesAulaAlunoRespondida(idAula, respondida) {
        return api.get('/aulas/' + idAula + '/questoes-aluno?respondida='+respondida);
    },
    getAulaAlunoStats(idAula) {
      return api.get('/aulas/' + idAula + '/aluno-logado/stats');
    },
    responderQuestao(idAula, idQuestao, resposta) {
        return api.post('/aulas/' + idAula + '/questoes/'+idQuestao+'/responder-questao', resposta)
    },
    getAulaStatsDados(idAula) {
        return api.get('/aulas/' + idAula + '/stats-dados')
    },
    getCapa(idAula, idEscola, tipoCapa) {
        return api.get('/aulas/' + idAula + '/url-capa?idEscola='+idEscola +'&tipoCapa='+tipoCapa.valor)
    },
    getSignedCapaURL(idAula, idEscola, tipoCapa, nome) {
        return api.get('/aulas/' + idAula + '/signed-url-capa?idEscola='+idEscola +'&tipoCapa='+tipoCapa.valor +'&nome='+nome);
    },

}

export default baseAPI;