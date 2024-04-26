export const parseStringToDate = (
  dateString: string,
  separator: string = "/"
): Date => {
  const dateParts = dateString.split(separator).map((value: string) => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
