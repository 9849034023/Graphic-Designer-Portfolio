<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="cw1server.php" method ="post">
    <span class="form"><b>item </b><input type="text" name="item" required></span><br><br>
    <span class="form"><b>price </b><input type="text" name="price" required></span><br><br>
    <button>register</button>
    </form>
</body>
<section style="display :flex; size:100%;">
    
<?php
       
       $con = mysqli_connect('localhost', 'root', '', 'demo');

       
       if (!$con) {
           die("DB Connection failed: " . mysqli_connect_error());
       }

       
       $sel = "SELECT * FROM shop";
       $run_query = mysqli_query($con, $sel);

       
       if (!$run_query) {
           die("Query Failed: " . mysqli_error($con));
       }
       ?>

    

           <?php
           while ($row = mysqli_fetch_array($run_query)) {
           ?>


     <div style ="width:40%;background-color:yellow;padding:8px;">
        <h2 style="color:blue"><?php echo $row['item']?></h2>
        <p>hello how was the product</p>
        <p  style="color:red">RS <b><?php echo $row['price'] ?></b></p>
     </div>
           
            
           <?php }
           ?>
      
</section>
</html>