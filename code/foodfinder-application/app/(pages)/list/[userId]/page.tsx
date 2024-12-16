import Head from "next/head";

import dbConnect from "middleware/db-connect";
import LocationsList from "@/app/components/locations-list";
import { onUserWishlist } from "@/mongoose/locations/service";

interface Params {
  params: {
    userId: string;
  };
}

const List = async ({ params }: Params) => {
  const { userId } = await params;
  await dbConnect();
  const locations = await onUserWishlist(userId);
  const title = `The Food Finder - A personal wish list`;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="The Food Finder. A personal wish list."
        />
      </Head>
      <h1>{userId ? "Your" : "A"} wish list!</h1>
      {userId && locations.length === 0 && (
        <>
          <h2>Your list is currently empty! :</h2>
          <p>Start adding locations to your wish list!</p>
        </>
      )}
      <LocationsList locations={locations} />
    </div>
  );
};

export default List;
