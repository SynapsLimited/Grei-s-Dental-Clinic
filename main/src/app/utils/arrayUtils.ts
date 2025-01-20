export function rotateArray<T>(arr: T[], reverse: boolean = false): T[] {
    if (reverse) {
      return [...arr.slice(-1), ...arr.slice(0, -1)];
    }
    return [...arr.slice(1), arr[0]];
  }
  
  