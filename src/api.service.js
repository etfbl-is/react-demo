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

export const getCities = (country) => {
  const citiesMap = {
    BIH: [
      {
        id: "78000",
        name: "Banja Luka",
      },
      {
        id: "78430",
        name: "Prnjavor",
      },
      {
        id: "78400",
        name: "Gradiška",
      },
      {
        id: "74000",
        name: "Doboj",
      },
    ],
    SRB: [
      {
        id: "11000",
        name: "Beograd",
      },
      {
        id: "21000",
        name: "Novi Sad",
      },
      {
        id: "18000",
        name: "Niš",
      },
    ],
    CRO: [
      {
        id: "10000",
        name: "Zagreb",
      },
      {
        id: "21000",
        name: "Split",
      },
      {
        id: "51000",
        name: "Rijeka",
      },
    ],
  };
  return Promise.resolve(citiesMap[country]);
};
