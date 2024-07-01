import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

// npm run add-one

export const addOneContact = async () => {
  const newContact = createFakeContact();
  console.log(newContact);
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileContent);
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
    console.log('Successfully added 1 contact');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();
