// buraya mümkünse menü ile ilgili bazı fonksiyonlar eklenecek
// ************************************************************************************************


var canvas_butonlari = document.querySelectorAll(".btn-close-canvas");

for (let i = 0; i < canvas_butonlari.length; i++) {
    canvas_butonlari[i].addEventListener("click", function(){
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });    
}

// * Bu kodları ise şunun için yazdık: Hatırlıyorsak index.html sayfası üzerinden sitenin en üstündeki menüyü bir bootstrap bileşeni olan "offcanvas" ın içinde yaptık. "offcanvas" kullanmamızın sebebi ise sitemizin mobil genişliğe göre veya masaüstü genişliğpe göre farklı bir menüyü hızlıca oluşturabilmekti. Gelelim asıl meseleye, bildiğimiz üzere offcanvas bileşeni yazdığımız çeşitli bootstrap class'ları sayesinde mobil görünmündeki menüyü bize getirince ve biz o menüden bir butona basılınca butondaki ilgili bağlantı yeri açılıyordu, bu ksıımda bir sorun yok fakat ilgili bağlantının butonuna tıkladığımda hem sayfa açlsın hem de o an görünen "offvanvas" bileşeni kaldırılsın istiyoruz. Bunu yapmak için yukarıdaki kodları yazmalı ve offcanvas'ı kapatmaya yarayan o 'data-bs-dismiss="offcanvas" ismindeki kapatma butonunaa basılması gerektiğini söylemeliyiz. 

// * Bu sayede sitemizin menüsü mobil görünüme geçince ve biz oradan herhangi bir butona basınca, offcanvas'ı kapatmak için tekrar sağ üstte oluşturduğumuz kapat butonuna basmak zorunda değiliz. Biz mobil görünümde menüdeki herhangi bir butona "click" olayını gerçekleştirdiğimizde sağ üstteki çarpı işaretiyle yaptığımız kapat butonu da otomatik çalıştırılıyor, böylelikle mobil menüdeki butonlara hernangi bir tıklama yaptığımızda hem butonla bağlantılı sayfa açılıyor hem de offcanvas kapanıyor. yani menü gidiyor. */

// ************************************************************************************************
/* Menüde yer alan tüm bağlantıların target="_self" özelliğiyle,
  kalan diğer tüm bağlantıların target="_blank" özelliğiyle açılması */

let butunButonlar = document.getElementsByTagName("a");

for (let i = 0; i < butunButonlar.length; i++) {
    butunButonlar[i].setAttribute("target", "_blank");
}



let menuButonlari = document.getElementById("mainNavbar").getElementsByTagName("a");

// ? burada ise bir htmlCollections nesnesini kaç farklı döngüyle alabiliriz onu test ettik,
// ? tüm testler yukarıdaki "let menuButonlari" değişkeni baz alınarak yapılmıştır.

// todo 1. Yöntem
// for (let i = 0; i < menuButonlari.length; i++){
//     menuButonlari[i].setAttribute("target","_self");

// }

// todo 2. Yöntem
// for (const i in menuButonlari) {
//     menuButonlari[i].setAttribute("target", "_self");
// }

// todo 3. Yöntem

for (const eleman of menuButonlari) {
    eleman.setAttribute("target", "_self");
}

// ************************************************************************************************




// Bu kısımda ise .t-image class'lı resim kapsayıcısı olan div etiketlerine tarayıcı penceresinin genişliğine göre değişken değerler vermeye çalışıyoruz. Bunu media query kullanmadan sadece javascript ile yapmayı denedik, lakin araştırmalarımız sonucunda bu işlemi yapmanın daha kolay ve daha kısa bir yolunu bulup scss dosyasından yaptık.O yüzden bu kodları yoruma aldık. 

/*
var genislik = window.innerWidth;

var img_containers = document.querySelectorAll(".t-image");
var tab_panel = document.querySelectorAll(".t-panel");
document.documentElement.style.setProperty('boyutlandir', '50px');

window.onresize = function(){

    if(window.innerWidth <= 576){
        
        img_containers.forEach(function(eleman){
                eleman.style.width = "100px";
                eleman.style.height = "100px";
            });
        
        tab_panel.forEach(function(eleman){
            // eleman.style.paddingLeft = (img_containers[0].style.width + (img_containers[0].style.width * 0.20));

        });
        
        
    }
    else if(window.innerWidth <= 768){
        
        img_containers.forEach(function(eleman){
                eleman.style.width = "125px";
                eleman.style.height = "125px";
            });
        
    }
    else if(window.innerWidth <= 992){
        
        img_containers.forEach(function(eleman){
                eleman.style.width = "150px";
                eleman.style.height = "150px";
            });
    }
    else{
        
        img_containers.forEach(function(eleman){
                eleman.style.width = "200px";
                eleman.style.height = "200px";
            });
        
    }
}  
*/

// ****************************************************************************************

// ! Sitedeki Form Elemanlarının Doğrulama İşlemleri

