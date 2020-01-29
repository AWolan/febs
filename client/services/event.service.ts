import axios from 'axios';

export const fetchAllEvents = () =>
  axios.get('/api/event');
