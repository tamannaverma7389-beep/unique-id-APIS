
route.post("/users/create", createNewUser);
route.get("/users/list", userList);
route.get("/users/details/:id", userDetails);
route.delete("/users/delete/:id", deleteUser);
route.put("/users/edit/:id", editUser);
