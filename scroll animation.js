const contentsAll = document.querySelectorAll('.scroll-content-1,.scroll-content-2');


function checkContents() {
  const triggerBottom = window.innerHeight / 5 * 4; // 80% of the viewport height

  contentsAll.forEach(content => {
    const boxTop = content.getBoundingClientRect().top;

    if(boxTop < triggerBottom) {
      content.classList.add('show');
    } 
    // else {
    //   content.classList.remove('show');
    // }
  });
}


window.addEventListener('scroll', checkContents);

// Run the function once to check initial positions
checkContents();
