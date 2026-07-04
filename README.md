# GitHub Profile Inspector

A beautiful and minimal web application to search and display GitHub user profiles with detailed statistics and information.

## Overview

GitHub Profile Inspector is a modern web application built with Node.js and vanilla JavaScript that allows you to search for any GitHub user and instantly view their profile information, statistics, and a direct link to their GitHub account.

## Features

- Search GitHub users by username
- Display comprehensive user profile information
- Show follower, following, and repository counts
- User bio and profile picture
- Direct link to GitHub profile
- Dark theme UI inspired by Discord
- Responsive design for mobile and desktop
- Real-time error handling and user feedback
- Loading indicators for better UX
- Keyboard navigation support (Enter to submit)

## Technologies Used

- Node.js - Backend server
- Express.js - Web framework
- Vanilla JavaScript - Frontend functionality
- CSS3 - Styling and animations
- GitHub API - User data source

## Project Structure

```
.
├── package.json
├── server.js
├── README.md
└── public/
    ├── index.html
    ├── script.js
    └── style.css
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/iamsumedhsg/Profile-Inspector.git
cd Profile-Inspector
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
node server.js
```

4. Open your browser and navigate to
```
http://localhost:3000
```

## Usage

1. Enter a GitHub username in the search box
2. Click the Search button or press Enter
3. View the profile information including:
   - Profile picture
   - Name and bio
   - Follower count
   - Following count
   - Public repository count
4. Click "Visit GitHub Profile" to go directly to their GitHub page

## How It Works

The application follows a simple client-server architecture:

1. User enters a GitHub username in the frontend
2. JavaScript sends a request to the backend API
3. Backend fetches user data from GitHub's public API
4. Data is returned and displayed beautifully on the frontend
5. User can interact with the profile or search again

## API Endpoint

The application exposes an internal API endpoint:

```
GET /api/github/:username
```

This endpoint fetches user data from GitHub and returns JSON with profile information.

## Design Details

The UI features a Discord-inspired dark theme with:

- Dark charcoal background for reduced eye strain
- Teal accent color for interactive elements
- Smooth animations and transitions
- Professional typography using system fonts
- Responsive grid layout for statistics
- Accessible form controls with focus states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Error Handling

The application handles various error scenarios:

- Invalid or non-existent usernames
- Network errors
- API rate limiting
- Empty input validation

Clear error messages guide the user to correct their input.

## Future Enhancements

Potential features for future versions:

- User profile caching to reduce API calls
- Search history
- Multiple profile comparison
- Repository listing for searched users
- User location and company information
- GitHub contributions graph

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License

This project is open source and available under the MIT License.

## Author

Created by Sumedh Singh Gautam

## Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.
