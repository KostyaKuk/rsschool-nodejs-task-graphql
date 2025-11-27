import { GraphQLList, GraphQLNonNull } from 'graphql';
import { profileType } from './types.js';
import type { Profile } from '@prisma/client';
import { UUIDType } from '../types/uuid.js';
import { Context } from '../types/context.js';

const getProfiles = {
  type: new GraphQLList(new GraphQLNonNull(profileType)),
  resolve: async (_parent: unknown, _args: unknown, context: Context): Promise<Profile[]> => {
    return await context.prisma.profile.findMany();
  },
};

const getProfile = {
  type: profileType,
  args: {
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
  },
  resolve: async (
    _parent: unknown,
    args: { id: string },
    context: Context,
  ): Promise<Profile | null> => {
    const profile = await context.prisma.profile.findUnique({
      where: { id: args.id },
    });
    
    return profile;
  },
};

export const profileQueries = {
  profiles: getProfiles,
  profile: getProfile,
};