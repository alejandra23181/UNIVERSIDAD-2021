var pilots = [
    {
    id: 10,
    name: "Poe Dameron",
    years: 14,
    },
    {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
    },
    {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
    },
    {
    id: 99,
    name: "Ello Asty",
    years: 22,
    },
    ];

    /**Total años flechitas*/

    const TotalExperiencia = pilots.reduce((Total, Pos) => (Total += Pos.years), 0);
    console.log(TotalExperiencia);

    /**Total años sin flechitas*/

    var TotalExperienciaSin = pilots.reduce(function(Total, Pos){
        return Total += Pos.years;
    }, 0);
    console.log(TotalExperienciaSin);
   
    /**Mayor experencia */

    const TotalMayorExp = pilots.reduce((Total, Pos) => Math.max(Total, Pos.years), 0);
    console.log(TotalMayorExp);

    /**Mayor experencia flechitas*/

    var TotalMayorExpSin = pilots.reduce(function(Total, Pos){
        return Math.max(Total, Pos.years);
    }, 0);
    console.log(TotalMayorExpSin);
    