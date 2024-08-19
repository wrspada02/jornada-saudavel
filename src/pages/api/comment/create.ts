import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Comentario } from "@prisma/client";

type ResponseData = {
    comment: Comentario;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    try {
      const comment: string = req.body;
      
      const createdComment = await prisma.comentario.create({ data: JSON.parse(comment) });

      res.status(200).json({ comment: createdComment });
    } catch (e: unknown) {
      res.status(500);
    }
  }