"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code. test
   */
  register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");
    extensionService.use(({ nexus }) => ({
      types: [
        nexus.extendType({
          type: "UsersPermissionsMe",
          definition(t) {
            // here define fields you need
            t.int("role_id");
          },
        }),
      ],
      resolversConfig: {
        // 'Mutation.deleteUsersPermissionsUser': {
        //   auth: {
        //     scope: ['plugin::users-permissions.user.find']
        //   }
        // },
        // 'Mutation.deleteUsersPermissionsRole': {
        //   auth: false
        // },
        // 'Query.usersPermissionsRole': {
        //   auth: false
        // }
      },
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {},

  /**
   * An asynchronous destroy function that runs before
   * your application gets shut down.
   *
   * This gives you an opportunity to gracefully stop services you run.
   */
  destroy({ strapi }) {},
};
