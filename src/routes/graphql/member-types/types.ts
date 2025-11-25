import { GraphQLEnumType, GraphQLObjectType, GraphQLFloat, GraphQLInt, GraphQLNonNull } from 'graphql';

export const memberTypeIdEnum = new GraphQLEnumType({
  name: 'MemberTypeId',
  values: {
    BASIC: { value: 'BASIC' },
    BUSINESS: { value: 'BUSINESS' },
  },
});

export const memberTypeType = new GraphQLObjectType({
  name: 'MemberType', 
  fields: () => ({
    id: {
      type: memberTypeIdEnum, 
    },
    discount: {
      type: new GraphQLNonNull(GraphQLFloat), 
    },
    postsLimitPerMonth: {
      type: new GraphQLNonNull(GraphQLInt), 
    },
  }),
});