import { config as sharedConfig } from './wdio.conf.js'

export const config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            maxInstances: 1,
            browserName: 'firefox'
        }]
    }
}