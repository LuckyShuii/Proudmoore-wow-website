import { dataSource } from "../config/db";
import { Roles } from "../entities/roles";

export async function seedRoles() {
  const repo = dataSource.getRepository(Roles);
  await repo.upsert(
    [
      { name: "Administrator", description: "Full Access" },
      { name: "Website Developer", description: "Full Access" },
      { name: "Social Media Manager", description: "Elevated Privileges" },
      { name: "Community Manager", description: "Elevated Privileges" },
      { name: "Head Game Master", description: "Elevated Privileges" },
      { name: "Translator", description: "Access to Translation Tools" },
    ],
    ["name"] // unique constraint
  );
}