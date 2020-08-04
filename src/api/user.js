export const getScore = (user) =>
    (user.questions.length + Object.keys(user.answers).length)