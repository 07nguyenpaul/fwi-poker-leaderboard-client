import axios from 'axios';

class Player {
  async getAll() {
    const url = 'http://localhost:3001/users'
    const response = await axios.get(url);

    return response;
  }

  async addPlayer(firstName, lastName, earnings, country) {
    const url = 'http://localhost:3001/users';
    const response = axios.post(url, {
      firstName,
      lastName,
      earnings,
      country
    });

    return response;
  }

  async editPlayer(id, firstName, lastName, earnings, country) {
    const url = `http://localhost:3001/users/${id}`;
    const response = axios.put(url, {
      firstName,
      lastName,
      earnings,
      country,
      id
    });

    return response;
  }
};

export default new Player();
