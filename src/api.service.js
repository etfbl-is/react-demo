export const fakeApiCall = (count) => {
  if (!count) return Promise.resolve([]);
  const array = [];
  for (let i = 0; i < count; i++)
    array.push({
      id: i,
      value: `Text ${i + 1}`,
    });
  return Promise.resolve(array);
};
