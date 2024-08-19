import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Post } from "@prisma/client";

type ResponseData = {
    post: Post;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    if (req.method !== 'POST') return;

    try {
      const post: string = req.body;
      
      const createdPost = await prisma.post.create({ data: JSON.parse(post) });
  
      res.status(200).json({ post: createdPost });
    } catch (e: unknown) {
      console.log(e);
      res.status(500);
    }
  }