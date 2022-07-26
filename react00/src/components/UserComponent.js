import React, { useEffect, useState } from 'react';
//import { UserService } from '../services/UserService';
import axios from 'axios';



function UserComponent() {

    const [users, setUsers] = useState([]);
        
            useEffect(() => {

                const getUsers = async() =>{
                    try{
                        const res = await axios.get("http://localhost:8080/api/users");
                    setUsers(res.data);
                    }catch(err){
                        console.log(err);
                    }
                }
                getUsers();
                
            },[])
            
            console.log(users)

  return (
    <div style={{margin: '20px'}}>
        <h1 className='text-center'>Users List</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <td> User Id</td>
                    <td> User First Name</td>
                    <td> User Last Name</td>
                    <td> User Email Id</td>
                </tr>
            </thead>
            <tbody>
            {
                
                users.map((user, index) =>(
                    
                       <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr> 
                    )
                )
            }
            </tbody>

        </table>
    </div>
  )
}

export default UserComponent