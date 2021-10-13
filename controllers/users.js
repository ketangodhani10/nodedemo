import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {
    let user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`user ${user.firstName} saved`);
}

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUser = (req, res) => {
    //const id = req.params;
    let { id } = req.params;
    let foundedUser = users.find((c) => c.id === id);
    res.send(foundedUser);
}

export const deleteUser = (req, res) => {
    //const id = req.params;
    let { id } = req.params;
    users = users.filter((c) => c.id !== id);
    res.send(users);
}

export const patchUser = (req, res) => {
    //const id = req.params;
    let { id } = req.params;
    let { firstName, lastName, age } = req.body;
    let foundedUsers = users.find((c) => c.id === id);
    foundedUsers.firstName = firstName;
    foundedUsers.lastName = lastName;
    foundedUsers.age = age;
    res.send(users);
}

export const putUser = (req, res) => {
    //const id = req.params;
    let { id } = req.params;
    let { firstName, lastName, age } = req.body;
    let foundedUsers = users.find((c) => c.id === id);
    foundedUsers.firstName = firstName;
    foundedUsers.lastName = lastName;
    foundedUsers.age = age;
    res.send(users);
}