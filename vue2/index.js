const up = Vue.createApp({
  data() {
    return { up: 0}
  },
  
  methods: {
    increment() {
      // `this` will refer to the component instance
      this.up++
      
    }
  }
})
const upvote = up.mount('#up')
upvote.increment()


const down = Vue.createApp({
  data() {
    return { down: 0}
  },
  
  methods: {
    increment() {
      // `this` will refer to the component instance
      this.down++
      
    }
  }
})
const downvote = down.mount('#down')
upvote.increment()
