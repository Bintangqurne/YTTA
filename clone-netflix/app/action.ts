"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";

export async function addWatchList(formData: FormData) {
  "use server";
  const pathName = formData.get("pathname") as string;
  const movieId = formData.get("movieId");
  const session = await getServerSession(authOptions);

  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathName);
}

export async function deleteFromWatchList(formData: FormData) {
  "use server";

  const watchListId = formData.get("watchListId") as string;
  const pathName = formData.get("pathname") as string;

  const data = await prisma.watchList.delete({
    where: {
      id: watchListId,
    },
  });
  revalidatePath(pathName);
}
