<?php
// connect casa
class Oci_DB {

    private $Connection;

    public function __construct()
    {
        self::Connection();
    }

    public function Connection(){

        DEFINE('HOST','localhost');
        DEFINE('DB','contraloria_sanitaria');
        DEFINE('USER','postgres');
        DEFINE('PASS','1234567');

        $host = HOST;
        $db = DB;
        $user = USER;
        $pass = PASS;
        // $charset_utf8 = 'charset=utf8';
        // $charset_Al = 'charset=AL32UTF8';

        // $option: permite enviar comandos específicos al servidor de la base de datos después de la conexión.
        $option =[
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
        ];

        try {
            $this->Connection = new PDO("pgsql:host=$host;dbname=$db",$user,$pass,$option);
            
            // $this->Connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // $this->Connection = new PDO("pgsql:host=$host;dbname=$db;user=$user;password=$pass");
            
            if(!$this->Connection){
                throw new Exception("Error no hay conexion a BD");

            }
            // else{
            //     echo 'Conectado a BD Postgres contraloria sanitari';
            // }
        } catch (\Exception $e) {
            echo 'ERROR : ' . $e->getMessage(), "\n";
            //throw $th;
        }


    }
    public function getRetornoConn(){
        return $this->Connection;
    }
    public function getCloseConn(){
        $this->Connection = null;
    }
}
//  $db = new Oci_DB();

// connect trabajo

// class Oci_DB {

//     private $Connection;

//     public function __construct()
//     {
//         self::Connection();
//     }

//     public function Connection(){
//         // CONNECT CASA
//         // DEFINE('DB','PRUEBA');
//         // DEFINE('USER','GABRIEL');
//         // DEFINE('PASS','12345');

//         // CONNECT TRABAJO
//         DEFINE('HOST','10.11.9.70');
//         DEFINE('PORT','1521');
//         DEFINE('DB','astromelia');
//         DEFINE('USER','FARMACIA_ALTO_COSTO');
//         DEFINE('PASS','1234567');
//         $c = 0;
//         $tns = "
//         (DESCRIPTION =
//           (ADDRESS = (PROTOCOL = TCP)(HOST = ". HOST .")(PORT =". PORT ." ))
//           (CONNECT_DATA =
//             (SERVICE_NAME = ". DB .")
//           )
//         )";
//         // $charset_utf8 = 'charset=utf8';
//         $charset = 'charset=AL32UTF8';
//         $option = [
//             PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
//             PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
//         ];

//         try {
//             do {
//                 $this->Connection = new PDO("oci:dbname=$tns;$charset",USER,PASS,$option);
            
//                 if(!$this->Connection){
//                     $c++;
//                 }
//                 else{
//                     // echo 'Conectado a BD FAC';
//                     break;
//                 }
//             } while ($c < 20);
            
//             if ($c >= 20) {
//                 throw new Exception("Error no hay conexion a BD");
//             }

//         } catch (\Exception $e) {
//             echo 'ERROR : ' . $e->getMessage(), "\n";
//             //throw $th;
//         }
       
//     }
//     public function getRetornoConn(){
//         return $this->Connection;
//     }
//     public function getCloseConn(){
//         $this->Connection = null;
//     }
// }

//  $db = new Oci_DB();