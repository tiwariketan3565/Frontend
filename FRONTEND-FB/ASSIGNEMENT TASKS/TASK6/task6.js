const tableBody = document.getElementById("userList");
const refreshBtn = document.getElementById("reloadBtn");
const loader = document.getElementById("loadingIndicator");

async function fetchUsers() {
  try {
    loader.style.display = "block";   
    tableBody.innerHTML = "";         
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    data.forEach(user => {
      const row = `
        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.address.city}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });

  } catch (err) {
    alert("Failed to fetch data!");
  } finally {
    loader.style.display = "none"; 
  }
}

fetchUsers();

refreshBtn.addEventListener("click", fetchUsers);
