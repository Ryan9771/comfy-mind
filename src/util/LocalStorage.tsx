import { JournalEntry, JournalEntries } from './Types';

export function getStorageValue(key: string): JournalEntry | null {
    const journalDBString = localStorage.getItem("journalDB");
    if (journalDBString) {
      const journalDB: Record<string, JournalEntry> = JSON.parse(journalDBString);
      return journalDB[key] || null;
    }
    return null;
  }

export function setStorageValue(key: string, entry: JournalEntry): void {
    const journalDBString = localStorage.getItem("journalDB");
    let journalDB: JournalEntries = journalDBString ? JSON.parse(journalDBString) : {};
    
    // Set the entry in the journalDB
    journalDB[key] = entry;
  
    // Save the updated journalDB back to local storage
    localStorage.setItem("journalDB", JSON.stringify(journalDB));
  }