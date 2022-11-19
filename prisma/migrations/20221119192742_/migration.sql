-- CreateTable
CREATE TABLE "adress" (
    "idAdress" TEXT NOT NULL,
    "street" TEXT NOT NULL,

    CONSTRAINT "adress_pkey" PRIMARY KEY ("idAdress")
);

-- CreateTable
CREATE TABLE "championship" (
    "idChampionship" TEXT NOT NULL,
    "nameChampionship" TEXT NOT NULL,
    "yearChampionship" INTEGER NOT NULL,

    CONSTRAINT "championship_pkey" PRIMARY KEY ("idChampionship")
);

-- CreateTable
CREATE TABLE "classification" (
    "idClassification" TEXT NOT NULL,
    "pointsTeam" INTEGER NOT NULL,
    "goalDifference" INTEGER NOT NULL,

    CONSTRAINT "classification_pkey" PRIMARY KEY ("idClassification")
);

-- CreateTable
CREATE TABLE "match" (
    "idMatch" TEXT NOT NULL,
    "goalHomeTeam" INTEGER NOT NULL,
    "goalVisitingTeam" INTEGER NOT NULL,
    "dateMatch" TIMESTAMP(3) NOT NULL,
    "occurredMatch" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "match_pkey" PRIMARY KEY ("idMatch")
);

-- CreateTable
CREATE TABLE "stadium" (
    "idStadium" TEXT NOT NULL,
    "nameStadium" TEXT NOT NULL,
    "idAdress" TEXT,

    CONSTRAINT "stadium_pkey" PRIMARY KEY ("idStadium")
);

-- CreateTable
CREATE TABLE "player" (
    "idPlayer" TEXT NOT NULL,
    "namePlayer" TEXT NOT NULL,
    "genderPlayer" TEXT NOT NULL,
    "isActivePlayer" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "player_pkey" PRIMARY KEY ("idPlayer")
);

-- CreateTable
CREATE TABLE "team" (
    "idTeam" TEXT NOT NULL,
    "nameTeam" TEXT NOT NULL,
    "idHome" TEXT NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("idTeam")
);

-- CreateTable
CREATE TABLE "player-on-team" (
    "id" TEXT NOT NULL,
    "idTeam" TEXT NOT NULL,
    "idPlayer" TEXT NOT NULL,

    CONSTRAINT "player-on-team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team-on-championship" (
    "id" TEXT NOT NULL,
    "idTeam" TEXT NOT NULL,
    "idChampionship" TEXT NOT NULL,

    CONSTRAINT "team-on-championship_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stadium_idAdress_key" ON "stadium"("idAdress");

-- CreateIndex
CREATE UNIQUE INDEX "team_idHome_key" ON "team"("idHome");

-- AddForeignKey
ALTER TABLE "stadium" ADD CONSTRAINT "stadium_idAdress_fkey" FOREIGN KEY ("idAdress") REFERENCES "adress"("idAdress") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_idHome_fkey" FOREIGN KEY ("idHome") REFERENCES "stadium"("idStadium") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player-on-team" ADD CONSTRAINT "player-on-team_idTeam_fkey" FOREIGN KEY ("idTeam") REFERENCES "team"("idTeam") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player-on-team" ADD CONSTRAINT "player-on-team_idPlayer_fkey" FOREIGN KEY ("idPlayer") REFERENCES "player"("idPlayer") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team-on-championship" ADD CONSTRAINT "team-on-championship_idTeam_fkey" FOREIGN KEY ("idTeam") REFERENCES "team"("idTeam") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team-on-championship" ADD CONSTRAINT "team-on-championship_idChampionship_fkey" FOREIGN KEY ("idChampionship") REFERENCES "championship"("idChampionship") ON DELETE RESTRICT ON UPDATE CASCADE;
