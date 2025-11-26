import { GraphQLList, GraphQLNonNull } from 'graphql';
import { memberTypeIdEnum, memberTypeType } from './types.js';
import type { MemberType } from '@prisma/client';
import type { Context } from '../types/context.js';

const getMemberTypes = {
  type: new GraphQLList(new GraphQLNonNull(memberTypeType)), 
  resolve: async (_parent: unknown, _args: unknown, context: Context): Promise<MemberType[]> => {
    return await context.prisma.memberType.findMany();
  },
};

const getMemberType = {
  type: memberTypeType, 
  args: {
    id: {
      type: new GraphQLNonNull(memberTypeIdEnum)
    },
  },
  resolve: async (
    _parent: unknown,
    args: { id: 'BASIC' | 'BUSINESS' },
    context: Context,
  ): Promise<MemberType | null> => {
    return await context.prisma.memberType.findUnique({
      where: { id: args.id },
    });
  },
};

export const memberTypeQueries = {
  memberTypes: getMemberTypes,
  memberType: getMemberType
};3