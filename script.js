// script.js
document.addEventListener('DOMContentLoaded', () => {
    const tables = document.querySelectorAll('.table, .square-table');
    
    // Allow dragging
    tables.forEach(table => {
      table.style.position = 'absolute';
      table.addEventListener('mousedown', (e) => {
        let shiftX = e.clientX - table.getBoundingClientRect().left;
        let shiftY = e.clientY - table.getBoundingClientRect().top;
  
        const moveAt = (pageX, pageY) => {
          table.style.left = pageX - shiftX + 'px';
          table.style.top = pageY - shiftY + 'px';
        };
  
        const onMouseMove = (event) => {
          moveAt(event.pageX, event.pageY);
        };
  
        document.addEventListener('mousemove', onMouseMove);
  
        table.onmouseup = () => {
          document.removeEventListener('mousemove', onMouseMove);
          table.onmouseup = null;
        };
      });
  
      table.ondragstart = () => false;
    });
  });
  