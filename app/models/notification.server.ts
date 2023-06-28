import type { Notification, User } from "@prisma/client";

import { prisma } from "~/services/db.server";
import { getUserById, updateUserById } from '~/models/user.server';

export type { Notification } from "@prisma/client";

/*
type Notification = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string;
    is_read: boolean;
    userId: string;
}
*/

export async function getNotificationCount(userId: User['id']) {
    // const user = await getUserById(userId);
    // if (!user) return null;
    // if (user.notificationsCount === 0) return null;
    
  return prisma.notification.count({where: {userId}})
};

// TODO: might be unnecessary to have other get functions. 
//filters can be applied to data returned from here. 
//Also, the user.noteCount param is probably unnecessary since 
//prisma has a count function that is filtered by user id.
export async function getAllNotifications(userId: User['id']) {
    const user = await getUserById(userId);
    if (!user) return null;
    if (user.notificationsCount === 0) return null;
    
  return prisma.notification.findMany({where: {userId}});
};

export async function getAllUnreadNotifications(userId: User['id']) {
    const allNotes = await getAllNotifications(userId);
    if (!allNotes) return null;
    return allNotes.filter((note) => note.is_read === false);
    // return prisma.notification.findMany({where: {userId, is_read: false}});
  };

  async function addNoteCountToUser(id: User['id']) {
    const prev = await getNotificationCount(id);
    if (!prev) return null;
    return updateUserById(id, {notificationsCount: prev + 1})
  };

export async function createNotification(userId: User["id"], note: Pick<Notification, 'title' | 'description'>) {
    const updates = await addNoteCountToUser(userId);
    if (!updates) return null;
  return prisma.notification.create({
    data: {
      ...note,
      userId,
      is_read: false
    },
  });
}

export async function deleteNotificationById(id: Notification["id"]) {
  return prisma.notification.delete({ where: { id } });
}

