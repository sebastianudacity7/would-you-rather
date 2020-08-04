export const sortQuestions = (question) =>
    (question.sort((a, b) => (b.timestamp - a.timestamp)))

export const isQuestionAnswered = (q, user) =>
    (q.optionOne.votes.includes(user) || q.optionTwo.votes.includes(user))