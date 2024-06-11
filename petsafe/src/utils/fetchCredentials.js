// src/utils/fetchCredentials.js
export const fetchCredentials = async () => {
  try {
    const response = await fetch('http://localhost:3001/firebase-credentials');

    if (!response.ok) {
      throw new Error('Failed to fetch credentials');
    }
    const credentials = await response.json();
    return credentials;
  } catch (error) {
    console.error('Error fetching credentials:', error);
    return null;
  }
};
