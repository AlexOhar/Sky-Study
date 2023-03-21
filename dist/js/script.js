"use strict";

const slider = document.querySelector('.firstScreen_slider'),
    slideFirst = document.querySelector('.firstScreen_slideOne'),
    slideSecond = document.querySelector('.firstScreen_slideTwo'),
    rotateBlock = document.querySelector('.programming'),
    slideThree = document.querySelector('.firstScreen_slideThree'),
    dropDown = document.querySelector('.dropDown'),
    hamburger = document.querySelector('.dropDown_hamburger'),
    hamburgerLink = document.querySelectorAll('.link_hamburger'),
    hamburgerActive = document.querySelector('.hamburger_active');

slideSecond.addEventListener('mouseover', () => {
    slideFirst.classList.toggle('active');
    slideSecond.classList.toggle('active');
    slider.classList.toggle('slider-step2');
});
slideSecond.addEventListener('mouseout', () => {
    slideFirst.classList.toggle('active');
    slideSecond.classList.toggle('active');
    slider.classList.toggle('slider-step2');
});
slideThree.addEventListener('mouseover', () => {
    slideFirst.classList.toggle('active');
    slideThree.classList.toggle('active');   
    slider.classList.toggle('slider-step3'); 
});
slideThree.addEventListener('mouseout', () => {
    slideFirst.classList.toggle('active');
    slideThree.classList.toggle('active');
    slider.classList.toggle('slider-step3'); 
});

if (screen.width < 993) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active'),
        dropDown.classList.toggle('close');
    });
    if(hamburger.classList.contains('active')) {
        hamburgerActive.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active'),
            dropDown.classList.toggle('close');
        });
    }
}

const wrapper = document.querySelector('.choosingProfession_categories'),
    line = document.querySelector('.moveLine'),
    blockLine = document.querySelector('.choosingProfession_line');
console.log(wrapper.offsetWidth);
blockLine.style.width =`${wrapper.offsetWidth}px`; // - wrapper.offsetWidth * 0.33
console.log(blockLine);

function handleHover(e) {
  console.log(e.toElement.offsetWidth);
  if (e.toElement.outerText == 'All Categories') {
    if (screen.width > 1800) {
      line.style.left = '2%';
      let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
      line.style.width = `${size}px`;
    } else if (screen.width > 1400) {
      line.style.left = '1%';
      let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
      line.style.width = `${size}px`;
    } else if (screen.width > 1200) {
      line.style.left = '0%';
      let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
      line.style.width = `${size}px`;
    }
    
  } else if (e.toElement.outerText == 'Testing') {
    line.style.left = '21%';
    let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
    line.style.width = `${size}px`;
  } else if (e.toElement.outerText == 'Programming') {
    line.style.left = '33%';
    let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
    line.style.width = `${size}px`;
  } else if (e.toElement.outerText == 'Marketing') {
    line.style.left = '52%';
    let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
    line.style.width = `${size}px`;
  } else if (e.toElement.outerText == 'Design') {
    line.style.left = '67%';
    let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
    line.style.width = `${size}px`;
  } else if (e.toElement.outerText == 'Management') {
    line.style.left = '79%';
    let size = e.toElement.offsetWidth - e.toElement.offsetWidth * 0.1;
    line.style.width = `${size}px`;
  }
}
function handleOut() {
  if (screen.width > 1800) {
    line.style.left = '2%'
    line.style.width = `200px`;
  } else if (screen.width > 1400) {
    line.style.left = '1%'
    line.style.width = `200px`;
  } else if (screen.width > 1200) {
    line.style.left = '0%'
    line.style.width = `200px`;
  } else if (screen.width > 992) {
    line.style.left = '2%'
    line.style.width = `165px`;
  } else if (screen.width > 768) {
    line.style.left = '0%'
    line.style.width = `144px`;
  } else {
    line.style.left = '0%'
  }
}
wrapper.addEventListener('mouseover', handleHover);
wrapper.addEventListener('mouseout', handleOut);

