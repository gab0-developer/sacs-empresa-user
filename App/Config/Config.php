<?php

$Vglobal = $_SERVER; 

$FolderPath = dirname($Vglobal['SCRIPT_NAME']);
$UrlPath = $Vglobal['REQUEST_URI'];
$Url = substr($UrlPath,strlen($FolderPath)) ;

DEFINE('URL',$Url);

// echo URL;
// var_dump($folderPath);
