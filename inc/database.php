<?php
 $conn = mysqli_connect('localhost', 'yukako098', 'Yukako0524', 'sweets');

  // ceck if it's connect or not.
  if(mysqli_connect_error()){
    echo "Something went wrong: " .mysqli_connect_error();
  }
