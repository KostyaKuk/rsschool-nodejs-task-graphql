import { GraphQLObjectType, GraphQLString } from 'graphql';

export const mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    testMutation: {
      type: GraphQLString,
      resolve: () => 'Mutation  working!'
    },
    
  },
});