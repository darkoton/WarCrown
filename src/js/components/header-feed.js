const feed = document.querySelector('.feed__main');
const offset = -1 * ((feed.scrollWidth - feed.clientWidth) / feed.clientWidth).toFixed(2) * 100;

feed.style.animationDuration = `${-1 * offset * 0.2}s`;

const cssAnimation = document.createElement('style');
cssAnimation.type = 'text/css';

const animationScrolling = document.createTextNode(`
      @keyframes scrolling {
        0%{
          transform: translateX(0);
        }
        100%{
          transform: translateX(${offset}%);
        }
      }
  `);

cssAnimation.appendChild(animationScrolling);
document.getElementsByTagName('head')[0].appendChild(cssAnimation);
