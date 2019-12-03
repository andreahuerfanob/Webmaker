const express = require("express"); 
const router = express.Router();

const users = const [users, setUsers] = useState([
    {
      _id: "123",
      username: "alice",
      password: "alice",
      firstName: "Alice",
      lastName: "Wonder",
      email: "alice@gmail.com"
    },
    {
      _id: "234",
      username: "bob",
      password: "bob",
      firstName: "Bob",
      lastName: "Marley",
      email: "bob@whatever.com"
    },
    {
      _id: "345",
      username: "charly",
      password: "charly",
      firstName: "Charly",
      lastName: "Garcia",
      email: "charly@ulem.com"
    },
    {
      _id: "456",
      username: "shiyu",
      password: "shiyu",
      firstName: "Shiyu",
      lastName: "Wang",
      email: "swang@ulem.org"
    }
  ];
  // Find user by credentials 
router.get("/", (req, res) => {
    // get username & pass
    const username = req.query.username;
    const password = req.query.password;
    let user; 
    // if username & passworf r sent from client
    if(username && password) {
        for(let i =0; i<users.length;i++) {
        // if user has a given username & password 
            if(users[i].username === username && users[i].password === password) {
                user = users[i];
            }
            }
        } else if(username){
          for (let i=0; i<users.length; i++){
            if (users[i].username === username) {
              user = users[i];
            }
          }
        }





        // if user doesnt exist 
        if(!user) {
            user = null; 
        }
        // send user back to client 
        res.json(user);
        }
    }
    /api/user?username=username&password=password"
})
module.exports = router;