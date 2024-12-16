import { authGuard } from "@/middleware/auth-guards";
import { updateWishlist } from "@/mongoose/locations/service";
import { JWT } from "next-auth/jwt";

interface UpdateWishlistInterface {
  user_id: string;
  location_id: string;
}

interface contextInterface {
  token: JWT;
}

export const locationMutations = {
  removeWishlist: async (
    _: undefined,
    param: UpdateWishlistInterface,
    context: contextInterface
  ) => {
    const guard = authGuard(param, context);
    if (guard !== true) {
      return guard;
    }

    return await updateWishlist(param.location_id, param.user_id, "remove");
  },
  addWishlist: async (
    _: undefined,
    param: UpdateWishlistInterface,
    context: contextInterface
  ) => {
    const guard = authGuard(param, context);
    if (guard !== true) {
      return guard;
    }

    return await updateWishlist(param.location_id, param.user_id, "add");
  },
};
