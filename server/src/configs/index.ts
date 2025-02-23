import dotenv from 'dotenv'

import localConfig from './local'
import productionConfig from './production'

dotenv.config()

const env = process.env.NODE_ENV || 'local'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const configMap: Record<string, any> = {
    local: localConfig,
    production: productionConfig
}

const config = configMap[env]

if (!config) {
    throw new Error(`⚠️ Invalid environment: ${env}`)
}

export default config
