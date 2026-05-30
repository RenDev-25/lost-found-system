export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncate(str: string, maxLength: number = 100): string {
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'lost':    return 'bg-red-100 text-red-700';
    case 'found':   return 'bg-green-100 text-green-700';
    case 'claimed': return 'bg-blue-100 text-blue-700';
    default:        return 'bg-gray-100 text-gray-700';
  }
}
