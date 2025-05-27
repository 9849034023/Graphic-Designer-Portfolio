<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="form.css">
</head>

<body>
    <form action="server.php" method="post">
        <div class="container">
            <div class="Form">
                <div class="form-container">
                    <input type="checkbox" name="specify[]" value="$500/for 30 Days">
                    <p><a style="color: green;text-decoration: none; "  href="">$500</a> for 30 Days</p>
                </div>
                <div class="form-container">
                    <input type="checkbox" name="specify[]" value="$300/Monthly Recuring">
                    <p><a style="color: green;text-decoration: none; "  href="">$300</a> / Monthly Recuring</p>
                </div>
                <div class="job-title">
                    <h3>Job Title</h3>
                    <input type="text" name="Title" value="" placeholder=" UI/UX Designer">
                </div>
                <div class="company">
                    <h3>Company</h3>
                    <input type="text" name="company" value="" placeholder="  eg.Facebook, Inc.">
                </div>
                <div class="job-type">
                    <h2>Job Type</h2>
                    <div style="display: flex;">
                        <input type="radio" name="jobtype" value="Full Time">
                        <p>Full Time</p>
                    </div>
                    <div style="display: flex;">
                        <input type="radio" name="jobtype" value="Part Time">
                        <p>Part Time</p>
                    </div>
                    <div style="display: flex;">
                        <input type="radio" name="jobtype" value="Freelanceer">
                        <p>Freelancer</p>

                    </div>
                    <div style="display: flex;">
                        <input type="radio" name="jobtype" value="Internship">
                        <p>Internship</p>

                    </div>
                    <div style="display: flex;">
                        <input type="radio" name="jobtype" value="Temporary">
                        <p>Temporary</p>
                    </div>
                    <div class="location">
                        <h2>Location</h2>
                        <input type="text" name="location" value="" placeholder="  Western City, UK" name="" id="">
                    </div>
                    <div class="Jobdescription">
                        <h2>Job Description</h2>
                        <input type="text" name="Jobdescription" id="" style="vertical-align: top;">
                    </div>
                    <br>
                    <div>
                        <label for="">Select Type</label>
                        <select name="mytype" id="">
                            <option  value="">....Select One....</option>
                            <option  value="shoes">Shoes</option>
                            <option  value="pants">Pants</option>
                            <option  value="shirts">Shirts</option>
                        </select>
                    </div>
                    <br>
                    <div>
                        <button>Post</button>
                    </div>
                   

                </div>
            </div>
        </div>

    </form>

</body>

</html>