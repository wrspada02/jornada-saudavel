import { ITEMS_PER_PAGE } from "@/global/pagination";
import prisma from "@/lib/prisma";
import { Nutricionista } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  nutricionists: Nutricionista[];
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { offset }= req.query;
    const nutricionists = await prisma.nutricionista.findMany({
      skip: parseInt(offset as string) || 0,
      take: ITEMS_PER_PAGE,
    });

    console.log(nutricionists);

    res.status(200).json({ nutricionists });
  } catch (e: unknown) {
    res.status(500);
  }
}