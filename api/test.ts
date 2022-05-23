import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async (request: VercelRequest, response: VercelResponse) => {
  // console.log(request);

  console.log(request);
  response.status(200).send("Hello World!");
};
