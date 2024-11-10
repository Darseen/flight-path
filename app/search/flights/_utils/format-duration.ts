// Function to format duration from ISO 8601 format (PT2H30M) to readable format (2h 30m)
export default function formatFlightDuration(isoDuration: string): string {
  if (!isoDuration) return "N/A";

  // Extract hours and minutes from PT2H30M format
  const hoursMatch = isoDuration.match(/(\d+)H/);
  const minutesMatch = isoDuration.match(/(\d+)M/);

  const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
  const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;

  // Format the duration
  if (hours === 0) {
    return `${minutes}m`;
  }
  if (minutes === 0) {
    return `${hours}h`;
  }
  return `${hours}h ${minutes}m`;
}
