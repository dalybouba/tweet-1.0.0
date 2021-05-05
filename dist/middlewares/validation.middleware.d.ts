declare const validationMiddleware: (type: any, value?: string | 'body' | 'query' | 'params', skipMissingProperties?: boolean, whitelist?: boolean, forbidNonWhitelisted?: boolean) => any;
export default validationMiddleware;
