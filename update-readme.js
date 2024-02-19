const fs = require('fs');

const images = ['KMADS1.png', 'KMADS2.png', 'KMADS3.png', 'KMADS4.png', 'KMADS5.png'];

const carouselHTML = `
<div class="carousel" style="width: 100%; overflow: hidden; position: relative;">
  ${images.map(image => `<img src="${image}" class="slide" style="width: 100%; display: none;" />`).join('\n')}
</div>
<button id="prevBtn">Previous</button>
<button id="nextBtn">Next</button>
`;

fs.writeFileSync('README.md', carouselHTML);
