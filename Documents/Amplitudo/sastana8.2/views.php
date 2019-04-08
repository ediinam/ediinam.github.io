<?php
class View{
  public static function render($path, $data){
    include "./".$path. ".view.php";
  }

  public static function json($data){
    echo json_encode($data);
  }
}

 ?>
