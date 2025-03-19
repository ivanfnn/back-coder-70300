import { generateMockPets } from "../utils/mocks/petMocks.js";
import { generateMockUsers } from "../utils/mocks/userMocks.js";
import { petsService, usersService } from "../services/index.js";
import { CustomError } from "../utils/errors/customError.js";
import { ErrorCodes } from "../utils/errors/errorDictionary.js";

export const generateMockingPets = async (req, res) => {
    try {
        const mockPets = generateMockPets(100); 
        await petsService.createMany(mockPets);
        res.send({ status: "success", payload: mockPets });
    } catch (error) {
        throw new CustomError(ErrorCodes.DATABASE_ERROR, { operation: 'generateMockingPets' });
    }
};

export const generateMockingUsers = async (req, res) => {
    try {
        const mockUsers = await generateMockUsers(50); 
        await usersService.createMany(mockUsers); 
        res.send({ status: "success", payload: mockUsers });
    } catch (error) {
        throw new CustomError(ErrorCodes.DATABASE_ERROR, { operation: 'generateMockingUsers' });
    }
};

export const generateData = async (req, res) => {
    try {
        const { users = 0, pets = 0 } = req.body;
        
       
        const mockUsers = generateMockUsers(users);
        const createdUsers = await Promise.all(
            mockUsers.map(user => usersService.create(user))
        );
        
        
        const mockPets = generateMockPets(pets);
        const createdPets = await Promise.all(
            mockPets.map(pet => petsService.create(pet))
        );
        
        res.send({
            status: "success",
            payload: {
                users: createdUsers.map(u => u._id),
                pets: createdPets.map(p => p._id)
            }
        });
    } catch (error) {
        throw new CustomError(ErrorCodes.DATABASE_ERROR, { 
            operation: 'generateData',
            details: error.message 
        });
    }
};