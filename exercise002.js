import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchData(apiEndPoint) {
  try {
    const response = await fetch(apiEndPoint);
    if (response.ok) {
      const jsonText = await response.json();
      console.log(jsonText);
    }
  } catch (error) {
    console.log(error)
  }
}

fetchData(jsonTypicode);
