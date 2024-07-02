import React, { useState, useEffect } from 'react';
import styles from '../sass/Calendar.module.scss';
import { getWeatherForecast } from '../utils'; 

function ReminderForm({ onAddReminder, mostrarMensaje, cities, normalizeDate }) {
  const [newReminderText, setNewReminderText] = useState('');
  const [newReminderDate, setNewReminderDate] = useState(new Date());
  const [newReminderTime, setNewReminderTime] = useState('');
  const [newReminderCity, setNewReminderCity] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch weather only when both city and date are selected
    if (newReminderCity && newReminderDate) {
      const fetchWeather = async () => {
        const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${newReminderCity}/${newReminderDate.toISOString()}?key=FRFPMDB8VFDFZTPME23QVBYP7`;

        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setWeather(data.days[0]?.conditions); // Get conditions for the selected day
        } catch (error) {
          console.error('Error fetching weather:', error);
          setWeather('Error fetching weather');
        }
      };
      fetchWeather();
    } else {
      setWeather(null); // Clear weather if city or date is not selected
    }
  }, [newReminderCity, newReminderDate]); // Fetch whenever city or date changes

  const handleAddReminder = () => {
    // 1. Validate input (ensure date, time, city, and text are filled)
    if (!newReminderText || !newReminderDate || !newReminderTime || !newReminderCity) {
      mostrarMensaje("¡Campos Incompletos!");
      return;
    }

    // 2. Trim reminder text to max 30 characters
    const trimmedText = newReminderText.slice(0, 30);

    // 3. Create new reminder object
    const newReminder = {
      date: normalizeDate(newReminderDate),
      time: newReminderTime,
      city: newReminderCity,
      text: trimmedText
    };

    // 4. Call the onAddReminder prop to pass the new reminder to the parent component
    onAddReminder(newReminder);

    // 5. Clear input fields
    setNewReminderText('');
    setNewReminderDate(new Date());
    setNewReminderTime('');
    setNewReminderCity('');
    setWeather(null); // Clear weather as well
  };

  return (
    <div className={styles["reminder-form"]}>
      <input
        type="text"
        maxLength="30"
        placeholder="Reminder"
        value={newReminderText}
        onChange={(e) => setNewReminderText(e.target.value)}
      />
      <input
        type="date"
        onChange={(e) => setNewReminderDate(new Date(e.target.value))}
      />
      <input
        type="time"
        value={newReminderTime}
        onChange={(e) => setNewReminderTime(e.target.value)}
      />
      <select
        value={newReminderCity}
        onChange={(e) => setNewReminderCity(e.target.value)}
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {weather && (
        <div className={styles.weather}>
          Weather for {newReminderCity} on {normalizeDate(newReminderDate).toDateString()}: {weather}
        </div>
      )}
      <button onClick={handleAddReminder}>Add Reminder</button>
    </div>
  );
}

export default ReminderForm;