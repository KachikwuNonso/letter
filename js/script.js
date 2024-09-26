$(document).ready(function () {
    $("#formOne").submit(function (e) {
        e.preventDefault();

        const adress1Input = $("input#adress1").val();
        const address2Input = $("input#address2").val();
        const areaInput = $("input#area").val();
        const stateInput = $("input#state").val();
        const dateInput = $("input#date").val();
        const personInput = $("input#person").val();
        const raddressInput = $("input#raddress").val();
        const locationInput = $("input#location").val();
        const staInput = $("input#sta").val();
        const salutationInput = $("input#salutation").val();
        const person1Input = $("input#person1").val();
        const person2Input = $("input#person2").val();
        const animalInput = $("input#animal").val();
        const exclamationInput = $("input#exclamation").val();
        const verbInput = $("input#verb").val();
        const nounInput = $("input#noun").val();

        const color = $("#color").val();

        $(".adress1").html("<b>" + adress1Input + "</b>");
        $(".address2").text(address2Input);
        $(".area").text(areaInput);
        $(".state").text(stateInput);
        $(".date").text(dateInput);
        $(".person").text(personInput);
        $(".raddress").text(raddressInput);
        $(".location").text(locationInput);
        $(".sta").text(staInput);
        $(".salutation").text(salutationInput);
        $(".person1").text(person1Input);
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput)

        $("#letter").show();
        $("#story").show();
        $(".body").hide();
        $("#letter").css("background-color", color);
        $("#story").css("background-color",color)
        

    });

    
});