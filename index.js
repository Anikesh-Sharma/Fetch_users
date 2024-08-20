// Function to fetch user data from Reqres API
async function fetchUsers() {
    const apiUrl = 'https://reqres.in/api/users?page=1';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayUsers(data.data);
    } catch (error) {
        console.error('Something went wrong:', error);
    }
}

// Function to display user data on the webpage
function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Clear any existing content

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        userCard.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            <h3>${user.first_name} ${user.last_name}</h3>
            <p>${user.email}</p>
        `;

        userList.appendChild(userCard);
    });
}

// Add event listener to the button to trigger fetching of users
document.getElementById('fetch-users').addEventListener('click', fetchUsers);
