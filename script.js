document.addEventListener('DOMContentLoaded', function() {
    // Get current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getDay()];
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = `Current Day: ${currentDay}`;

    // Get current UTC time in milliseconds
    const currentUTCTime = Date.now();
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime}`;
});
