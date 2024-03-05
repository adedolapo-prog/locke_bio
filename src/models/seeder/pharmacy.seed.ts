import Order from "../order";
import Pharmacy from "../pharmacy";

export async function seedDatabase() {
  try {
    await Order.sync({ force: true }); // Sync the Order model to create the table
    await Pharmacy.sync({ force: true }); // Sync the Pharmacy model to create the table
    await Pharmacy.bulkCreate([
      {
        integrationName: "healthmart",
        name: "HealthMart Pharmacy",
        address: "123 Main St",
        city: "Cityville",
        state: "Stateville",
        zipcode: "12345",
        country: "Countryland",
        fax: "123-456-7890",
        phone: "987-654-3210",
      },
      {
        integrationName: "careplus",
        name: "CarePlus Pharmacy",
        address: "456 Elm St",
        city: "Townsville",
        state: "Stateville",
        zipcode: "67890",
        country: "Countryland",
        fax: "567-890-1234",
        phone: "876-543-2109",
      },
      {
        integrationName: "quickcare",
        name: "QuickCare Pharmacy",
        address: "789 Oak St",
        city: "Villageville",
        state: "Stateville",
        zipcode: "54321",
        country: "Countryland",
        fax: "345-678-9012",
        phone: "765-432-1098",
      },
    ]);
    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
