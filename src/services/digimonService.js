const getData = async () => {
  const url = "https://digi-api.com/api/v1/digimon?pageSize=120";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const result = await response.json();
  return result.content;
};

export { getData };
