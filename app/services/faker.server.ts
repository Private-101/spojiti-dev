import { faker } from "@faker-js/faker";

/*
    Faker Types
    readonly mersenne: MersenneModule;
    readonly random: RandomModule;
    readonly helpers: HelpersModule;
    readonly datatype: DatatypeModule;
    readonly address: AddressModule;
    readonly animal: AnimalModule;
    readonly color: ColorModule;
    readonly commerce: CommerceModule;
    readonly company: CompanyModule;
    readonly database: DatabaseModule;
    readonly date: DateModule;
    readonly finance: FinanceModule;
    readonly git: GitModule;
    readonly hacker: HackerModule;
    readonly image: ImageModule;
    readonly internet: InternetModule;
    readonly lorem: LoremModule;
    readonly music: MusicModule;
    readonly name: NameModule;
    readonly phone: PhoneModule;
    readonly science: ScienceModule;
    readonly system: SystemModule;
    readonly vehicle: VehicleModule;
    readonly word: WordModule;
    */

    export async function generate(type: string, quantity?: number) {
      return Array.from({ length: quantity ?? 1}).map(() => generateFakeData(type, quantity));
    }
export async function generateFakeData(type: string, quantity?: number) {
  switch (type) {
    case "review":
      return {
        quote: faker.lorem.sentences(faker.number.int({min: 1, max: 3})),
        imgUrl: faker.image.avatar(),
        name: faker.person.fullName(),
        jobTitle: faker.person.jobTitle()
      };
    case "employer":
    case "candidate":
    case "user":
    default:
      const userState = faker.location.state();
      return {
        id: faker.number.int({min: 10000, max: 99999}).toString(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: userState,
        zipCode: faker.location.zipCode(userState),
        bio: faker.lorem.sentences(3),
        image: faker.image.avatar(),
      };
  }
};

interface Review {
  rating: number;
  name: string;
  description: string;
  avatarUrl: string;
  jobTitle: string;
}

export function generateReviews(quantity: number): Review[] {
  return Array.from({ length: quantity ?? 1}).map(() => generateReview());
}
function generateReview(): Review {
  return {
    rating: faker.number.int({min: 0, max: 5}),
    name: faker.person.fullName(),
    description: faker.lorem.sentences(faker.number.int({min: 1, max: 3})),
    avatarUrl: faker.image.avatar(),
    jobTitle: faker.person.jobTitle()
  };
};

// TODO: Replace local User type with db model
export interface User {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  avatarUrl: string;
  fullName: string;
  // TODO: replace with actual location data
  location: string;
};
export type UserProps = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string,
  notificationsCount: number,
  location: string,
  latLng: [latitude: number, longitude: number]
};
export function generateUsers(quantity: number) {
  return Array.from({ length: quantity ?? 1}).map(() => generateAppUser());
};

export function generateAppUser(): UserProps {
/*
nearbyGPSCoordinate(coordinate?: [latitude: number, longitude: number] | undefined, radius?: number | undefined, isMetric?: boolean | undefined): [latitude: string, longitude: string]
If true assume the radius to be in kilometers. If false for miles. Defaults to false.


Generates a random GPS coordinate within the specified radius from the given coordinate.

@example

faker.location.nearbyGPSCoordinate() // [ '33.8475', '-170.5953' ]
faker.location.nearbyGPSCoordinate([33, -170]) // [ '33.0165', '-170.0636' ]
faker.location.nearbyGPSCoordinate([33, -170], 1000, true) // [ '37.9163', '-179.2408' ]
@since — 5.0.0

latitude: 40.748349,
    longitude: -74.033814,
  */
  const geo = faker.location.nearbyGPSCoordinate({origin: [40.748349, -74.033814], radius: 10, isMetric: false});
  const userCity = faker.location.city();
  const userState = faker.location.state();
  const userZipCode = faker.location.zipCode(userState);

  return {
    id: faker.number.int({min: 10000, max: 99999}).toString(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
    notificationsCount: faker.number.int({min: 0, max: 9}),
    // TODO: replace with actual location data
    location: `${userCity}, ${userState}, ${userZipCode}`,
    latLng: [geo[0], geo[1]]
        
    // address: faker.location.streetAddress(),
    // city: faker.location.city(),
    // state: userState,
    // zipCode: faker.location.zipCode(userState),
    // bio: faker.lorem.sentences(3),
  }
};
