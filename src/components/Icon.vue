<template>
  <span class="icons d-inline-flex" :style="{ width: `${size}` }">
    <svg
      v-if="name === 'ycode-stroke'"
      :width="size"
      :height="size"
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Icons/16/ycode"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          :id="color"
          d="M7.97610223,0 L7.97610223,3.90585301 L4.376,5.985 L8.769,8.524 L15.7243601,4.50067566 L15.7243601,8.41018114 L2.62344064,15.9904444 L2.60691507,16 L2.58878753,15.9884771 L1,14.980891 L1,11.1744339 L2.60278367,12.0928828 L5.344,10.505 L1,7.93933993 L1,4.03583677 L7.97610223,0 Z M14.656381,6.35247998 L2.60536175,13.3252576 L2.06797909,13.0173193 L2.06797909,14.3935494 L2.63231476,14.751443 L14.656381,7.79425283 L14.656381,6.35247998 Z M2.068,5.887 L2.06828104,7.32978355 L2.06797909,7.32990627 L6.404,9.892 L7.677,9.156 L7.67824927,9.12682989 L2.068,5.887 Z M6.90812314,1.85167347 L2.06797909,4.65180895 L2.446,4.87 L3.31,5.369 L6.90812314,3.28970119 L6.90812314,1.85167347 Z"
          id="y-stroke"
          fill="#FFFFFF"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>

    <svg
      v-if="name === 'ycode-filled'"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Symbols"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Sidebar" transform="translate(-30.000000, -30.000000)">
          <g id="Ycode">
            <g transform="translate(30.000000, 30.000000)">
              <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
              <path
                d="M11.4241533,0 L11.4241533,5.85877951 L6.024,8.978 L12.6155735,12.7868008 L10.951,13.749 L23.0465401,6.75101349 L23.0465401,12.6152717 L3.39516096,23.9856666 L3.3703726,24 L3.34318129,23.9827156 L0.96,22.4713365 L0.96,16.7616508 L3.36417551,18.1393242 L7.476,15.76 L0.96,11.9090099 L0.96,6.05375516 L11.4241533,0 Z"
                :id="color"
                fill="#000000"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    size: {
      default: 16,
    },
    name: {},
    color: {},
    color2: {},
  },
  data() {
    return {};
  },
};
</script>
