import { ITEMS_PER_PAGE } from "@/global/pagination";
import prisma from "@/lib/prisma";
import { Post } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  posts: Post[];
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { offset } = req.query;
    const posts = await prisma.post.findMany({
      skip: parseInt(offset as string) || 0,
      take: ITEMS_PER_PAGE,
    });

    res.status(200).json({ posts });
  } catch (e: unknown) {
    res.status(500);
  }
}