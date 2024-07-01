import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

// npm run remove-all

export const removeAllContacts = async () => {
  try {
    fs.writeFile(PATH_DB, JSON.stringify([]), 'utf8');
    console.log('Succefully removed all contacts');
  } catch (error) {
    console.error('Error deleting all contacts:', error);
  }
};

removeAllContacts();
