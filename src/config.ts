import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

type AppConfig = {
  openAI: {
    apiKey: string,
    systemPrompt?: string
  },
  proxy?: {
    host: string,
    port: number
  } | null
}

const configPath = resolve(__dirname, '../config.json')

const defaultConfig: AppConfig = {
  openAI: {
    apiKey: '',
    systemPrompt: 'You are a helpful assistant'
  },
  proxy: null
}
const config: AppConfig = existsSync(configPath)
  ? Object.assign(defaultConfig, JSON.parse(readFileSync(configPath, 'utf-8')))
  : defaultConfig

export default config