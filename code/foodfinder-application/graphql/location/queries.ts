import {
  findAllLocations,
  findLocationsById,
  onUserWishlist,
} from "@/mongoose/locations/service";

export const locationQueries = {
  allLocations: async () => {
    return await findAllLocations();
  },
  locationsById: async (_: unknown, param: { location_ids: string[] }) => {
    return await findLocationsById(param.location_ids);
  },
  onUserWishlist: async (_: unknown, param: { user_id: string }) => {
    return await onUserWishlist(param.user_id);
  },
};
