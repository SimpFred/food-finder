import { locationMutations } from "./location/mutations";
import { locationQueries } from "./location/queries";

export const resolvers = {
  Query: {
    ...locationQueries,
  },
  Mutation: {
    ...locationMutations,
  },
};
