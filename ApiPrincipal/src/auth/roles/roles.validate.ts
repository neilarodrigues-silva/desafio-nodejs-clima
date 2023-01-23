
// export class RolesValidates {

//     async roleValidate(role: string) {
//         if(role != Role.Admin && role != Role.User && role != Role.Premium) return new BadRequestException("Role invalid")
//         return null
//     }

//     async roleAdminValidate(role: string) {
//         if(role != Role.Admin) return new ForbiddenException()
//         return null
//     }

//     async roleUserValidate(role: string) {
//         if(role != Role.Admin) return new ForbiddenException()
//         return null
//     }

//     async rolePremiumValidate(role: string) {
//         if(role != Role.Admin) return new ForbiddenException()
//         return null
//     }
// }