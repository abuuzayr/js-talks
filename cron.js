const job = (github) => {
    console.log(github)
}

module.exports = ({github, context}) => {
    job(github)
    return context.payload.client_payload.value
}