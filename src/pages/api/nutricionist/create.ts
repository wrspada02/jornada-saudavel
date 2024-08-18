import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Nutricionista } from "@prisma/client";

type ResponseData = {
    user: Nutricionista;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    if (req.method !== 'POST') return;

    try {
      const user: string = req.body;
      
      const createdUser = await prisma.nutricionista.create({ data: JSON.parse(user) });
  
      res.status(200).json({ user: createdUser });
    } catch (e: unknown) {
      res.status(500);
    }
  }