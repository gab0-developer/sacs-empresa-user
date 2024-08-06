<?php

class Routers {

    private $controller;
    private $method;
    private $folder;

    public function __construct()
    {
        self::MatchRouter();
    }

    public function MatchRouter(){
        $url = explode('/',URL);

        $this->folder = !empty($url[1]) ? $url[1] : 'PageHome';
        $this->controller = !empty($url[2]) ? $url[2] : 'Page';
        $this->method = !empty($url[3]) ? $url[3] : 'Deploy';

        $this->controller = $this->controller . 'Controller';
        
        // require_once __DIR__ . '/Controllers/' . $this->controller . '.php';
        require_once __DIR__ . '/../Controllers/' .$this->folder. '/' . $this->controller . '.php';
    }

    public function Run(){
        // Conexion a BD
        $database = new Oci_DB();
        $conexion = $database->getRetornoConn();
        
        $controlador = new $this->controller($conexion);
        $metodo = $this->method;
        $controlador->$metodo();
    }
}