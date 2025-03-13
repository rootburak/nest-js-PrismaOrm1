
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "displayName" TEXT DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "UserSettings" (
    "id" SERIAL NOT NULL,
    "darkMode" BOOLEAN NOT NULL,
    "notifications" BOOLEAN NOT NULL,

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
