

export const randomString = (qty: number = 36) =>
  Math.random().toString(qty).substring(7).split('').join('.');