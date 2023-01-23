import { UserEntity } from './../user/user.entity';
import { setSeederFactory } from "typeorm-extension";

export const UserFactory = setSeederFactory(UserEntity, (faker) => {
    const user = new UserEntity();
    user.name = faker.name.firstName();
    user.email = faker.internet.email(user.name);
    user.password = faker.internet.password();
    user.city = faker.address.cityName();
    user.state = faker.address.state();
    return user;
  });