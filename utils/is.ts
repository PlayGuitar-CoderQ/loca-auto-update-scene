export const isJSON = (val: string): boolean => {
  let res = false;
  const isStr = typeof val === 'string';

  if (!isStr) return res;

  try {
    JSON.parse(val);
    res = true;
  } catch {}

  return res;
}

export const isNull = (val: unknown) => {
  return val === null;
}

