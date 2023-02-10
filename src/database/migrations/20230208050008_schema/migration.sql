-- CreateEnum
CREATE TYPE "MemberSeasonInfo_memverPart" AS ENUM ('WEB_MOBILE', 'SERVER_CLOUD', 'AI');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('LEAD', 'CORE_MEMBER', 'MEMBER');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('STUDY', 'PROJECT');

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "type" "Type" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "activityName" TEXT NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityEnroll" (
    "id" SERIAL NOT NULL,
    "activityId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "ActivityEnroll_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Github" (
    "githubId" SERIAL NOT NULL,
    "activityId" INTEGER NOT NULL,
    "githubURL" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "Github_pkey" PRIMARY KEY ("githubId")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "memberName" TEXT NOT NULL,
    "profileImgURL" VARCHAR(300) NOT NULL,
    "githubURL" VARCHAR(300) NOT NULL,
    "memberEmail" VARCHAR(300) NOT NULL,
    "refreshToken" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberSeasonInfo" (
    "id" SERIAL NOT NULL,
    "seasonNum" INTEGER NOT NULL,
    "memberRole" "Role" NOT NULL,
    "activityId" INTEGER NOT NULL,
    "seasonId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "memberPart" "MemberSeasonInfo_memverPart" NOT NULL,

    CONSTRAINT "MemberSeasonInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "id" SERIAL NOT NULL,
    "seasonNum" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActivityEnroll_activityId_key" ON "ActivityEnroll"("activityId");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityEnroll_memberId_key" ON "ActivityEnroll"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "Github_activityId_key" ON "Github"("activityId");

-- CreateIndex
CREATE UNIQUE INDEX "MemberSeasonInfo_activityId_key" ON "MemberSeasonInfo"("activityId");

-- CreateIndex
CREATE UNIQUE INDEX "MemberSeasonInfo_memberId_key" ON "MemberSeasonInfo"("memberId");

-- AddForeignKey
ALTER TABLE "ActivityEnroll" ADD CONSTRAINT "ActivityEnroll_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityEnroll" ADD CONSTRAINT "ActivityEnroll_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Github" ADD CONSTRAINT "Github_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberSeasonInfo" ADD CONSTRAINT "MemberSeasonInfo_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberSeasonInfo" ADD CONSTRAINT "MemberSeasonInfo_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
