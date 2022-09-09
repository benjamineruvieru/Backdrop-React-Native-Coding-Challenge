export const loadExtraCats = (setPagenumber, isLoading) => {
  if (!isLoading) {
    setPagenumber(page => page + 1);
  }
};
