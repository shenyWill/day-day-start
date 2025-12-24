import axios from 'axios';

const OPEN_WEATHER_API_KEY = 'c1a92ebf57fad5984514880e18d5fec6';

function formatWeatherResponse(weather) {
  return `🌍 ${weather.city}
📅 ${new Date().toLocaleString("zh-CN")}
🌡️  温度: ${weather.temperature}°C (体感 ${weather.feels_like}°C)
天气: ${weather.description}
💧 湿度: ${weather.humidity}%
💨 风速: ${weather.windSpeed} km/h`;
}

export async function getCurrentWeather({ city, unit = "metric" }) {
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
    const weatherInfo = {
      city: city,
      temperature: data.main.temp, // 温度（℃）
      feels_like: data.main.feels_like, // 体感温度（℃）
      unit: unit,
      description: data.weather[0].description, // 天气描述（如“clear sky”）
      humidity: data.main.humidity, // 湿度（%）
      windSpeed: data.wind.speed, // 风速（m/s）
    };

    // 让天气信息返回更丰富
    const formattedResponse = formatWeatherResponse(weatherInfo); 
    return {
      // 返回的固定格式
      content: [
        {
          type: "text",
          text: formattedResponse,
        },
      ],
    };
  } catch (error) {
    console.error("🚨 工具调用错误:", error);

    if (error instanceof Error) {
      throw error;
    }

    throw new Error(
      `工具执行失败: ${error instanceof Error ? error.message : "未知错误"}`
    );
  }
}