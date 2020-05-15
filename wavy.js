(() => {
  let dummy = document.createElement("div");
  dummy.innerHTML = `
    <div class="wavy__container">
      <svg class="wavy__svg" width="100%" height="100%">
        <filter id="wavy__filter" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
        <feTurbulence type="turbulence" baseFrequency="0.003 0.004" numOctaves="5" seed="01" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="wavy__turbulence2"/>
        <feColorMatrix class="wavy__color-matrix" type="hueRotate" values="0" x="0%" y="0%" width="100%" height="100%" in="wavy__turbulence2" result="wavy__colormatrix"/>
        <feDisplacementMap in="SourceGraphic" in2="wavy__colormatrix" scale="40" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" result="wavy__displacementMap2"/>
      </filter>
      </svg>
    </div>

    <style>
      .wavy__svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        pointer-events: none;
      }
      body {
        filter: url('#wavy__filter');
      }
      .wavy__container {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
      }
    </style>
  `;

  document.body.appendChild(dummy);

  let val = 0;
  function tick() {
    requestAnimationFrame(tick);
    let matrix = document.querySelector(".wavy__color-matrix");
    val++;
    matrix.setAttribute("values", val);
  }
  tick();
})();
