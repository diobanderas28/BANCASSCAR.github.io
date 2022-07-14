//change time here (in ms)
let time = 50000;
//refresh the page every ... cycles
//let cycle = 100;
//hold loading (in ms)
//let loadingtime = 5000;

//title (tidak terlalu penting)
let title = 'DASHBOARD PRODUCTION REPORT';

//lebar dan tinggi dashboard
let width = 100;
let height = 100;

//untuk ganti link report
let link_report = 'https://app.powerbi.com/reportEmbed?reportId=53b2d890-1133-48ff-9bc2-987813006c69&autoAuth=true&ctid=df225f27-4dfa-4323-b602-4ff986b75ec6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D';

//halaman report (tambah dan kurangi sesuai dengan halaman report)
let hal1 = 'ReportSection20a3cf7d5c57230c02c3';
let hal2 = 'ReportSectione7a713497ed459660982';
let hal3 = 'ReportSection7a639506c154ba0c204e';


//ini jangan diganti
let page_name = '&pageName='; 

//tambah dan kurangi sesuai dengan jumlah halaman report (ini jadi source link report untuk di iframe)
let src1 = link_report+page_name+hal1;
let src2 = link_report+page_name+hal2;
let src3 = link_report+page_name+hal3;

//variables (kurang atau tambah sesuai dengan jumlah halaman dashboard)
let page1 = '<iframe title="'+title+'" width="'+width+'%" height="'+height+'%" src="'+src1+'" loading="eager" frameborder="0" allowFullScreen="true"></iframe>';
let page2 = '<iframe title="'+title+'" width="'+width+'%" height="'+height+'%" src="'+src2+'" loading="eager" frameborder="0" allowFullScreen="true"></iframe>';
let page3 = '<iframe title="'+title+'" width="'+width+'%" height="'+height+'%" src="'+src3+'" loading="eager" frameborder="0" allowFullScreen="true"></iframe>';


//loading pertama
document.getElementById("pages_1").innerHTML = page1;
document.getElementById("pages_2").innerHTML = page2;

//wait loading
//setTimeout(function() {
    //change the page with scroll
    setTimeout(function(){
        document.getElementById("pages_1").innerHTML = '';
        window.location.hash = '#pages_2';
        document.getElementById("pages_3").innerHTML = page3;
    }, time);
    setTimeout(function(){
        document.getElementById("pages_2").innerHTML = '';
        window.location.hash = '#pages_3';
        document.getElementById("pages_1").innerHTML = page1;
    }, time*2);
    setTimeout(function(){
        document.getElementById("pages_3").innerHTML = '';
        window.location.hash = '#pages_1';
        document.getElementById("pages_2").innerHTML = page2;
    }, time*3);

    setInterval(function(){
        setTimeout(function(){
            document.getElementById("pages_1").innerHTML = '';
            window.location.hash = '#pages_2';
            document.getElementById("pages_3").innerHTML = page3;
        }, time);
        setTimeout(function(){
            document.getElementById("pages_2").innerHTML = '';
            window.location.hash = '#pages_3';
            document.getElementById("pages_1").innerHTML = page1;
        }, time*2);
        setTimeout(function(){
            document.getElementById("pages_3").innerHTML = '';
            window.location.hash = '#pages_1';
            document.getElementById("pages_2").innerHTML = page2;
        }, time*3);
    }, time*3);
//}, loadingtime);



/*setInterval(function(){
    clearInterval(ulang);
    setTimeout(function(){
        location.reload();
    }, 3000);
},(time*(5*cycle))+loadingtime);*/