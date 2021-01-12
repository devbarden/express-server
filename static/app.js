const App = {
  data() {
    return {
      servers: [],
      name: '',
    }
  },
  methods: {
    async createServer() {
      const data = {
        title: this.name,
        count: 50,
      }

      await fetch('/api/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })

      this.servers.push(data)
      this.name = ''
    },
    async remove(id) {
      try {
        const res = await fetch(`/api/server/${id}`, { method: 'DELETE' })
        const result = await res.json();

        console.log(result)

        this.servers = this.servers.filter(item => item.id !== id)
      } catch (error) {
        console.log(error)
      }
    },
  },
  async mounted() {
    const res = await fetch('/api/server')
    this.servers = await res.json()
  },
}

Vue.createApp(App).mount('#app')
