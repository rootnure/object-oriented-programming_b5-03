{
  // Type Guard --> Type Narrowing

  // typeof --> type guard

  type TAlphaNeumeric = number | string;

  const add = (param1: TAlphaNeumeric, param2: TAlphaNeumeric): TAlphaNeumeric => {
    if (typeof param1 === 'number' && typeof param2 === 'number') return param1 + param2;
    return (param1 as string) + (param2 as string);
  }

  console.log(add(2, "5"));



  // in guard
  interface INormalUser {
    name: string;
  }

  interface IAdminUser {
    name: string;
    role: "admin";
  }

  const getUser = (user: INormalUser | IAdminUser) => {
    if ('role' in user) {
      console.log(`Name: ${user.name} and Role: ${user.role}`);
    } else {
      console.log(`Name: ${user.name}`);
    }
  }
  const normalUser: INormalUser = { name: "Mr. User" };
  const adminUser: IAdminUser = { name: "Mr. Admin", role: 'admin' };
  getUser(normalUser);
  getUser(adminUser);
}