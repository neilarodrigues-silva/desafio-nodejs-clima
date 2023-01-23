
import { AdminEntity } from './../admin/admin.entity';
import { setSeederFactory } from "typeorm-extension";

export const AdminFactory = setSeederFactory(AdminEntity, (faker) => {
    const admin = new AdminEntity();
    admin.name = faker.name.firstName();
    admin.email = faker.internet.email(admin.name);
    admin.password = faker.internet.password();
    return admin;
  });