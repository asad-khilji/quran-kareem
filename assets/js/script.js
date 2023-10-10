// javascript code for the <header>
const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <header>
        <a href="index.html"><h1>Quran</h1></a>
        <div class="search">
        <input type="text" placeholder="Search for..." id="searchbar" onkeyup="search_animal()" name="search">
            <button class="btn">Search</button>
        </div>
    </header>
    `;
}

createHeader();

// javascript code for the <nav>
const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <nav>
    <div class="dropdown">
    <button class="dropbtn">Juz 1-5</button>
    <div class="dropdown-content">
      <a href="juz-1.html">Juz 1</a>
      <a href="#">Juz 2</a>
      <a href="#">Juz 3</a>
      <a href="#">Juz 4</a>
      <a href="#">Juz 5</a>
    </div>
  </div>

  <div class="dropdown">
    <button class="dropbtn">Juz 6-10</button>
    <div class="dropdown-content">
      <a href="#">Juz 6</a>
      <a href="#">Juz 7</a>
      <a href="#">Juz 8</a>
      <a href="#">Juz 9</a>
      <a href="#">Juz 10</a>
    </div>
  </div>

  <div class="dropdown">
    <button class="dropbtn">Juz 11-15</button>
    <div class="dropdown-content">
      <a href="#">Juz 11</a>
      <a href="#">Juz 12</a>
      <a href="#">Juz 13</a>
      <a href="#">Juz 14</a>
      <a href="#">Juz 15</a>
    </div>
  </div>

  <div class="dropdown">
    <button class="dropbtn">Juz 16-20</button>
    <div class="dropdown-content">
      <a href="#">Juz 16</a>
      <a href="#">Juz 17</a>
      <a href="#">Juz 18</a>
      <a href="#">Juz 19</a>
      <a href="#">Juz 20</a>
    </div>
  </div>

  <div class="dropdown">
    <button class="dropbtn">Juz 21-25</button>
    <div class="dropdown-content">
      <a href="#">Juz 21</a>
      <a href="#">Juz 22</a>
      <a href="#">Juz 23</a>
      <a href="#">Juz 24</a>
      <a href="#">Juz 25</a>
    </div>
  </div>

  <div class="dropdown">
    <button class="dropbtn">Juz 26-30</button>
    <div class="dropdown-content">
      <a href="#">Juz 26</a>
      <a href="#">Juz 27</a>
      <a href="#">Juz 28</a>
      <a href="#">Juz 29</a>
      <a href="#">Juz 30</a>
    </div>
  </div>
</nav>
    `;
}

createNav();

// javascript code for the <footer>
const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer>

    </footer>
    `;
}

createFooter();

// javascript code for the search input
const createOl = () => {
  let ol = document.querySelector('ol');

  ol.innerHTML = `
  <ol id='list'> 
        <a href="page-1.html"><li class="pages">Page 1</li></a>
        <a href="page-2.html"><li class="pages">Page 2</li></a>
    </ol> 
  `;
}

createOl();


// JavaScript search code 
function search_animal() { 
  let input = document.getElementById('searchbar').value 
  input=input.toLowerCase(); 
  let x = document.getElementsByClassName('pages'); 
    
  for (i = 0; i < x.length; i++) {  
      if (!x[i].innerHTML.toLowerCase().includes(input)) { 
          x[i].style.display="none"; 
      } 
      else { 
          x[i].style.display="list-item";                  
      } 
  } 
} 