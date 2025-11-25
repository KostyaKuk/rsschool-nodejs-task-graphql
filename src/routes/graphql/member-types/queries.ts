import { GraphQLList, GraphQLNonNull } from 'graphql';
import { memberTypeType } from './types.js';

const getMemberTypes = {
  type: new GraphQLList(new GraphQLNonNull(memberTypeType)), 
  resolve: async (_, __, { prisma }) => {
    return await prisma.memberType.findMany(); 
  },
};

export const memberTypeQueries = {
  memberTypes: getMemberTypes,
};