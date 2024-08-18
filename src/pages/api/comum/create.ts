import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Usuario } from "@prisma/client";
import { redirect } from "next/navigation";

type ResponseData = {
    user: Usuario;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    if (req.method !== 'POST') return;

    try {
      const user: string = req.body;
      
      const createdUser = await prisma.usuario.create({ data: JSON.parse(user) });
  
      res.status(200).json({ user: createdUser });
    } catch (e: unknown) {
      res.status(500);
    }
  }