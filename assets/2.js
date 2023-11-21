const APP_LOG_LIFECYCLE_EVENTS = true;

const webstore  = new Vue({
  el: '#app',
  data: {
    showProduct: true,
    sitename: 'Vue.js 애완용품샵',
    product: {
      id: 1001,
      title: 'Cat Food 25fb',
      decription: 'For your cat <em>GOOD</em> Food!, <br> Organic 25fb Food deth',
      price: 2000,
      image: './assets/images/catfood.jpeg',
      availableInventory: 5,
    },
    cart: []
  },
  computed: {
    cartItemCount: function() {
      return this.cart.length || '';
    },
    canAddToCart: function() {
      return this.product.availableInventory > this.cartItemCount;
    }
  },
  filters: {
    formatPrice: function(price) {
      if (!parseInt(price)) { return ''; }
      if (price > 99999) {
        const priceString = (price / 100).toFixed(2);
        const priceArray = priceString.split('').reverse();
        const index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ",");
          index += 4;
        }
        return '$' + priceArray.reverse().join('');
      } else {
        return '$' + (price / 100).toFixed(2);
      }
    }
  },
  methods: {
    addToCart: function() {
      this.cart.push(this.product.id);
    },
    showCheckout() {
      this.showProduct = this.showProduct ? false : true;
    },
  },
  beforeCreate: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforCreate');
    }
  },
  created: function(){
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('created');
    }
  },
  beforeMount: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforeMount');
    }
  },
  mounted: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('mounted');
    }
  },
  beforeUpdate: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforeUpdate');
    }
  },
  updated: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('updated');
    }
  },
  beforeDestroy: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforeDestroy');
    }
  },
  destroyed: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('destroyed');
    }
  }
});

