window.addEventListener("DOMContentLoaded", Event =>{
    function mobil_menusu(){
        const kontrol_et = document.body.querySelector("nav");
        if (!kontrol_et) {
            return;
        } 
        else if(window.scrollY === 0){
            kontrol_et.classList.remove("mobil_versiyon");
        }
        else{
            kontrol_et.classList.add("mobil_versiyon");
        }
    }
    mobil_menusu();


    // todo buraya kadarki kodları sırf scroll biraz aşağı çekilince menümüzün o saydam siyah rengi tam siyaha dönüşsün diye yaptık. ve sırf o scroll olayıında çalışması için "customized.css" dosyasında   "mobil_versiyon" isimli bir seçiciye çeşitli özellikler yazdık. Zaten biz bu yazdığımzı javascript kodları ile de o "mobil_versiyon" isimli class'ın koşullar sağlandığında (sayfanın aşağı doğru gidildiği an) nav etiketine eklenmesini söyledik. Böylece o özellikler sadece koşul karşılandığında ilgili yere eklenecek ve çalışacaktır.



    

    document.addEventListener("scroll", mobil_menusu);
    const benim_menu = document.body.querySelector("nav");
    if(benim_menu){
        new bootstrap.ScrollSpy(document.body,{
            target: "nav",
            offset: 74,
        })
    }
})


// * hatırladığımız üzere biz bu sitemizi tek sayfa halinde tasarladık, dolayısıyla sitemizdeki tüm içeriklier yukarıdan aşağıya doğru tek bir sayfada sıralanmış vaziyettedir. Ayrıca biz sitemizi çeşitli kısımlara ayırmıştık (services, about, contact vb.) , şimdi istiyoruz ki kullanıcı scroll ile sayfayı aşağı kaydırıp ilgili kısma gelince o kısımla ilgili yapılmış buton (nav-link) sanki o butona hover yapıyormuşuz gibi renklensin. Bunun için hem şu yukarıdaki kodu yazmamız gerekir hem de onun üstündeki "mobil_menusu();" fonskiyonunun yazmalıyız, bu ikisi birbirleriyle bağlantılı çalışıyor. Ayrıca bir de "customized.css" sayfasını kullanarak 






var canvas_butonlari = document.querySelectorAll(".btn-close-canvas");

for (let i = 0; i < canvas_butonlari.length; i++) {
    canvas_butonlari[i].addEventListener("click", function(){
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });    
}

// * Bu kodları ise şunun için yazdık: Hatırlıyorsak index.html sayfası üzerinden sitenin en üstündeki menüyü bir bootstrap bileşeni olan "offcanvas" ın içinde yaptık. "offcanvas" kullanmamızın sebebi ise sitemizin mobil genişliğe göre veya masaüstü genişliğpe göre farklı bir menüyü hızlıca oluşturabilmekti. Gelelim asıl meseleye, bildiğimiz üzere offcanvas bileşeni yazdığımız çeşitli bootstrap class'ları sayesinde mobil görünmündeki menüyü bize getirince ve biz o menüden bir butona basılınca butondaki ilgili bağlantı yeri açılıyordu, bu ksıımda bir sorun yok fakat ilgili bağlantının butonuna tıkladığımda hem sayfa açlsın hem de o an görünen "offvanvas" bileşeni kaldırılsın istiyoruz. Bunu yapmak için yukarıdaki kodları yazmalı ve offcanvas'ı kapatmaya yarayan o 'data-bs-dismiss="offcanvas" ismindeki kapatma butonunaa basılması gerektiğini söylemeliyiz. 

// * Bu sayede sitemizin menüsü mobil görünüme geçince ve biz oradan herhangi bir butona basınca, offcanvas'ı kapatmak için tekrar sağ üstte oluşturduğumuz kapat butonuna basmak zorunda değiliz. Biz mobil görünümde menüdeki herhangi bir butona "click" olayını gerçekleştirdiğimizde sağ üstteki çarpı işaretiyle yaptığımız kapat butonu da otomatik çalıştırılıyor, böylelikle mobil menüdeki butonlara hernangi bir tıklama yaptığımızda hem butonla bağlantılı sayfa açılıyor hem de offcanvas kapanıyor. yani menü gidiyor. */

// ************************************************************************************************




// Bu kısımda ise .t-image class'lı resim kapsayıcısı olan div etiketlerine tarayıcı penceresinin genişliğine göre değişken değerler vermeye çalışıyoruz. Bunu media query kullanmadan sadece javascript ile yapmayı denedik, lakin araştırmalarımız sonucunda bu işlemi yapmanın daha kolay ve daha kısa bir yolunu bulup scss dosyasından yaptık.O yüzden bu kodları yoruma aldık. 


// var genislik = window.innerWidth;

// var img_containers = document.querySelectorAll(".t-image");
// var tab_panel = document.querySelectorAll(".t-panel");
// document.documentElement.style.setProperty('boyutlandir', '50px');

// window.onresize = function(){

//     if(window.innerWidth <= 576){
        
//         img_containers.forEach(function(eleman){
//                 eleman.style.width = "100px";
//                 eleman.style.height = "100px";
//             });
        
//         tab_panel.forEach(function(eleman){
//             // eleman.style.paddingLeft = (img_containers[0].style.width + (img_containers[0].style.width * 0.20));

//         });
        
        
//     }
//     else if(window.innerWidth <= 768){
        
//         img_containers.forEach(function(eleman){
//                 eleman.style.width = "125px";
//                 eleman.style.height = "125px";
//             });
        
//     }
//     else if(window.innerWidth <= 992){
        
//         img_containers.forEach(function(eleman){
//                 eleman.style.width = "150px";
//                 eleman.style.height = "150px";
//             });
//     }
//     else{
        
//         img_containers.forEach(function(eleman){
//                 eleman.style.width = "200px";
//                 eleman.style.height = "200px";
//             });
        
//     }
// }





  

