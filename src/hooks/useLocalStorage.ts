import { useState, useEffect, useCallback, type Dispatch, type SetStateAction } from 'react';

/**
 * useLocalStorage
 * A drop-in replacement for useState that persists to the browser's
 * localStorage under the given key. Reads the existing value (if any)
 * on first render, and writes back to localStorage whenever the value
 * changes.
 *
 * Usage:
 *   const [notes, setNotes] = useLocalStorage<Note[]>('notes', []);
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>, () => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? (JSON.parse(stored) as T) : initialValue;
    } catch (err) {
      console.warn(`useLocalStorage: failed to read key "${key}"`, err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`useLocalStorage: failed to write key "${key}"`, err);
    }
  }, [key, value]);

  // Keep state in sync if the same key changes in another tab/window.
  useEffect(() => {
    function handleStorage(event: StorageEvent) {
      if (event.key === key && event.newValue !== null) {
        try {
          setValue(JSON.parse(event.newValue) as T);
        } catch {
          // ignore malformed external writes
        }
      }
    }
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [key]);

  const remove = useCallback(() => {
    window.localStorage.removeItem(key);
    setValue(initialValue);
  }, [key, initialValue]);

  return [value, setValue, remove];
}
