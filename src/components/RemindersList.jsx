import React, { useEffect, useState } from 'react';
import styles from '../sass/Calendar.module.scss';
import { getWeatherForecast } from '../utils';

function RemindersList({
    selectedDay, reminders, editingReminder, editText, editDate, editTime, editCity,
    setEditingReminder, setEditText, setEditDate, setEditTime, setEditCity, handleSaveReminder, handleEditReminder, cities
}) {

    const [weatherForecasts, setWeatherForecasts] = useState({}); // State for storing weather forecasts

    useEffect(() => {
        const fetchWeather = async () => {
            const newForecasts = {};
            for (const reminder of reminders) {
                const key = `${reminder.date.toDateString()}-${reminder.city}`;
                if (!weatherForecasts[key]) {
                    newForecasts[key] = await getWeatherForecast(reminder.city, reminder.date);
                }
            }
            setWeatherForecasts((prev) => ({ ...prev, ...newForecasts }));
        };
        fetchWeather();
    }, [reminders, weatherForecasts]); // Fetch weather when reminders change

    return (
        <div className={styles.remindersList}>
            <h3>Reminders for {selectedDay.toDateString()}:</h3>
            <ul>
                {reminders
                    .filter(reminder => reminder.date.toDateString() === selectedDay.toDateString())
                    .map((reminder, index) => (
                        <li key={index}>
                            {editingReminder === reminder ? (
                                <div>
                                    {/* Edit Form */}
                                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                                    <input type="date" value={editDate.toISOString().slice(0, 10)} onChange={(e) => setEditDate(new Date(e.target.value))} />
                                    <input type="time" value={editTime} onChange={(e) => setEditTime(e.target.value)} />
                                    <select value={editCity} onChange={(e) => setEditCity(e.target.value)}>
                                        <option value="">Select City</option>
                                        {cities.map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
                                    <button onClick={() => handleSaveReminder(reminder)}>Save</button>
                                    <button onClick={() => setEditingReminder(null)}>Cancel</button>
                                </div>
                            ) : (
                                <div>
                                    {/* Display Reminder */}
                                    {reminder.time} - {reminder.text} ({reminder.city})
                                    {' - '}
                                    {weatherForecasts[`${reminder.date.toDateString()}-${reminder.city}`] || 'Loading...'}
                                    <button onClick={() => handleEditReminder(reminder)}>Edit</button>
                                </div>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default RemindersList;