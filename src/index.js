import { GraphQLServer } from 'graphql-yoga';

// type definitions (schema)
const typeDefs = `
    type Query {
        name: String!
        user: User!
        greeting(name: String): String!
    }

    type User {
        id: String!
        name: String!
        email: String!
        age: Int
    }
`

// resolvers
const resolvers = {
    Query: {
        name() {
            return 'Akshay Arora'
        },
        user() {
            return {
                id: '12345',
                name: 'Akshay',
                email: 'akshay@xyz.com'
            }
        },
        greeting(parent, args, ctx, info) {
            if(args.name) {
                return `Hello, ${args.name}!`;
            }
            return 'Hello!';
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log('The server is up!');
})