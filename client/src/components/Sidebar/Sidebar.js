import React, { useState } from "react";
import MyCalendar from "../MyCalendar/MyCalendar";
import "./Sidebar.css";
import CompletedList from "../CompletedList/CompletedList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ isCompletedTodoUpdated, todos, handleCompletedTodo }) {
    // Set up state for whether the calendar is shown or hidden
    const [showCalendar, setShowCalendar] = useState(false);

    // Function to toggle the visibility of the calendar
    const handleToggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    return (
        // Use template literal to conditionally add "show-calendar" class to container div
        <div className={`sidebar-container${showCalendar ? " show-calendar" : ""}`}>

            {/* Button to toggle calendar visibility */}
            <button className="calendar-button" onClick={handleToggleCalendar}>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </button>

            {/* Calendar component */}
            <div className="calendar-container">
                {showCalendar && (
                    <MyCalendar
                        todos={todos}
                        handleCompletedTodo={handleCompletedTodo}
                    />
                )}
            </div>

            {/* Icon to indicate slide-out functionality */}
            <div className="caret-right">
                <FontAwesomeIcon icon={faCaretRight} />
            </div>

            {/* Completed todo list component */}
            <div className="completed-list">
                <CompletedList isCompletedTodoUpdated={isCompletedTodoUpdated} />
            </div>
        </div>
    );
}

export default Sidebar;
