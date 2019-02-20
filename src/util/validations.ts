export const validateConfig = (config) => {
  if (typeof config.Bucket !== 'object' && !(config.Bucket instanceof Array)) {
    throw new Error('Kindly provide valid bucket config')
  } else if (typeof config.region === 'undefined' && typeof process.env.AWS_REGION !== 'string') {
    throw new Error('Kindly provide s3 \'region\'')
  } else {
    if (typeof config.Bucket.name !== 'string' && typeof config.Bucket.Bucket !== 'string') {
      throw new Error('Kindly provide a valid bucket name')
    }
  }

  return config
}

export const validateLogger = (logger) => {
  let flag = false
  if (!logger) {
    return flag
  }
  const requiredFn = ['info', 'warn', 'log', 'error', 'debug']
  requiredFn.forEach((name) => {
    if (typeof logger[name] !== 'function') {
      flag = true
    }
  })

  return !flag
}