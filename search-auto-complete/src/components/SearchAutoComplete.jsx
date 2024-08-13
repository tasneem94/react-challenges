import { useEffect } from "react";
import { useState } from "react";

const SearchAutoComplete = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUsers = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://dummyjson.com/users?limit=1000");
      const data = await response.json();
      console.log(data);
      if (data) {
        setUsers(data.users.map((user) => user.firstName));
        setIsLoading(false);
        setErrorMessage(null);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchParam.trim() === "") {
      setFilteredUsers([]);
    } else {
      const filtered = users.filter((user) =>
        user.toLowerCase().startsWith(searchParam.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchParam, users]);

  if (isLoading) {
    return <div className="loading">Loading data. Please wait...</div>;
  }

  if (errorMessage) {
    return <div className="error">{`error ${errorMessage}`}</div>;
  }
  console.log(users);

  return (
    <div className="container">
      <input
        type="text"
        name="search-users"
        value={searchParam}
        placeholder="Search users here.."
        onChange={(e) => setSearchParam(e.target.value)}
      />

      {filteredUsers.length > 0 && (
        <ul className="filtered-users-container">
          {filteredUsers.map((user, index) => (
            <li className="filtered-user" key={index}>
              {user}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchAutoComplete;
