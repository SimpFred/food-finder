import { NextResponse } from "next/server";
import dbConnect from "middleware/db-connect";
import { findAllLocations } from "@/mongoose/locations/service";

export async function GET() {
  await dbConnect();
  const locations = await findAllLocations();
  return NextResponse.json(locations);
}
