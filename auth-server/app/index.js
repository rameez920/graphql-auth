const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type User {
  id: ID! @id
  email: String! @unique
  password: String!
}

type AuthPayload {
  token: String
  user: User
}
`
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
