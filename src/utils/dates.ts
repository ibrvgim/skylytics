export function formatDate(date: Date | undefined) {
  if (!date) return;

  const convertDate = new Date(date);

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
  }).format(convertDate);
}

export function formatTime(date: Date | undefined) {
  if (!date) return;

  const convertDate = new Date(date);

  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(convertDate);
}

export function formatWeekdays(date: Date | undefined) {
  if (!date) return;

  const convertDate = new Date(date);

  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
  }).format(convertDate);
}
