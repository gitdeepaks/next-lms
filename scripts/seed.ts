const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Filming" },
        { name: "Engineering" },
      ],
    });
    console.log("Seeding successful");
  } catch (error) {
    console.log("error seeding db categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
