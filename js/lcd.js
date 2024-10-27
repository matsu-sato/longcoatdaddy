//alert(1);


//実習　チャレンジ

// jQueryを使って画面を操作してみます🤗
// $ ←これがjQueryになります！🤗
$("button").on("click", function () {
    // 操作する記述🤗
    //   $("h1").html("きんぱつかのみ!!!");
    //   $("h1").css("color", "yellow");
    //   $("h1").fadeOut(3000);
    //   $("h1").fadeIn(3000);

    var num = Math.floor(Math.random() * 6);
    console.log(num, "箱の中身");


    if (num === 0) {
        console.log("おまえは、肉うどんです")
        $("h1").html("おまえは、肉うどんです");
        $("h1").css("color", "red");
        $("h1").css("size", "30px");

    } else if (num === 1) {
        console.log("あなたは、さいです")
        $("h1").html("あなたは、さいです");
        $("h1").css("color", "black");

    } else if (num === 2) {
        console.log("あなたは、いるかです")
        $("h1").html("あなたは、いるかです");
        $("h1").css("color", "black");

    } else if (num === 3) {
        console.log("あなたは、かもしかです")
        $("h1").html("あなたは、かもしかです");
        $("h1").css("color", "black");

    } else if (num === 4) {
        console.log("あなたは、かにです")
        $("h1").html("あなたは、かにです");
        $("h1").css("color", "black");
      
    } else if (num === 5) {
        console.log("あなたは、わにです")
        $("h1").html("あなたは、わにです");
        $("h1").css("color", "black");        

    }


    // この下は消さない🤗
});