(function(){

    //  Bu kısımda finput, textarea ve button gibi form içinde bulunan form öğelerini seçtik.
    'use strict';
    const myName = document.querySelector("#name");
    const myEmail = document.querySelector("#email");
    const myPhone = document.querySelector("#phone");
    const myMessage = document.querySelector("#message");
    const mySubmitBtn = document.querySelector("#submitBtn");


    // -------------------------------------------------------------------
    // Burası ise input veya textarea gibi form elemanlarının içine yazılan ifadelerin o form elemanına uygun olarak yazılmasını sağladığımız kısımdır. Kullanıcı ifadeyi daha yazarken bile odağını (focus) o form elemanından çekerse o ana kadar yazmış olduğu ifadenin doğru ya da yanlış olup olmadığını görür, çeşitli uyarıcılar bu kısımda yazdığımız javascript kodları sayesinde ona gösterilir.
    
    const spacePattern = /^\S*$/;  // bu desen boşluk içermeyen ifadelerde true döndürür
    const NumericPattern = /^([^0-9]*)$/; // bu desen rakam içermeyen ifadelerde true döndürür. 
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/; // bu desen e-mail'in doğru formatta girilip girilmediğini denetler 
    const OnlyNumberPattern = /^[0-9]*$/; // bu desen rakam içeren ifadelerde true döndürür
    
    
    myName.addEventListener("blur", controlName);
    myEmail.addEventListener("blur", controlEmail);
    myPhone.addEventListener("blur", controlPhone);
    myMessage.addEventListener("blur", controlMessage);

    function controlName(){
        const myError = document.getElementById("errorName");

        if (myName.value.length === 0){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.textContent = "İsim alanı boş bırakılamaz";
            return false; 
        }
        else if(myName.value.length < 3){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.textContent = "İsim 3 karakterden az olamaz";
            return false;
        }
        else if(myName.value.length > 30){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.textContent = "İsim 30 karakterden fazla olamaz";
            return false;
        }
        else if(!NumericPattern.test(myName.value)){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.textContent = "İsim içerisinde sayı olamaz";
            return false;
        }
        else if(!spacePattern.test(myName.value)){
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myError.textContent = "İsim arasında boşluk olamaz";
            return false;
        }
        else {
            myName.classList.remove("is-invalid");
            myName.classList.add("is-valid");
            return true;
        }
    }


    function controlEmail(){
        const myError = document.getElementById("errorEmail");

        if (myEmail.value.length === 0){
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myError.textContent = "E-mail alanı boş bırakılamaz";
            return false; 
        }
        else if (!spacePattern.test(myEmail.value)){
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myError.textContent = "E-posta arasında boşluk olamaz";
        }
        else if(!EmailPattern.test(myEmail.value)){
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myError.textContent = "Girilen ifade e-mail formatına uygun değil";
            return false;
        }
        else {
            myEmail.classList.remove("is-invalid");
            myEmail.classList.add("is-valid");
            return true;
        }
    }

    function controlPhone(){
        const myError = document.getElementById("errorPhone");

        if(myPhone.value.length === 0){
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            myError.textContent = "Telefon alanı boş bırakılamaz";
            return false;
        }
        else if(!spacePattern.test(myPhone.value)){
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            myError.textContent = "Telefon numarası arasında boşluk bırakılamaz";
            return false;
        }
        else if (!OnlyNumberPattern.test(myPhone.value)){
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            myError.textContent = "Telefon numarası 0-9 arası rakamlardan başka karakter içeremez";
            return false;

        }
        else if(myPhone.value.length < 10 || myPhone.value.length > 12){
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            myError.textContent = "Telefon numaranızı alan koduyla (+90) veya alan kodu olmadan giriniz";
            return false;

        }
        else{
            myPhone.classList.remove("is-invalid");
            myPhone.classList.add("is-valid");
            return true;
        }
    }

    function controlMessage(){
       const myError = document.getElementById("errorMessage");

       if(myMessage.value.length === 0){
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            myError.textContent = "Mesaj alanı boş bırakılamaz";
            return false;
       }
       else if(myMessage.value.length < 50){
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            myError.textContent = "En az 50 karakter girmelisiniz";
            return false;
       }
       else{
            myMessage.classList.remove("is-invalid");
            myMessage.classList.add("is-valid");
            return true;
       }

    }

    // --------------------------------------------------------------------------------------
    /* Butonun textarea kısmına girilen karakter sayısına göre disabled olması ve
    textarea kısmına girilen karakter sayısının textarea'nın sağ altında direkt sayı olarak gösterilmesi */
    if(myMessage.value.length == 0){
        mySubmitBtn.disabled = true;
    }
    
    myMessage.addEventListener("keyup", function(){
        document.querySelector("#characterNumber").textContent = myMessage.value.length;
        
        if (myMessage.value.length >= 50) {
            mySubmitBtn.disabled = false;
        } else {
            mySubmitBtn.disabled = true;
        }
        
    });
    
    
    // --------------------------------------------------------------------------------------
    // Bu kısım ise form doğrulama işlemleri için formlarla ilgili yapılmış fonksiyonları işlediğimiz, onlardan dönen boolean değere göre işlem yaptığımız kısımdır. 
    const myForms = document.querySelector(".needs-validation");

    myForms.addEventListener("submit", function(e){
        if(!myForms.checkValidity() 
            // || !controlName() || !controlEmail() ||!controlPhone() || !controlMessage()
            // Bu kısmı yazmasak da oluyor.
            ) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, false)



    
})();

