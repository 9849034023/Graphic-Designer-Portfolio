<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
  
    <style>
        .form {
            display: flex;
            align-items: center;
        }
        .form b {
            width: 150px;
            text-align: left;
            margin-right: 10px;
        }
        button {
            margin-left: 160px;
            height: 35px;
            width: 100px;
            border-radius: 5px;
            background-color: rgb(219, 219, 87);
            font-weight: bold;
        }
        table {
            width: 50%;
            margin: 20px 0;
            font-size: 18px;
            text-align: left;
            border: 2px solid black;
        }
         th ,td {
            border: 2px solid black;
            padding: 10px ;
        }  
        th {
            background-color: lightgray;
        }
    </style>
</head>
<body>

    <form action="register_server.php" method="post">
        <h1>User Registration</h1>
        <span class="form"><b>First Name* </b><input type="text" name="first" required></span><br><br>
        <span class="form"><b>Last Name*</b><input type="text" name="second" required></span><br><br>
        <span class="form"><b>E-mail*</b><input type="email" name="email" required></span><br><br>
        <span class="form"><b>Username*</b><input type="text" name="user" required></span><br><br>
        <span class="form"><b>Password*</b><input type="password" name="password" required></span><br><br>
        <span class="form"><b>Confirm Password*</b><input type="password" name="cpassword" required></span><br><br>

        <button type="submit" >Register</button>
    </form>

    <section>
        <h3>User List</h3>

        <?php
       
        $con = mysqli_connect('localhost', 'root', '', 'database');

        
        if (!$con) {
            die("DB Connection failed: " . mysqli_connect_error());
        }

        
        $sel = "SELECT * FROM raju1";
        $run_query = mysqli_query($con, $sel);

        
        if (!$run_query) {
            die("Query Failed: " . mysqli_error($con));
        }
        ?>

        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>email</th>
                <th>usrname</th>
                <th>password</th>
            </tr>

            <?php
            while ($row = mysqli_fetch_array($run_query)) {
               echo" <tr>
                        <td>{$row['first_name']}</td>
                        <td>{$row['last_name']}</td>
                        <td>{$row['email']}</td>
                        <td>{$row['username']}</td>
                        <td>{$row['password']}</td>
                      </tr>";
            }
            ?>
        </table>

        <!-- <?php mysqli_close($con); ?> -->

    </section>

</body>
</html>