  let projectIndexes = {
    project1: 1,
  }
  showDivs("project1", projectIndexes.project1);

  
  // Image library 
  function plusDivs(project, n) {
    showDivs(project, projectIndexes[project] += n);
  }
  
  function showDivs(project, index) {
    let i;
    let x = document.getElementById(project).getElementsByClassName("slides");
    if (index > x.length) { index = 1 }
    if (index < 1) { index = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[index - 1].style.display = "block";
    // document.getElementById(project).getElementsByClassName("pagination")[0].innerText = index + ' / ' + x.length;
    projectIndexes[project] = index;
    let elements = document.getElementById(project).querySelector('.imgslide').children;
    let imgNames = [];
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].src !== undefined) {
        imgNames.push(elements[i].alt);
        document.getElementById(project).getElementsByClassName("img-name")[0].innerText = imgNames[index - 1];
      }
    }
  }
  