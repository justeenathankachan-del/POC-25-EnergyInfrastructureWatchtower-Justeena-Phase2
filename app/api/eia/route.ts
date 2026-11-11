import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.EIA_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "EIA API key is missing." },
      { status: 500 }
    );
  }

  const url = new URL(
    "https://api.eia.gov/v2/electricity/electric-power-operational-data/data/"
  );

  url.searchParams.set("api_key", apiKey);
  url.searchParams.set("frequency", "annual");
  url.searchParams.set("data[0]", "generation");
  url.searchParams.set("facets[location][]", "US");
  url.searchParams.set("facets[sectorid][]", "1");
  url.searchParams.set("start", "2023");
  url.searchParams.set("end", "2023");
  url.searchParams.set("length", "100");

  try {
    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, {
        status: response.status,
      });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Could not connect to EIA." },
      { status: 500 }
    );
  }
}