import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Nutricionista } from "@prisma/client";

type ResponseData = {
  nutricionist: Nutricionista | null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { email } = req.query;

    const nutricionist = await prisma.nutricionista.findUnique({ where: { email: email as string } });

    res.status(200).json({ nutricionist });
  } catch (e: unknown) {
    res.status(500);
  }
}