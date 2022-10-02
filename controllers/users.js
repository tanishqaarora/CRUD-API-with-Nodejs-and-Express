const { v4: uuidv4 } = require('uuid');

let users = [];

const getAllUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

const createUser = (req, res)=> {
    
    const user = req.body;

    // const userId = uuidv4(); 
    // const userWithId = { ...user, id: userId }
    // users.push(userWithId);
    // simply to write

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the username ${user.firstName} added to the database.`);
} 


// req.params helps to get the value after the /
// Example : /users/2 => req.params { id: 2 }
// router.get('/:id', (req, res)=>{
//     const { id } = req.params;
    
//     res.send(req.params);

// })

const getUser = (req, res)=>{
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    
    res.send(foundUser);
}

const deleteUser = (req, res)=>{
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`);
}

const updateUser = (req, res)=> {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    // finding the user which has to be updated
    const user = users.find((user) => user.id === id);

    // Start updating
    if(firstName) {
        user.firstName = firstName;
    }

    if(lastName) {
        user.lastName = lastName;
    }

    if(age) {
        user.age = age;
    }

    res.send(`User with the id ${id} has been updated.`);
}
module.exports = { 
    getAllUsers,
    createUser,
    getUser, 
    deleteUser, 
    updateUser
};
