const getCurrentDate = () => {
  const currentDate = new Date();
  // Format the date as required for your SQL query, e.g., "yyyy-MM-dd"
  const formattedDate = currentDate.toISOString().split("T")[0];
  return formattedDate;
};

export default getCurrentDate;
