$(document).ready(function(){
    $("#Newsletter").click(function(){
        $("#alert").removeClass("d-none");
        window.scrollTo(0, 0)
        const nama = $("#inputnama").val();
        $("#alerttext").html("terimakasih telah Berlangganan " + nama )
    });
    
    
    $("#tekan").click(function(event){
        $("#kedua").removeClass("d-none");
        event.preventDefault()
        window.scrollTo(0, 0)
        const first = $("#firstname").val();
        const last = $("#lastname").val();
        const addr = $("#address").val();
        $("#box").addClass("d-none");
        
        $("#hasil").html("Terima Kasih " + first + " " +last );
        $("#hasil2").html(" Pesanan anda akan segera di kirim ke  " +  addr )
        
        
    });
    
    $("#gambar img").click(function(){
        // $("#price").addClass("d-none")
        window.scrollTo(0, 0)
        const brgambar = $(this).attr("src");
        $("#main").attr("src" ,brgambar);
        $("#main").css("width ","600px");
        // $("#price1").html("Cangkir");
        // $("#price2").html("mangkok");
    });

    // $("#gambar pre").click(function(){
    //     const judul =$(this).addClass("Card-text");


    // });
    
    // $("#var1").click(function(e){
    //  e.preventDefault();
    //  const image = $("#var1").attr("src");
    //  $("#main").attr("src",image); 
    //  $("#main").css("width ","200px")
    // });
    
    
});




