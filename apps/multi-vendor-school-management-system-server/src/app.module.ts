import { Module } from "@nestjs/common";
import { StaffModule } from "./staff/staff.module";
import { MessageModule } from "./message/message.module";
import { StudentModule } from "./student/student.module";
import { CourseModule } from "./course/course.module";
import { ApplicationModule } from "./application/application.module";
import { TimetableModule } from "./timetable/timetable.module";
import { FeeModule } from "./fee/fee.module";
import { LibraryItemModule } from "./libraryItem/libraryItem.module";
import { AdmissionsModule } from "./Admissions/admissions.module";
import { CommunicationModule } from "./Communication/communication.module";
import { FinancialModule } from "./Financial/financial.module";
import { HrmModule } from "./Hrm/hrm.module";
import { LibraryModule } from "./Library/library.module";
import { LmsModule } from "./Lms/lms.module";
import { SisModule } from "./Sis/sis.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StaffModule,
    MessageModule,
    StudentModule,
    CourseModule,
    ApplicationModule,
    TimetableModule,
    FeeModule,
    LibraryItemModule,
    AdmissionsModule,
    CommunicationModule,
    FinancialModule,
    HrmModule,
    LibraryModule,
    LmsModule,
    SisModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
