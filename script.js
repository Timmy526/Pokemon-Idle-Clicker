let PokeDollars = document.getElementById("PokeDollars");
var Save = 0;
var Poke = 0;
var PokeBall = 0;
var GreatBall = 0;
var PremierBall = 0;
var UltraBall = 0;

function addOne(){
    Poke = Poke + 1;
    update();
}

function PokeBalls(){
    if (Poke >= ((PokeBall + 1) * 20)){
        Poke = Poke - ((PokeBall + 1) * 20);
        PokeBall = PokeBall + 1;
    }
}

function GreatBalls(){
    if (Poke >= ((GreatBall + 1) * 60)){
        Poke = Poke - ((GreatBall + 1) * 60);
        GreatBall = GreatBall + 1;
    }
}

function PremierBalls(){
    if (Poke >= ((PremierBall + 1) * 120)){
        Poke = Poke - ((PremierBall + 1) * 120);
        PremierBall = PremierBall + 1;
    }
}

function UltraBalls(){
    if (Poke >= ((UltraBall + 1) * 300)){
        Poke = Poke - ((UltraBall + 1) * 300);
        PremierBall = UltraBall + 1;
    }
}

function update() {
    document.getElementById("PokeDollars").innerHTML = "Poke Dollars " + Poke; 
    document.getElementById("PokeMaker").innerHTML = "You make " + ((PokeBall * 1) + (GreatBall * 2) + (PremierBall * 5) + (UltraBall * 10)) + " Poke Dollars per second.";
    document.getElementById("PokeBallCost").innerHTML = "Poke Balls cost: " + ((PokeBall + 1) * 20) + " Poke Dollars";
    document.getElementById("PokeBall").innerHTML = "You own " + PokeBall + " Poke Balls";
    document.getElementById("GreatBallCost").innerHTML = "Great Balls cost: " + ((GreatBall + 1) * 60) + " Poke Dollars";
    document.getElementById("GreatBall").innerHTML = "You own " + GreatBall + " Great Balls";
    document.getElementById("PremierBallCost").innerHTML = "Premier Balls cost: " + ((PremierBall + 1) * 120) + " Poke Dollars";
    document.getElementById("PremierBall").innerHTML = "You own " + PremierBall + " Premier Balls";
    document.getElementById("UltraBallCost").innerHTML = "Ultra Balls cost: " + ((UltraBall + 1) * 300) + " Poke Dollars";
    document.getElementById("UltraBall").innerHTML = "You own " + UltraBall + " Ultra Balls";
}

function timer() {
    Poke = Poke + (PokeBall * 1);
    Poke = Poke + (GreatBall * 2);
    Poke = Poke + (PremierBall * 5);
    Poke = Poke + (UltraBall * 10);
    update();
}
setInterval(timer, 1000);

function save(){
    Save = Save + 1;
    document.getElementById("Saved").innerHTML = "Saved " + Save;
    localStorage.setItem("Poke", Poke);
    localStorage.setItem("PokeBall", PokeBall);
    localStorage.setItem("GreatBall", GreatBall);
    localStorage.setItem("PremierBall", PremierBall);
    localStorage.setItem("UltraBall", UltraBall);
}

function load(){
    Poke = localStorage.getItem("Poke");
    Poke = parseInt(Poke);
    PokeBall = localStorage.getItem("PokeBall");
    GreatBall = localStorage.getItem("GreatBall");
    PremierBall = localStorage.getItem("PremierBall");
    UltraBall = localStorage.getItem("UltraBall");
    PokeBall = parseInt(PokeBall);
    GreatBall = parseInt(GreatBall);
    PremierBall = parseInt(PremierBall);
    UltraBall = parseInt(UltraBall);
    update()
}
setInterval(save, 300000);

