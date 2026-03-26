/**
 * PRISM PR - DASHBOARD MODULE
 * Handles: Press mentions chart, Press kit status, Calendar interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. PRESS MENTIONS CHART (Placeholder Visualization)
    // Using simple CSS-based bars for a lightweight, dependency-free dashboard
    const chartBars = document.querySelectorAll('.chart-bar-inner');
    if (chartBars.length > 0) {
        chartBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage') || '0%';
            setTimeout(() => {
                bar.style.width = percentage;
            }, 800);
        });
    }

    // 2. SEARCH FILTERS (Client Mentions)
    const mentionSearch = document.querySelector('#mention-search');
    if (mentionSearch) {
        mentionSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const mentionRows = document.querySelectorAll('.mention-row');
            
            mentionRows.forEach(row => {
                const text = row.innerText.toLowerCase();
                row.style.display = text.includes(searchTerm) ? 'flex' : 'none';
            });
        });
    }

    // 3. PRESS KIT STATUS TOGGLE
    const updateButtons = document.querySelectorAll('.btn-update-kit');
    updateButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const statusLabel = btn.closest('.card-body').querySelector('.badge-status');
            if (statusLabel) {
                statusLabel.innerText = 'Updating...';
                statusLabel.classList.replace('bg-success', 'bg-warning');
                
                setTimeout(() => {
                    statusLabel.innerText = 'Ready';
                    statusLabel.classList.replace('bg-warning', 'bg-success');
                    // Alert success
                    console.log('Press Kit Updated');
                }, 1500);
            }
        });
    });

    // 4. CALENDAR INTERACTION (Simplified)
    const calendarDays = document.querySelectorAll('.cal-day');
    calendarDays.forEach(day => {
        day.addEventListener('click', () => {
            calendarDays.forEach(d => d.classList.remove('active'));
            day.classList.add('active');
            
            const eventDetails = document.querySelector('#event-details');
            const eventText = day.getAttribute('data-event') || 'No events scheduled.';
            if (eventDetails) {
                eventDetails.innerText = eventText;
            }
        });
    });
});
