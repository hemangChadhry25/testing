const { v4: uuidv4 } = require("uuid");

export function generateRandomString(length) {
  return uuidv4().substr(0, length).replace(/-/g, "");
}

export const duplicateObject = (value, array) => {
  const randomString = generateRandomString(7);

  let index;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === value.id) {
      index = i;
    }
  }

  let newArray = [];
  for (let j = 0; j <= index; j++) {
    newArray.push(array[j]);
  }
  const duplicateObject = {
    id: `${randomString}`,
    value: `${value.value}`,
    icon: value.icon,
    type: value.type,
  };
  newArray.push(duplicateObject);
  for (let i = index + 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

export const deleteObject = (value, array) => {
  const newArray = array.filter((i) => i.id !== value.id);
  return newArray;
};
