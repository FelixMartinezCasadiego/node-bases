const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

export function getUserById(id: number, callback: any) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    setTimeout(() => {
      callback(`User not found with id ${id}`);
    }, 500);

    return;
  }

  return callback(null, user);
}
