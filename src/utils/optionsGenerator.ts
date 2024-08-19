export const ganereteOption = (arrayOfvalue: string[]) => {
  return arrayOfvalue.map((item) => {
    return {
      value: item,
      label: item,
    };
  });
};
