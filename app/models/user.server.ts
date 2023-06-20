import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";

import { prisma } from "~/db.server";
import { matchSorter } from "match-sorter";

/**
 * This is just matching a hard-coded list of values, but often you'd be
 * querying your database for a set of records. If you're using prisma with
 * postgres, you can use "fulltext" to let the database make it really fast for
 * you:
 * https://www.prisma.io/docs/concepts/components/prisma-client/full-text-search
 */
export async function searchLangs(query: string) {
  // artificially slowed down and chaotic where some requests start earlier but
  // land later, this is a condition many apps don't consider but Remix handles
  // for you automatically. Open the network tab and watch as Remix
  // automatically cancels the requests as they're interrupted.
  await new Promise((res) => setTimeout(res, Math.random() * 1000));
  return matchSorter(langs, query, { keys: ["alpha2", "name"] });
}
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

export async function createUser(email: User["email"], password: User["password_hash"], role: User['role']) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      password_hash: hashedPassword,
      role
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
