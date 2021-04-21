var pilots = [
    {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    },
    {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    },
    {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    },
    {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    },
    ];

    /**Rebels */

    const Rebels = pilots.filter((Pos) => Pos.faction === "Rebels");
    console.log(Rebels);

    /**Rebels */

    const Empire = pilots.filter((Pos) => Pos.faction === "Empire");
    console.log(Empire);