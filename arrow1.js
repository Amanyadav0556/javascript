const login = (username, password) => {
  return username === "admin" && password === "1234";
};

console.log(login("admin", "1234"));
console.log(login("user", "1111"));
