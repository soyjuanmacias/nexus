import axios from 'axios';

import storage from '../providers/storage';

const service = {
  memory: storage.get('contacts'),

  create(data = {}) {
    if (!data.id) {
      throw new Error('An `id` must be provided');
    }

    this.memory[data.id] = data;
    storage.set('contacts', this.memory);
  },

  delete(id) {
    delete this.memory[id];
  },

  async fetch() {
    const { results } = await axios.get('/api', {
      baseURL: 'https://randomuser.me',
      params: { results: 57 },
    });

    this.memory = results.reduce((acc, item) => {
      const id = `${item.id.name}${item.id.value}`;

      return { ...acc, [id]: { ...item, id } };
    }, {});

    storage.set('contacts', this.memory);

    return this.memory;
  },

  async read(id) {
    if (!this.memory) {
      await this.fetch();
    }

    if (id) {
      return this.memory.find(item => id === item.id);
    }

    return this.memory;
  },

  update(id, data) {
    if (this.memory[id]) {
      this.memory[id] = data;
      storage.set('contacts', this.memory);
    }
  },
};

export default service;
