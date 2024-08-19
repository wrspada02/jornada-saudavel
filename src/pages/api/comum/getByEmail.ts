import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Usuario } from "@prisma/client";

type ResponseData = {
  user: Usuario | null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { email } = req.query;

    const user = await prisma.usuario.findUnique({ where: { email: email as string } });

    res.status(200).json({ user });
  } catch (e: unknown) {
    res.status(500);
  }
}