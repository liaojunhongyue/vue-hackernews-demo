import { queryQuestions } from '../api/query'

export default {
  QUERY_QUESTIONS_DATA: ({ commit }) => {
    return queryQuestions().then((res) => {
      commit('SET_QUESTIONS_DATA', res.data)
    })
  }
}
