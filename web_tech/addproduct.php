<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Product</title>
    <link rel="stylesheet" href="addproduct.css">
</head>
<body>
    <form action="addproduct" method="post">
        <div class="product">
            <h1>Add Product</h1>

            <div class="productcontent">
                <div class="label">

                    <label for="title">Title</label>
                </div>
                <input type="text" id="title" name="title" placeholder="Enter product title">
            </div>

            <div class="productcontent">
                <div class="label">

                    <label for="price">Price</label>
                </div>
                <input type="text" id="price" name="price" placeholder="Enter price">
            </div>

            <div class="productcontent">
                <div class="label">

                    <label for="category">Category</label>
                </div>
                <select id="category" name="category">
                    <option value="">Select Category</option>
                    <option value="shoes">Shoes</option>
                    <option value="pants">Pants</option>
                    <option value="shirts">Shirts</option>
                </select>
            </div>

            <div class="productcontent">
                <div class="label">

                    <label for="image">Image</label>
                </div>
                <input type="file" id="image" name="image">
                
            </div>

            <div class="productcontent">
                
                <textarea id="description" name="description" placeholder=""></textarea>
            </div>

            <div class="saveproduct">
                <button type="submit">Save Product</button>
            </div>
        </div>
    </form>
</body>
</html>
