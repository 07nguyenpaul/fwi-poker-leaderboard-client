import axios from 'axios';

class Player {
  async getAll() {
    const url = 'http://localhost:3001/users'
    const response = axios.get(url);
    
    return response;
  }
};

export default new Player();
