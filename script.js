let container = document.querySelector(".container");
let totalCanvas = document.querySelector(".total_canvas");
let calculateTotal = document.querySelector(".calculate_total");
let choosedSeats = document.querySelectorAll(`.seat.choosed`);
let movies = document.querySelectorAll(".movie")
let btnBilling = document.querySelector(".btn_billing")
let btnGiveUp = document.querySelector(".btn_giveUp")
let btns = document.querySelector(".btns")
let totalP = document.querySelector(".total_p")
let selectSeatAmount = document.querySelector(".select_seat_amount")
let chooseMovie = document.querySelector(".choose_movie")
let selectedMovie = document.querySelector(".selected_movie")

let movieArr = Array.from(movies)


chooseMovie.addEventListener("change",function(){
    calculate()
});

container.addEventListener("click", function(e){
   if(e.target.classList.contains(`seat`) && !e.target.classList.contains(`reserved`)){
    e.target.classList.toggle(`choosed`)
   }
   calculate()
});

function calculate(){
    let choosedSeats = document.querySelectorAll(`.seat.choosed`);

    calculateTotal.addEventListener("click",function(){
     
     totalCanvas.style.display="flex";
     document.querySelector(".container").style.opacity=0.5;
 
     totalSeat = choosedSeats.length-1
 
 
     price = chooseMovie.value
     let total = price*totalSeat
 
     totalP.innerHTML=`Toplam Tutar: ${total}`
     selectSeatAmount.innerHTML=`Seçilen Koltuk Sayısı: ${totalSeat}`
 
 });
}






 







