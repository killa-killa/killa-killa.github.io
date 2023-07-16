// script.js
document.addEventListener('DOMContentLoaded', function () {
    const calendarWidget = document.getElementById('calendar-widget');
  
    // Generate calendar
    calendarWidget.innerHTML = generateCalendar();
  
    function generateCalendar() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
  
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const firstDay = new Date(year, month, 1).getDay();
  
      const monthName = currentDate.toLocaleString('default', { month: 'long' });
  
      let calendarHTML = `<h2>${monthName} ${year}</h2>`;
      calendarHTML += '<table>';
      calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';
  
      let date = 1;
      for (let week = 0; week < 6; week++) {
        calendarHTML += '<tr>';
        for (let day = 0; day < 7; day++) {
          if (week === 0 && day < firstDay) {
            calendarHTML += '<td></td>';
          } else if (date > daysInMonth) {
            break;
          } else {
            const cellClass = (date === currentDate.getDate() && month === currentDate.getMonth()) ? 'current-date' : '';
            calendarHTML += `<td class="${cellClass}">${date}</td>`;
            date++;
          }
        }
        calendarHTML += '</tr>';
      }
  
      calendarHTML += '</table>';
  
      return calendarHTML;
    }
  });
  