import { fakerES as faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";

export const generateMockUsers = async (quantity) => {
    const encryptedPassword = await createHash('coder123');
    
    const mockUsers = [];
    
    for(let i = 0; i < quantity; i++) {
        mockUsers.push({
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: encryptedPassword,
            role: faker.helpers.arrayElement(['user', 'admin']), 
            pets: [],
            _id: faker.database.mongodbObjectId()
        });
    }
    return mockUsers;
}