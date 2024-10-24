# discordbotgithub

## Purpose

This repository contains a Discord bot that integrates with GitHub. The bot is designed to help manage GitHub repositories and provide useful information and notifications within a Discord server.

## Features

- Fetch and display information about GitHub repositories
- Notify users about new issues, pull requests, and commits
- Provide commands to interact with GitHub, such as creating issues or commenting on pull requests

## Configuration and Usage

1. Clone the repository:
    ```bash
    git clone https://github.com/Durphan/discord-bot-github.git
    cd discord-bot-github
    ```

2. Create a `.env` file in the root directory and add your Discord bot token:
    ```plaintext
    DISCORD_TOKEN=your_discord_bot_token
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Run the bot:
    ```bash
    npm run start
    ```

## Dependencies and Development Setup

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- discord.js (version 14.16.3)
- dotenv (version 16.4.5)
- eslint (version 9.13.0)
- globals (version 15.11.0)

To set up the development environment, follow these steps:

1. Install Node.js and npm from the official website: https://nodejs.org/
2. Clone the repository and navigate to the project directory:
    ```bash
    git clone https://github.com/Durphan/discord-bot-github.git
    cd discord-bot-github
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Contribution Guidelines

We welcome contributions to this project! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bugfix:
    ```bash
    git checkout -b my-feature-branch
    ```
3. Make your changes and commit them with a descriptive commit message:
    ```bash
    git commit -m "Add new feature"
    ```
4. Push your changes to your forked repository:
    ```bash
    git push origin my-feature-branch
    ```
5. Create a pull request to the main repository

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more information.
