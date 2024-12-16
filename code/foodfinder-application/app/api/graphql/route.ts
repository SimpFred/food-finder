import dbConnect from "@/middleware/db-connect";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { resolvers } from "graphql/resolvers";
import { typeDefs } from "graphql/schema";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextApiRequest) => {
    const token = await getToken({ req });
    if (!token) {
      throw new Error("Authentication token is missing");
    }
    return { token };
  },
});

// Named export för OPTIONS (hanterar CORS-preflight)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: "POST",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  });
}

// Named export för POST (GraphQL endpoint)
export const POST = async (req: Request) => {
  // Koppla till databasen
  await dbConnect();

  // Hantera förfrågan via Apollo-server
  return handler(req);
};
