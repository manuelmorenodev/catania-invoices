module.exports = async (request, reply) => {
  console.log(request.auth)
  reply.send(request.auth)
}
