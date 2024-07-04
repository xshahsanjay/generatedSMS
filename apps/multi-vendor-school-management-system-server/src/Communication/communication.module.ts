import { Module } from "@nestjs/common";
import { CommunicationService } from "./communication.service";
import { CommunicationController } from "./communication.controller";
import { CommunicationResolver } from "./communication.resolver";

@Module({
  controllers: [CommunicationController],
  providers: [CommunicationService, CommunicationResolver],
  exports: [CommunicationService],
})
export class CommunicationModule {}
