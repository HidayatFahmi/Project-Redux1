import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Action/userAction";

function UsersPage() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const isLoading = useSelector((state) => state.users.isLoading);
  const users = useSelector((state) => state.users.users);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers(token));
  }, [dispatch, token]);

  return (
    <div>
      <h1>Halaman Users</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <div key={user.id}>
             <p>Email : {user.email}</p>
             <p>Pass : {user.first_name} {user.last_name}</p> 
             <img src={user.avatar} alt="" />
             <div>
             <button>Edit</button>  <button>Delete</button>
             </div>
            </div>
          ))}
        </ul>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default UsersPage;
