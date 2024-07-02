import React, { useState } from "react";
import styles from "../sass/Calendar.module.scss";
import CalendarGrid from "../components/CalendarGrid";
import ReminderForm from "../components/ReminderForm";
import RemindersList from "../components/RemindersList";
import { cities, normalizeDate, mostrarMensaje, getWeatherForecast } from '../utils';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [reminders, setReminders] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  const [editingReminder, setEditingReminder] = useState(null);
  const [editText, setEditText] = useState('');
  const [editDate, setEditDate] = useState(new Date());
  const [editTime, setEditTime] = useState('');
  const [editCity, setEditCity] = useState('');


  const handleAddReminder = (newReminder) => {
    setReminders([...reminders, newReminder]);
  };

  const handleEditReminder = (reminder) => {
    setEditingReminder(reminder);
    setEditText(reminder.text);
    setEditDate(reminder.date);
    setEditTime(reminder.time);
    setEditCity(reminder.city);
  };

  const handleSaveReminder = (originalReminder) => {
    // 1. Update reminders state
    setReminders(
      reminders.map((reminder) =>
        reminder === originalReminder
          ? {
            ...reminder,
            date: normalizeDate(editDate),
            time: editTime,
            city: editCity,
            text: editText
          }
          : reminder
      )
    );

    // 2. Clear editing state
    setEditingReminder(null);
    setEditText("");
    setEditDate(new Date());
    setEditTime("");
    setEditCity("");
  };

  const handleDayClick = (day) => {
    setSelectedDay(selectedDay?.toDateString() === day.toDateString() ? null : day);
  };

  // Navigation functions (prev/next month)
  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const monthYear = currentDate.toLocaleString("default", { month: "long", year: "numeric" });
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>{monthYear}</h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className={styles.weekdays}>{daysOfWeek.map(day => <div key={day}>{day}</div>)}</div>
      <CalendarGrid
        currentDate={currentDate}
        reminders={reminders}
        selectedDay={selectedDay}
        onDayClick={handleDayClick}
      />
      <ReminderForm onAddReminder={handleAddReminder} mostrarMensaje={mostrarMensaje} cities={cities} normalizeDate={normalizeDate} />
      {selectedDay && (
        <RemindersList
          selectedDay={selectedDay}
          reminders={reminders}
          editingReminder={editingReminder}
          editText={editText}
          editDate={editDate}
          editTime={editTime}
          editCity={editCity}
          setEditingReminder={setEditingReminder}
          setEditText={setEditText}
          setEditDate={setEditDate}
          setEditTime={setEditTime}
          setEditCity={setEditCity}
          handleSaveReminder={handleSaveReminder}
          cities={cities}
          getWeatherForecast={getWeatherForecast}
          handleEditReminder={handleEditReminder}
        />
      )}
    </div>
  );
}

export default Calendar;
