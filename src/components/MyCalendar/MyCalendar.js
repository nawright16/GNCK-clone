import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './MyCalendar.css';

const MyCalendar = () => {
  const [todos, setTodos] = useState([])
  const [events, setEvents] = useState([])

  const localizer = momentLocalizer(moment)

  const getEvents = (todos) => {
    if (!todos) return []
    const events = todos
      .filter((todo) => !todo.completed) // <-- Filter out completed todos
      .map((todo) => ({
        title: todo.description,
        start: new Date(todo.due_date),
        end: new Date(todo.due_date),
      }))
       console.log('Events:', events); // <-- Log the generated events
    return events
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/todos');
        const data = await response.json();
        console.log('Data fetched:', data);
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    setEvents(getEvents(todos.filter((todo) => !todo.completed))) // <-- Filter out completed todos
    console.log('Events:', events);
  }, [todos])


  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(event) => console.log(event.title)}
        onSelectSlot={(slotInfo) => console.log(slotInfo.start)}
      />
    </div>
  )
}

export default MyCalendar
