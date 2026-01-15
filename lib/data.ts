import { prisma } from "@/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";

export async function getProjects(limit?: number) {
  noStore();
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: limit,
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function createProject(data: {
  title: string;
  description: string;
  imageUrl: string;
  gitUrl?: string;
  liveUrl?: string;
  category: string;
  technologies: string[];
  tags: string[];
  userId: string;
}) {
  try {
    const project = await prisma.project.create({
      data,
    });
    return project;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
