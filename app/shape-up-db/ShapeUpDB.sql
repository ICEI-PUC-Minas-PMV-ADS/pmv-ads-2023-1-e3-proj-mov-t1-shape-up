CREATE TABLE "Exercise" (
  "id" uniqueidentifier,
  "name" nvarchar(50),
  "reps" int,
  "series" int,
  "restTime" double,
  "tutorialUrl" nvarchar(100),
  "level" nvarchar(50),
  PRIMARY KEY ("id")
);

CREATE TABLE "User" (
  "email" nvarchar(50),
  "password" nvarchar(50),
  "name" nvarchar(50),
  "imageData" nvarchar,
  PRIMARY KEY ("email")
);

CREATE TABLE "RefreshToken" (
  "id" uniqueidentifier,
  "username" nvarchar(50),
  "token" nvarchar(50),
  PRIMARY KEY ("id")
);

CREATE TABLE "Workout" (
  "id" uniqueidentifier,
  "username" nvarchar(50),
  "name" nvarchar(50),
  "imageData" nvarchar,
  "lastRun" datetime,
  PRIMARY KEY ("id")
);

