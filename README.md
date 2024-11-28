# Weather-Widget

A simple weather application that allows users to enter a city name and view current weather details powered by the [OpenWeather API](https://openweathermap.org/). Built with React and Vite, and styled with Material UI for an attractive, user-friendly interface.

## Live Demo

Check out the live demo of the project hosted on **Netlify**:  
[Weather-Widget](https://fanciful-moonbeam-d2767e.netlify.app/)

## Features

- **City Input**: Users can input any city name.
- **Weather Data**: The app fetches weather data for the given city from the OpenWeather API.
- **Weather Details**: Displays the current temperature, weather condition, humidity, and wind speed.
- **Material UI Styling**: Beautiful, responsive UI built using Material UI.

## Technologies Used

- **Frontend**: React.js
- **Bundler**: Vite & Material UI
- **API**: OpenWeather API
- **Deployment Platform**: Netlify

## Setup and Installation

Follow the steps below to get your local copy up and running:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/) installed on your machine.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/weather-widget.git
   cd weather-widget
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up your OpenWeather API key**:
   - Sign up for a free API key at [OpenWeather](https://openweathermap.org/api).
   - Create a `.env` file in the root directory of the project and add your API key:

     ```plaintext
     REACT_APP_OPENWEATHER_API_KEY=your-api-key
     ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.


## Acknowledgments

- [OpenWeather API](https://openweathermap.org/api) for providing the weather data.
- [Material UI](https://mui.com/) for beautiful and responsive UI components.
- [Vite](https://vitejs.dev/) for providing an extremely fast build tool.
- [Netlify](https://netlify.com) for easy deployment and hosting.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


```

### Changes:
1. **Deployment on Netlify**: Added a dedicated section on how the project is deployed on Netlify, explaining the steps to deploy and link GitHub with Netlify.
2. **Acknowledgments**: Included **Netlify** in the acknowledgments section to credit the platform for hosting.

This gives users full context about where the app is hosted and how to deploy their own copy using Netlify.
