import mongoose, { model } from "mongoose";
import { LocationSchema, LocationType } from "./schema";

export default mongoose.models.locations ||
  model<LocationType>("locations", LocationSchema);
