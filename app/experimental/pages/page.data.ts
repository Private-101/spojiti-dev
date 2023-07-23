import {faker} from '@faker-js/faker';

export interface IUserCardProps {
    id: string;
    // ex. 123456
    name: string;
    // michael wenzler
    avatar: string;
    positions: string[]
    skills: string[];
    
};

const positions = [
    "Waiter",
    "Server",
    "Bartender",
    "Host/Hostess",
    "Chef",
    "Cook",
    "Sous Chef",
    "Dishwasher",
    "Barista",
    "Busser",
    "Food Runner",
    "Pastry Chef",
    "Line Cook",
    "Prep Cook",
    "Shift Manager",
    "Restaurant Manager",
    "Head Chef",
    "Sommelier",
    "Maître d'",
    "Food Expeditor"
  ] as const

  const skills = [
    "Customer Service",
    "Communication",
    "Time Management",
    "Teamwork",
    "Attention to Detail",
    "Multi-tasking",
    "Problem Solving",
    "Organization",
    "Menu Knowledge",
    "Food Handling",
    "Beverage Knowledge",
    "Cash Handling",
    "POS System",
    "Catering Experience",
    "Knife Skills",
    "Wine Pairing",
    "Health and Safety Regulations",
    "Food Presentation",
    "Conflict Resolution",
    "Inventory Management"
  ] as const
  
export function generateUserCard(): IUserCardProps {
    return {
        id: faker.string.nanoid(),
        name: faker.person.fullName(),
        avatar: faker.internet.avatar(),
        positions: faker.helpers.arrayElements(positions, {min: 1, max: 3}),
        skills: faker.helpers.arrayElements(skills, {min: 1, max: 3})
    }
}