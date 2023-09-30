function partition(arr: number[], low: number, high: number): number {
  let pivot: number = arr[low];
  let leftwall: number = low;

  for (let i: number = low + 1; i < high; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[leftwall]] = [arr[leftwall], arr[i]];
      leftwall++;
    }
  }

  [pivot, arr[leftwall]] = [arr[leftwall], pivot];

  return leftwall;
}

export function quickSort(arr: number[], low: number, high: number): number[] {
  if (low < high) {
    let pivotLocation: number = partition(arr, low, high);

    quickSort(arr, low, pivotLocation - 1);
    quickSort(arr, pivotLocation + 1, high);
  }

  return arr;
}
