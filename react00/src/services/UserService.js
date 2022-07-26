import axios from 'axios';




const USER_REST_API_URL = "https://localhost:8080/api/users"




export class UserService {

        getUsers(){
                axios.get(USER_REST_API_URL);
        }
     
}
