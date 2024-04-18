const RepositorioExercicio= require("../repositories/pessoa.js")

const repositorio = new RepositorioExercicio()
class ServicoExercicio {

    async PegarUm(id){
      if(!id || isNaN(id)) {
        throw new Error("Favor informe corretamente o id.")
      }
      return repositorio.PegarUm(id)
    }

    async PegarTodos(){

      const result = await repositorio.PegarTodos()
      return result.length > 0 ? result : "Nenhum registro encontrado."
    }

    async Adicionar(pessoa){
      if(!pessoa) {
        throw new Error("Favor preencher o pessoa.")
      } else if(!pessoa.nome) {
        throw new Error("Favor preencher o nome.")
      } else if(!pessoa.email) {
        throw new Error("Favor preencher o email.")
      } else if(!pessoa.senha) {
        throw new Error("Favor preencher o senha.")
      }

      return repositorio.Adicionar(pessoa)
    }

    async Alterar(id, pessoa){
      if(!id || isNaN(id)) {
        throw new Error("Favor informar corretamente o id.")
      }

      return repositorio.Alterar(id,pessoa)
    }

    async Deletar(id){
      if(!id || isNaN(id)) {
        throw new Error("Favor informar corretamente o id.")
      }
      const pessoa = await repositorio.PegarUm(id)
      
      if(!pessoa) {
        throw new Error("Pessoa não encontrada.")
      }

      return repositorio.Deletar(id)
    }

}
module.exports = ServicoExercicio