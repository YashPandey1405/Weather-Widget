import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InformationBox.css";

export default function InfoBox({ info }) {
  const Hot_Weather_URL =
    "https://plus.unsplash.com/premium_photo-1680883742294-8f526a10d9e3?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Cold_Weather_URL =
    "https://images.unsplash.com/photo-1641672222794-536ad524a929?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Rainy_Weather_URL =
    "https://images.unsplash.com/photo-1605035015406-54c130d0bf89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1671229455344-a3b4f96c2c76?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 125 }}
          image={
            info.humidity > 80
              ? Rainy_Weather_URL
              : info.temp < 15
              ? Cold_Weather_URL
              : Hot_Weather_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} &nbsp;
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp < 15 ? (
              <AcUnitIcon />
            ) : (
              <WbSunnyIcon />
            )}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component="span"
          >
            <p>Temperature : {info.temp}°C</p>
            <p>Humidity : {info.humidity}</p>
            <p>Min Temp : {info.tempMin}°C</p>
            <p>Max Temp : {info.tempMax}°C</p>
            <p>
              The Weather Is Described As <b>{info.weather}</b> & Feels Like{" "}
              {info.feelsLike}°C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
