import { GraphQLSchema } from 'graphql';
import { query } from './queries/queries.js';
import { mutation } from './mutations/mutations.js';

export const schema = new GraphQLSchema({
  query, 
  mutation,
});