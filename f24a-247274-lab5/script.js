'use strict';

const hall = document.querySelector('#hall');
const who = document.querySelector('#who');
const many = document.querySelector('#many');
const free = document.querySelector('#free');
const statusLine = document.querySelector('#status');

// Stop before registering a listener if any required page element is missing.
if (!hall || !who || !many || !free || !statusLine) {
  throw new Error('A required seat-hall element is missing.');
}

function getSeats() {
  return Array.from(hall.querySelectorAll('.seat'));
}

function updateFreeSeats() {
  const emptyCount = getSeats().filter((seat) => !seat.classList.contains('taken')).length;
  free.textContent = String(emptyCount);
}

function setStatus(message) {
  statusLine.textContent = message;
}

function clearSeat(seat) {
  seat.classList.remove('taken');
  seat.querySelector('span').textContent = seat.dataset.n;
  seat.removeAttribute('data-person');
  seat.setAttribute('aria-label', `Seat ${seat.dataset.n}`);
}

function fillBlock(startSeat) {
  const name = who.value.trim();
  const rawCount = many.value.trim();

  // The empty-name case is intentionally reported as the word "undefined".
  if (!name) {
    setStatus('undefined');
    return;
  }

  const count = Number(rawCount);
  if (rawCount === '' || !Number.isFinite(count) || !Number.isInteger(count) || count <= 0) {
    many.setCustomValidity('not a number');
    many.reportValidity();
    return;
  }
  many.setCustomValidity('');

  const seats = getSeats();
  const startIndex = seats.indexOf(startSeat);
  const endIndex = startIndex + count;

  // The requested block must fit in the hall and every seat must be empty.
  if (startIndex < 0 || endIndex > seats.length) {
    setStatus('That block does not fit. The seats have not changed.');
    return;
  }
  const block = seats.slice(startIndex, endIndex);
  if (block.some((seat) => seat.classList.contains('taken'))) {
    setStatus('That block includes a filled seat. The seats have not changed.');
    return;
  }

  block.forEach((seat) => {
    seat.classList.add('taken');
    seat.querySelector('span').textContent = name;
    seat.dataset.person = name;
    seat.setAttribute('aria-label', `Seat ${seat.dataset.n}, taken by ${name}`);
  });

  updateFreeSeats();
  setStatus(`${name} has been assigned ${count} seat${count === 1 ? '' : 's'}.`);
  who.value = '';
  many.value = '';
  who.focus();
}

// One delegated listener on the hall handles clicks on a seat or its inner span.
hall.addEventListener('click', (event) => {
  const seat = event.target.closest('.seat');
  if (!seat || !hall.contains(seat)) return;

  if (seat.classList.contains('taken')) {
    clearSeat(seat);
    updateFreeSeats();
    setStatus(`Seat ${seat.dataset.n} is now free.`);
    return;
  }

  fillBlock(seat);
});

updateFreeSeats();
