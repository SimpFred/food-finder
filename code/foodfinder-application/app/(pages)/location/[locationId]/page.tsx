import Head from "next/head";
import dbConnect from "middleware/db-connect";
import { findLocationsById } from "@/mongoose/locations/service";
import LocationDetail from "@/app/components/location-details";

interface Params {
  params: {
    locationId: string;
  };
}

const Location = async ({ params }: Params) => {
  const { locationId } = await params;

  await dbConnect();
  const locations = await findLocationsById([locationId]);
  const location = locations.length > 0 ? locations[0] : null;
  const plainLocation = JSON.parse(JSON.stringify(location));

  if (!location) {
    return <div>Location not found</div>;
  }

  const title = `The Food Finder - ${location.name}`;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`The Food Finder. Details for ${location.name}`}
        />
      </Head>
      <h1>{`${location.name}`}</h1>
      <LocationDetail location={plainLocation} />
    </div>
  );
};

export default Location;
