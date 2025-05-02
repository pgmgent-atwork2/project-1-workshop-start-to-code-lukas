const API_URL = "";

async function fetchExample() {
    const response = await fetch("/api/example");
    const data = await response.json();
    console.log(data.message);
}