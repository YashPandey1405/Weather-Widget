import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [City, setCity] = useState("");
  const [error, setError] = useState(false); // Define error state

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${City}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: City,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const onSubmitForm = async (event) => {
    try {
      event.preventDefault();
      let result = await getWeatherInfo();
      updateInfo(result);
      setCity(""); // Clear input after submitting}catch(err){
    } catch (err) {
      setError(true);
      console.error("Error fetching weather data:", err);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={City}
          onChange={handleChange}
        />
        &nbsp; &nbsp;
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          sx={{ marginTop: "8px" }}
        >
          Send
        </Button>
      </form>
      <br></br>
      {error && <p style={{ color: "red" }}>No Such Place Exists</p>}
      <hr></hr>
      <br></br>
    </div>
  );
}
