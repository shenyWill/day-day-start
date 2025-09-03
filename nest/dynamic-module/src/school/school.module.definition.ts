import { ConfigurableModuleBuilder } from "@nestjs/common";

export interface SchoolModuleOptions {
  schoolName: string;
  schoolCode: number;
}

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<SchoolModuleOptions>()
.setClassMethodName('register')
.setExtras({
  isGlobal: true,
}, (options, extras) => {
  return {
    ...options,
    ...extras,
    test: 'yuanwill'
  }
})
.build();
