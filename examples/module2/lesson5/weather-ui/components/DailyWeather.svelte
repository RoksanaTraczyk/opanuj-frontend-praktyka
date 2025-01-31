<script lang="ts">
  import type { DailyWeather } from '../models/LocationWeather';
  import WeatherIcon from './WeatherIcon.svelte';

  interface Props {
    dailyWeather: DailyWeather;
    country: string;
  }

  let { dailyWeather, country }: Props = $props();
  let averageTemperature = dailyWeather.averageTemperature ? dailyWeather.averageTemperature : dailyWeather['average_temperature'];

  const formatDate = (date: string, country: string) : string=> {
    if(country === 'US' || country === 'EU') {
      
    const [day, month, year] = date.split('-');
    return `${day}-${month}-${year}`;
    }
    return date;
  };
</script>

{console.log('dailyWeather', dailyWeather)}

<div class="bg-white rounded-xl p-4 shadow-lg">
  <h2 class="flex flex-row items-center space-x-2">
    <WeatherIcon type={dailyWeather.type} />
    <span>{formatDate(dailyWeather.date, country)}</span>
  </h2>
  <p class="text-xl font-bold mt-4">{averageTemperature} *(C)</p>
</div>
