const userClickClass = 'user-is-clicking';
const userTabClass = 'user-is-tabbing';

function isClicking () {
  document.body.classList.add(userClickClass);
  document.body.classList.remove(userTabClass);
}

function isTabbing (e) {
  const keyCode = e.keyCode || e.which;
  if (keyCode === 9) {
    document.body.classList.add(userTabClass);
    document.body.classList.remove(userClickClass);
  }
}

document.onmousedown = isClicking;
document.onkeydown = isTabbing;

function customRules(element) {
  // If element have parent with these classes or IDs
  // the custom focus rule will not be applied for this element.
  const excludedParents = [
    '.modal',
    '.ds-eu-cookie-compliance-banner',
  ];

  const intersection = excludedParents.filter(excludedParent => {
    return element.closest(excludedParent) !== null;
  });

  return !intersection.length;
}

// Alternate jump to element by focus.
let previousElementOffsetTop = 0;

Element.prototype.documentOffsetTop = function () {
  return this.offsetTop + (this.offsetParent ? this.offsetParent.documentOffsetTop() : 0);
};

Element.prototype.scrollIntoCustomPosition = function () {
  if (customRules(document.activeElement)) {
    let documentOffsetTop = this.documentOffsetTop();
    let elementOffsetHeight = document.activeElement.offsetHeight;

    let resultPosition = documentOffsetTop - (window.innerHeight / 2) + (elementOffsetHeight / 2);
    if (Math.abs(previousElementOffsetTop - documentOffsetTop) > 100 || elementOffsetHeight > 100) {
      window.scrollTo(0, resultPosition);
      previousElementOffsetTop = documentOffsetTop;
    }
  }
};

function jumpFocusAlt(e) {
  let keyCode = e.keyCode || e.which;
  if (keyCode === 9) {
    if (document.body.classList.contains('user-is-tabbing')) {
      document.activeElement.scrollIntoCustomPosition();
    }
  }
}

window.addEventListener('keyup', jumpFocusAlt);
