<?php 

include('config.pg.ini.php');

$conn = pg_connect($host." ".$dbname." ".$user." ".$password);
if (!$conn){
    echo "Error connecting to ".$dbname."<br>";
    exit;
}else{
    //echo "Connecting to ".$dbname."<br>";
}

?>