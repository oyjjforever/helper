import cronstrue from 'cronstrue/i18n'
export function cron (value, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!value) return ''
  try {
    return cronstrue.toString(value, { locale: 'zh_CN' })
  } catch (error) {
    return value
  }
}
