const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
function openmenu() {
  if(sidebar.style.display == 'none'){
  sidebar.style.display='block';
  }
  else{
      sidebar.style.display='none';
  }
}

const tournaments = document.getElementById('Tournaments');
const Results = document.getElementById('Results');
const Rooms = document.getElementById('Room-Details');

function Tournament(){
      tournaments.style.display='block';
      Results.style.display='none';
      Rooms.style.display='none';
}
function Result(){
      Results.style.display='block';
      tournaments.style.display='none';
      Rooms.style.display='none';
}
function Room(){
      Rooms.style.display='block';
      Results.style.display='none';
      tournaments.style.display='none';
}
