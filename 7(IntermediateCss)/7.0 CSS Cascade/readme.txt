position 
    li{
        color:red;
        color:blue;
    }
    In this css lower one is working (color:blue)

specifity
    li{
        color:blue;  (4)
    }
    .firstClass{color:red;} (3)
    li[draggable]{color:purple;} (2)
    #first-Id{color:orange;}  (1)

Type

    <link rel="stylesheet" href="stylesheet.css"> (3)
    <style></style> (2)
    <h1 style="">hello</h1> (1)


Importance

    color:red;
    color:green !important;  (1)


