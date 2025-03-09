import { fakerES as faker } from "@faker-js/faker";

export const generateMockPets = (quantity) => {
    const mockPets = [];
    
    for(let i = 0; i < quantity; i++) {
        mockPets.push({
            name: faker.person.firstName(),
            specie: faker.animal.type(), 
            birthDate: faker.date.birthdate({ 
                min: 1, 
                max: 15, 
                mode: 'age' 
            }),
            adopted: false,
            owner: null,
            image: faker.image.urlLoremFlickr({ category: 'animals' }),
            _id: faker.database.mongodbObjectId()
        });
    }
    return mockPets;
}