const job = (token, episodes) => {
    console.log(token)
    console.log(episodes)
}

module.exports = async (token, episodes) => {
    job(token, episodes)
    return context.payload.client_payload.value
}