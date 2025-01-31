<script lang="ts">
  import type { LocationWeather } from '../models/LocationWeather';
  import DailyWeather from './DailyWeather.svelte';

  interface Props {
    weather: LocationWeather;
  }

  let { weather }: Props = $props();
  let weatherDetails = weather.weatherDetails.length > 0 ? weather.weatherDetails : weather.weatherDetails.Weather;
  
</script>



<div>
  <h2 class="text-2xl py-4">
    {weather.city}, {weather.country}
  </h2>
  <ul class="space-y-4">
    {#each weatherDetails as details}
    
      <DailyWeather dailyWeather={details} country={weather.country}/>
    {/each}
  </ul>
</div>
