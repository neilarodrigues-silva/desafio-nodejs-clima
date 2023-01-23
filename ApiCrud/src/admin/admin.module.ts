import { EmailAdminIsUnique } from './dto/validation/email.admin.isunique';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Module } from "@nestjs/common"
import { DatabaseModule } from 'src/database/database.module';
import { AdminProviders } from './admin.providers';


@Module({
    imports: [DatabaseModule],
    controllers: [AdminController],
    providers: [
        ...AdminProviders,
        AdminService,
        EmailAdminIsUnique
    ],
    exports: [AdminService]
})
export class AdminModule {}
