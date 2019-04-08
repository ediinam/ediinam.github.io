<?php

include "products.php";
$router=new Router();
  $router->get("/products",authenticate(), function(){ //authenticate provjerava prije requesta
      $products=Products::getAll();
      View::render("products");
  });

  $router->get("/products/:id",authenticate(), function(){ //ako nema authenticate moze se pristupiti podacima
      $request["params"]["id"];
      $products=Products::getById($id);
      View::render("single-product",$products);
  });

  $router->post("/products", function(){

  });
  $router->put("/products/:id", function(){

  });
  $router->delete("/products/:id", function(){

  });
 ?>
