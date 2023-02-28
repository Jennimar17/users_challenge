# React List App

This project is a simple web application that displays data from two APIs. It shows a list of items with their corresponding images fetched from the APIs.

## Description

The application is built with React and uses the following technologies:

- React
- Axios
- Tailwind CSS
- DaisyUI, a free and open-source component library for Tailwind CSS
- OpenAI's ChatGPT (for assistance in solving an API call issue)

The application fetches data from two APIs:

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - A simple fake REST API for testing and prototyping.
- [Randomuser](https://randomuser.me/) - A free, open-source API for generating random user data.

The application has a hidden state variable containing the randomuser API key. To run the application, you will need to create an `.env` file in the root directory and add your own Randomuser API key to the file as follows:

```sh
API_KEY=your_api_key_here
```

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

## Usage

Once the server is running, you can view the app in your browser at http://localhost:3000. The app displays a list of items retrieved from an API and their corresponding images retrieved from another API.

## Credits

This application was created with the help of OpenAI's ChatGPT, who provided assistance to solve a problem related to making API calls, also to create this README and create the markdown format for it. ;)

## License

This project is licensed under the MIT License.
