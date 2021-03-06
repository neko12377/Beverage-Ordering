export const addItem = (
  name, size, price, sugar, ice, numbers, customer,
  detail, isPay, color,
) => ({
  type: 'AddItem',
  name,
  size,
  price,
  sugar,
  ice,
  numbers,
  customer,
  detail,
  isPay,
  color,
});

export const delAllItem = () => ({
  type: 'DelAllItem',
});

export const confirmOrders = () => ({
  type: 'ConfirmOrders',
});

export const annotateOfItem = (annotate) => ({
  type: 'Annotate',
  annotate,
});

export const temporariness = (name, size, price) => ({
  type: 'Temporariness',
  name,
  size,
  price,
});

export const itemNumbers = (numbers) => ({
  type: 'ItemNumbers',
  numbers,
});

export const customerName = (customer) => ({
  type: 'CustomerName',
  customer,
});

export const customizedDetail = (detail) => ({
  type: 'CustomizedDetail',
  detail,
});

export const pay = (isPay, color) => ({
  type: 'IsPay',
  isPay,
  color,
});

export const deleteThisItem = (itemIndex) => ({
  type: 'DeleteThisItem',
  itemIndex,
});

export const payOrNot = (index) => ({
  type: 'PayOrNot',
  index,
});

export const phoneSizeCart = () => ({
  type: 'PhoneSizeCart',
});

export const sumOfItems = (sum, next) => ({
  type: 'SumOfItems',
  sum: sum + next,
});

export const alterSugar = (sugar) => ({
  type: 'AlterSugar',
  sugar,
});

export const alterIce = (ice) => ({
  type: 'AlterIce',
  ice,
});
