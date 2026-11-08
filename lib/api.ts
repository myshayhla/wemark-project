import type { XschoolData } from "@/types/xcschool";

export async function getXschoolData(): Promise<XschoolData> {
  const apiUrl = process.env.API_URL;

  if (!apiUrl) {
    throw new Error("API_URL is not defined");
  }

  const response = await fetch(apiUrl, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json() as Promise<XschoolData>;
}
