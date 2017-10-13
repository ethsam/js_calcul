var jdepart = jQuery('div#nf-field-50-wrap.field-wrap.date-wrap .pikaday__display.pikaday__display--pikaday.ninja-forms-field.nf-element.datepicker').val();
var jretour = jQuery('div#nf-field-51-wrap.field-wrap.date-wrap .pikaday__display.pikaday__display--pikaday.ninja-forms-field.nf-element.datepicker').val();

calculdate(jdepart, jretour);

//function dateDiff pour recupérer le nombres jours, heures, minutes,...
function dateDiff(date1, date2) {
    var diff = {} // Initialisation du retour
    var tmp = date1 - date2;

    tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60; // Extraction du nombre de secondes

    tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
    diff.min = tmp % 60; // Extraction du nombre de minutes

    tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
    diff.hour = tmp % 24; // Extraction du nombre d'heures

    tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
    diff.day = tmp;

    return diff;
}

//Function pour le calcul
function calculdate(data1, data2) {

    //Convertion en date
    data1 = new Date.parse(data1);
    data2 = new Date.parse(data2);

    //Utilisation de la fonction dateDiff
    var objdate = dateDiff(data2, data1);

    //récupération du nombre de jours
    var objdateday = objdate['day'];

    if (objdateday >= 1) {

        //recupération du jour et x 8€
        objdate = (objdateday * 8);
        //Change le text par le resultat du calcul
        jQuery('#nf-field-56-wrap .nf-field-element').text('Tarif : ' + objdate + ' € soit 8€/jour pour ' + objdateday + ' jours');

    } else if (objdateday == 0) {
        //recupération du jour et x 8€
        objdate = (1 * 8);
        //Change le text par le resultat du calcul
        jQuery('#nf-field-56-wrap .nf-field-element').text('Tarif : ' + objdate + ' € soit 8€/jour pour 1 jour');
    } else {
        //Change le text par le resultat du calcul
        jQuery('#nf-field-56-wrap .nf-field-element').text('Merci de sélectionner une autre plage de date');
    }

}

//Quand le champ datepicker change
jQuery('div#nf-field-50-wrap.field-wrap.date-wrap .pikaday__display.pikaday__display--pikaday.ninja-forms-field.nf-element.datepicker').change(function () {

    //recupere la date de départ
    var jdepart = jQuery('div#nf-field-50-wrap.field-wrap.date-wrap .pikaday__display.pikaday__display--pikaday.ninja-forms-field.nf-element.datepicker').val();
    //recupere la date de retour
    var jretour = jQuery('div#nf-field-51-wrap.field-wrap.date-wrap .pikaday__display.pikaday__display--pikaday.ninja-forms-field.nf-element.datepicker').val();

    //function calculdate
    calculdate(jdepart, jretour);

});

//idem pour le deuxieme datepicker
jQuery('div#nf-field-51-wrap.field-wrap.date-wrap .pikaday__display.pikaday__display--pikaday.ninja-forms-field.nf-element.datepicker').change(function () {

    var jdepart = jQuery('div#nf-field-50-wrap.field-wrap.date-wrap .pikaday__display.pikaday__display--pikaday.ninja-forms-field.nf-element.datepicker').val();
    var jretour = jQuery('div#nf-field-51-wrap.field-wrap.date-wrap .pikaday__display.pikaday__display--pikaday.ninja-forms-field.nf-element.datepicker').val();

    calculdate(jdepart, jretour);

});
