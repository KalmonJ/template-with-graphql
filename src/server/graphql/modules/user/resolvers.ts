export const userResolver = {
  Query: {
    createUser: () => {
      console.log("hello");

      return {
        username: "any username",
        name: "anyname",
        email: "email@email",
        phoneNumber: "(234234)",
      };
    },
  },
};
