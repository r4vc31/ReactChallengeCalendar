import React from "react";
import styles from "../sass/Calendar.module.scss";

function CalendarGrid({ currentDate, reminders, selectedDay, onDayClick }) {
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const days = [];

  // Add empty cells for previous month's days
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    days.push(<div key={`empty-${i}`} className={styles["empty-day"]}></div>);
  }

  // Add actual days of the current month
  for (let i = 1; i <= daysInMonth; i++) {
    const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    const remindersForDay = reminders.filter(
      (reminder) => reminder.date.toDateString() === currentDay.toDateString()
    );
    const hasReminders = remindersForDay.length > 0;

    days.push(
      <div
        key={i}
        onClick={() => onDayClick(currentDay)}
        className={`${styles.day} ${
          selectedDay?.toDateString() === currentDay.toDateString() ? styles.selected : ""
        } ${hasReminders ? styles.hasReminders : ""}`}
      >
        {i}
        {hasReminders && <span className={styles["reminder-text"]}>Has reminders</span>}
      </div>
    );
  }

  return <div className={styles.grid}>{days.map((day) => day)}</div>;
}

export default CalendarGrid;
