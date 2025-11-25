import { GraphQLObjectType } from "graphql";
import { memberTypeQueries } from "../member-types/queries.js";

export const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    memberTypes: memberTypeQueries.memberTypes
  },
});