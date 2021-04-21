var personal = [
    {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
    },
    {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
    },
    {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
    },
    {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
    },
    {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
    },
    ];

    /**Total usando, map, filtrer, reduce */

    const TotalIsForceUser = personal
        .filter((Pos) => Pos.isForceUser === true)
        .reduce((Total, Pos) => (Total += Pos.isForceUser),0)
    console.log(TotalIsForceUser);

      /**Total reduce */

      const TotalReduce = personal.reduce((Total, Pos) => (Total += Pos.isForceUser.valueOf(true)),0)
      console.log(TotalReduce);