import { GlueWebFactoryFunction, Glue42Web } from "../web";
import { GlueCoreFactoryFunction } from "@glue42/core";

export const createFactoryFunction = (coreFactoryFunction: GlueCoreFactoryFunction): GlueWebFactoryFunction => {
    return async (config?: Glue42Web.Config): Promise<Glue42Web.API> => {
        
        // check if G4E and return it

        // validate config
        // parse config
        // check for required resources

        // library picker

        // {
        //     name: "asd",
        //     create: () => {},
        //     condition: (config) => config.shouldInitMe
        // }
    }
};
