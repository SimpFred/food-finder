import gql from "graphql-tag";

import locationTypeDefsCustom from "./location/custom.gql";
import locationTypeDefsQueries from "./location/queries.gql";
import locationTypeDefsMutations from "./location/mutations.gql";

export const typeDefs = gql`

    ${locationTypeDefsCustom}

    type Query {
        ${locationTypeDefsQueries}
    }

    type Mutation {
        ${locationTypeDefsMutations}
    }

`;
