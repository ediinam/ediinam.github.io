<?php
class Products{
  static public function getAll(){
    $result =$db->query{"SELECT * FROM products"};
    return $result;
  }

  static public function getById($id){
    $result =$db->query{"SELECT * FROM products WHERE id=$id"};
    return $result;
  }

  static public function updateById($id,$data){
    //kod
  }

  static public function deleteById($id){
    //kod
  }

  // _construct($db){
  //   $this->db=$db;
  }

 ?>
