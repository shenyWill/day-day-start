import axios from 'axios';

const OPEN_WEATHER_API_KEY = 'c1a92ebf57fad5984514880e18d5fec6';

export interface WeatherInfo {
  city: string;
  temperature: number;
  unit: string;
  feels_like: string;
  description: string;
  humidity: string;
  windSpeed: string;
}

export interface WeatherParams {
  city: string;
  unit?: string;
}

export async function getCurrentWeather({ city, unit = "metric" }: WeatherParams): Promise<WeatherInfo> {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: OPEN_WEATHER_API_KEY,
          units: unit,
        },
      }
    );

    const data = response.data;
    const weatherInfo: WeatherInfo = {
      city: data.name || city,
      temperature: Math.round(data.main.temp), // 温度（℃）
      feels_like: data.main.feels_like, // 体感温度（℃）
      unit: unit === "metric" ? "°C" : unit === "imperial" ? "°F" : "K",
      description: data.weather[0].description, // 天气描述（如"clear sky"）
      humidity: data.main.humidity, // 湿度（%）
      windSpeed: data.wind.speed, // 风速（m/s）
    };

    return weatherInfo;
  } catch (error) {
    console.error("❌ 工具调用错误:", error);

    if (error instanceof Error) {
      throw error;
    }

    throw new Error(
      `工具执行失败: ${error instanceof Error ? error.message : "未知错误"}`
    );
  }
}
