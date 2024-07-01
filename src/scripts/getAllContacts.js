import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

// Перевірити роботу функції можна виконавши команду npm run get-all, яка буде виконувати код у файлі src/scripts/getAllContacts.js.

export const getAllContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf8');
    console.log('Success getting all contacts');
    return JSON.parse(contacts);
  } catch (error) {
    console.error('Error getting contacts:', error);
  }
};

console.log(await getAllContacts());
