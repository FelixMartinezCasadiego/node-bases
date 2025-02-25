// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUUID } = require('../plugins');

interface BuildMakePersonProps {
  getUUID: () => string;
  getAge: (birthdate: string) => number | Error;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonProps) => {
  return ({ name, birthdate }: { name: string; birthdate: string }) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = buildPerson( obj );

// console.log(john);
