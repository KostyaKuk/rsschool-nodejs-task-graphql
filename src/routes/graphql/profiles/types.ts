import { GraphQLObjectType, GraphQLBoolean, GraphQLInt, GraphQLNonNull } from "graphql";
import { UUIDType } from "../types/uuid.js";
import { memberTypeIdEnum } from "../member-types/types.js";

export const profileType = new GraphQLObjectType({
    name: 'ProfileType',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(UUIDType)
        },
        isMale: {
            type: GraphQLBoolean,
        },
        yearOfBirth: {
            type:GraphQLInt,
        },
        userId: {
            type: UUIDType,
        },
        memberTypeId: {
            type: memberTypeIdEnum,
        }
    })
})