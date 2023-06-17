import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";

import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export async function updateUserById(id: User["id"], updates: Partial<User>) {
  return prisma.user.update({where: {id}, data: updates});
}

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: User["email"]) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(email: User["email"], password: User["password_hash"]) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      password_hash: hashedPassword,
    },
  });
}

export async function deleteUserById(id: User["id"]) {
  return prisma.user.delete({ where: { id } });
};

export async function deleteUserByEmail(email: User["email"]) {
  return prisma.user.delete({ where: { email } });
};

export async function verifyLogin(
  email: User["email"],
  password: User["password_hash"]
) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email }
  });

  if (!userWithPassword || !userWithPassword.password_hash) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.password_hash
  );

  if (!isValid) {
    return null;
  }

  const { password_hash: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
};
