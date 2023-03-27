<template>
  <ProductsCom />
</template>
<script>
import ProductsCom from "@/components/products/ProductsCom.vue";
export default {
  name: "ProductsView",
  components: {
    ProductsCom,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
        {
          id: 9,
        },
      ],
    };
  },
};
</script>
<style>
.products {
  direction: rtl;
  color: #111a53;
}
.image {
  display: block;
  width: 100%;
  height: auto;
}

.products .main-title {
  color: #2d2d2d;
  text-align: center;
  text-transform: capitalize;
  padding: 0.7em 0;
}

.products .containerr {
  padding: 1em 0;
  float: left;
  width: 50%;
}
@media screen and (max-width: 640px) {
  .products .containerr {
    display: block;
    width: 100%;
  }
  .buttoncss {
    width: 100%;
  }
  .products .articles_img {
    height: 329px;
  }
}

@media screen and (min-width: 900px) {
  .products .containerr {
    width: 33.33333%;
  }
  .products .content-details h3 {
    color: #fff;
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }
  .articles_img {
    height: 300px;
  }
}

.containerr .title {
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 10px;
}

.products .content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.products .content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.products .content:hover .content-overlay {
  opacity: 1;
}

.products .content-image {
  width: 100%;
}

.products .content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.products .content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.products .content-details p {
  color: #fff;
  font-size: 0.8em;
}

.products .fadeIn-bottom {
  top: 80%;
}

.products .fadeIn-top {
  top: 20%;
}

.products .fadeIn-left {
  left: 20%;
}

.products .fadeIn-right {
  left: 80%;
}
</style>
