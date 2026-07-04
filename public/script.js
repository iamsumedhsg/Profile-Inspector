const usernameInput = document.getElementById("username");
const searchForm = document.getElementById("searchForm");
const resultContainer = document.getElementById("result");
const errorContainer = document.getElementById("error");
const loadingElement = document.getElementById("loading");

function showLoading() {
    loadingElement.classList.add("active");
    errorContainer.classList.remove("active");
    resultContainer.innerHTML = "";
}

function hideLoading() {
    loadingElement.classList.remove("active");
}

function showError(message) {
    errorContainer.textContent = message;
    errorContainer.classList.add("active");
    resultContainer.innerHTML = "";
    hideLoading();
}

function displayProfile(data) {
    hideLoading();
    errorContainer.classList.remove("active");
    
    const bio = data.bio || "No bio available";
    
    resultContainer.innerHTML = `
        <div class="profile-card">
            <img src="${data.avatar_url}" alt="${data.name}">
            <h2>${data.name || data.login}</h2>
            <p>${bio}</p>
            <div class="stats">
                <div class="stat-item">
                    <span class="stat-value">${data.followers}</span>
                    <span class="stat-label">Followers</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${data.following}</span>
                    <span class="stat-label">Following</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${data.public_repos}</span>
                    <span class="stat-label">Repositories</span>
                </div>
            </div>
            <a href="${data.html_url}" target="_blank" class="github-link">Visit GitHub Profile →</a>
        </div>
    `;
}

async function searchUser() {
    const username = usernameInput.value.trim();
    
    if (!username) {
        showError("Please enter a GitHub username");
        return;
    }
    
    showLoading();
    
    try {
        const response = await fetch(`/api/github/${username}`);
        
        if (!response.ok) {
            throw new Error("User not found");
        }
        
        const data = await response.json();
        displayProfile(data);
    } catch (error) {
        showError(error.message || "Failed to fetch user profile. Please try again.");
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchUser();
});

usernameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchUser();
    }
});