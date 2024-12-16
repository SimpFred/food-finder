import Head from "next/head";
import { LocationType } from "mongoose/locations/schema";
import LocationsList from "./components/locations-list";
import dbConnect from "middleware/db-connect";
import { findAllLocations } from "@/mongoose/locations/service";

export default async function Home() {
  await dbConnect();
  const locations: LocationType[] = await findAllLocations();
  const title = `The Food Finder - Home`;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="The Food Finder - Home" />
      </Head>

      <h1>Welcome to the Food Finder!</h1>
      <LocationsList locations={locations} />
    </div>
  );
}
