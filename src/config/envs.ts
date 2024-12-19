import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {
  PORT: number;
}

const envVarsSchema: Joi.ObjectSchema = Joi.object({
  PORT: Joi.number().required(),
}).unknown(true);

const { error, value } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
};
