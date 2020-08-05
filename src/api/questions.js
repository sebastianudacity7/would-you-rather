export const sortQuestions = (question) =>
    (question.sort((a, b) => (b.timestamp - a.timestamp)))

export const isQuestionAnswered = (q, user) =>
    (q.optionOne.votes.includes(user) || q.optionTwo.votes.includes(user))

export const mapOptions = (question, authUser) => {

    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

    const mapOption = (opId) => {
        const option = question[opId]
        return {
            text: option.text,
            selected: option.votes.includes(authUser),
            voteCount: option.votes.length,
            votePercent: Math.round(100*option.votes.length/totalVotes)
        }
    }

    const optionOne = mapOption("optionOne")
    const optionTwo = mapOption("optionTwo")

    return {
        optionOne,
        optionTwo,
        isAnswered : optionOne.selected || optionTwo.selected
    }
}