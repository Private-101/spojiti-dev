import { PrismaClient } from "@prisma/client";
import {faker} from "@faker-js/faker";
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const cats = ["management", "restaurant-staff", "kitchen-staff", "bar-staff", "banquet-staff", "catering", "specialty", "janitorial", "temp"];
  
  // Create categories
  const categories = await Promise.all(
    Array.from({ length: cats.length }).map((_, i) =>
      prisma.category.create({
        data: {
          title: cats[i],
          description: faker.lorem.sentence(),
        },
      })
    )
  );

  // Create Admin User
  const randomNumber = faker.number.int({min: 100, max: 10000});
  const adminEmail = `admin${randomNumber}@example.com`;
  const adminPassword = 'admin';
  const hashedPassword = await hash(adminPassword, 10);
  const adminUser = await prisma.user.create({
    data: {
      email: adminEmail,
      password_hash: hashedPassword,
      role: "admin",
      avatarUrl: faker.internet.avatar(),
      notificationsCount: 0,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      streetAddress: faker.location.streetAddress(),
      unit: faker.location.secondaryAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
    },
  });

  // Create guest users
  const guests = await Promise.all(
    Array.from({ length: faker.number.int({min: 1, max: 5}) }).map(() =>
      prisma.user.create({
        data: {
          email: faker.internet.email(),
          password_hash: faker.internet.password(),
          role: "guest",
          avatarUrl: faker.internet.avatar(),
          notificationsCount: 0,
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          streetAddress: faker.location.streetAddress(),
          unit: faker.location.secondaryAddress(),
          city: faker.location.city(),
          state: faker.location.state(),
          zipCode: faker.location.zipCode(),
        },
      })
    )
  );

  // Create employer users
  const employerNoteCount = faker.number.int({min: 1, max: 9});
  const employerJobPostCount = faker.number.int({min: 3, max: 10});
  const rndCat = () => {
    const index = faker.number.int({min: 0, max: 8});
    return { id: categories[index].id }
  };
  const rndCats = () => {
    return Array.from({ length: faker.number.int({min: 1, max: 3}) }).map(() => rndCat())
  };

  const employers = await Promise.all(
    Array.from({ length: faker.number.int({min: 3, max: 10}) }).map(() =>
      prisma.user.create({
        data: {
          email: faker.internet.email(),
          password_hash: faker.internet.password(),
          role: "employer",
          avatarUrl: faker.internet.avatar(),
          notificationsCount: employerNoteCount,
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          streetAddress: faker.location.streetAddress(),
          unit: faker.location.secondaryAddress(),
          city: faker.location.city(),
          state: faker.location.state(),
          zipCode: faker.location.zipCode(),
          notifications: {
            create: Array.from({ length: employerNoteCount }).map(() => ({
              title: faker.lorem.words(),
              description: faker.lorem.sentence(),
              is_read: faker.datatype.boolean(),
            })),
          },
          jobPosts: {
            create: Array.from({ length: employerJobPostCount }).map(() => ({
              title: faker.person.jobTitle(),
              description: faker.person.jobDescriptor(),
              is_full_time: faker.datatype.boolean(),
              start_date: faker.date.soon(),
              end_date: faker.date.future(),
              responsibilities: faker.lorem.paragraph(),
              requirements: faker.lorem.paragraph(),
              salary_range_min: Number(faker.number.int({ min: 2000, max: 5000 })),
              salary_range_max: Number(faker.number.int({ min: 5001, max: 10000 })),
              categories: {
                connect: rndCats()
              },
              // categories: rndCats(),
              // categories: {
                // connect: categories.map((category) => ({ id: category.id })), // {
                  // id: categories[Number(faker.number.int(1))].id,
                // }
                // connect: categories.map((category) => ({ id: category.id })),
              // },
            })),
          },
        },
      })
    )
  );

  // Create client users
  const clientNoteCount = faker.number.int({min: 0, max: 9});
  const clientJobApplicationCount = faker.number.int({min: 1, max: 5});
  const jobs = await prisma.jobPost.findMany();
  const clients = await Promise.all(
    Array.from({ length: faker.number.int({min: 10, max: 25}) }).map(() =>
      prisma.user.create({
        data: {
          email: faker.internet.email(),
          password_hash: faker.internet.password(),
          role: "client",
          avatarUrl: faker.internet.avatar(),
          notificationsCount: clientNoteCount,
          notifications: {
            create: Array.from({ length: clientNoteCount }).map(() => ({
              title: faker.lorem.words(),
              description: faker.lorem.sentence(),
              is_read: faker.datatype.boolean(),
            })),
          },
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          streetAddress: faker.location.streetAddress(),
          unit: faker.location.secondaryAddress(),
          city: faker.location.city(),
          state: faker.location.state(),
          zipCode: faker.location.zipCode(),
          applications: {
            create: Array.from({ length: clientJobApplicationCount }).map(() => {
              const randomJob = faker.helpers.arrayElement(jobs);
              return {
                status: faker.helpers.arrayElement(["submitted", "in review", "rejected", "accepted"]),
                job: {
                  connect: { id: randomJob.id },
                }}}),
              
            
          },
        },
      })
    )
  );

  // categories
  // adminUser
  // guests
  // clients
  // employers
  const setMessage = async () => {
    log('Generating Database Snapshot...');
    time('setMessage');
    log('Five Groups Detected...');
    log('Generating Snapshots for Each Group');
    const setCategoryMessage = async () => {
      time('setCategoryMessage');
      log('Categories:\n');
      table(categories, ['id', 'createdAt', 'updatedAt', 'title', 'description']);
      // return categories.map((cat, i) => {
        // cat is an object here...
        // console.table(cat, ['id', 'createdAt', 'updatedAt', 'title', 'description'])
      // })
    
    return timeEnd('setCategoryMessage');
    };
    const setAdminUserMessage = async () => {
      time('setAdminUserMessage');
      log('Admin User\n***** ***** ***** *****\nImportant! Must Read!\n***** ***** ***** *****');
      log(`\nAdmin Login Credentials:\n ~ Email: ${adminUser.email}\n ~ Password: admin`);
      log('*****\nRemember, all passwords will only be stored in the db after they are hashed!');
      log('Except for the current, dummy-generated data being used for development.\n*****');
      log('Admin User Properties:');
      table(adminUser);
    
    return timeEnd('setAdminUserMessage');
    };
    const setGuestsMessage = async () => {
      time('setGuestsMessage');
      log('Guest Users:\n *** NOTE ***\nGuest Users are users who signed up but have not yet paid\n for a subscription, which is required for the user to become a client or an employer.\n****** ******\n');
      table(guests);
    
    return timeEnd('setGuestsMessage');
    };

    const setClientsMessage = async () => {
      time('setClientsMessage');
      log('Clients:');
      table(clients);
    
    return timeEnd('setClientsMessage');
    };

    const setEmployersMessage = async () => {
      time('setEmployersMessage');
      log('Employers');
      table(employers);
    
    return timeEnd('setEmployersMessage');
    };

    await setCategoryMessage();
    await setAdminUserMessage();
    await setGuestsMessage();
    await setClientsMessage();
    await setEmployersMessage();

    return timeEnd('setMessage');
    // return await Promise.all(setCategoryMessage())
  };

  await setMessage().then(() => {
    log('seed completed!');

  }).catch((e) => {
    console.error(e);
    process.exit(1);
  })
};

const {log, time, table, timeEnd} = console;

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });