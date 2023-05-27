export const userResolver = {
  Query: {
    createUser: () => {
      return {
        username: "any username",
        name: "anyname",
        email: "email@email",
        phoneNumber: "(234234)",
      };
    },
  },
};
