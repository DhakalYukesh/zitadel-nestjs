import { Module } from "@nestjs/common";
import { ZitadelAdapter } from "./adapter/zitadel/zitadel.adapter.js";

@Module({
    providers: [ZitadelAdapter],
    exports: [ZitadelAdapter],
})
export class AdapterModule { }