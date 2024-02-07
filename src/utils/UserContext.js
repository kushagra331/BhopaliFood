import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"name",
        // email:"kushagra@gmail.com",
        defimg:"random",
        // defimg:"defimg"
        // ok:123,
        test:"kushagra"
    },
});

export default UserContext;
