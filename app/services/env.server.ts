function getEnv() {
  return {
    // FLY: process.env.FLY,
    NODE_ENV: process.env.NODE_ENV,
    // DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    // DISABLE_METRONOME: process.env.DISABLE_METRONOME,
  }
}

type ENV = ReturnType<typeof getEnv>

// App puts these on
declare global {
  // eslint-disable-next-line
  var ENV: ENV
  interface Window {
    ENV: ENV
  }
};

/**
 * @returns domain URL (without a ending slash, like: https://kentcdodds.com)
 */
function getDomainUrl(request: Request) {
  const host =
    request.headers.get('X-Forwarded-Host') ?? request.headers.get('host')
  if (!host) {
    throw new Error('Could not determine domain URL.')
  }
  const protocol = host.includes('localhost') ? 'http' : 'https'
  return `${protocol}://${host}`
}

export { getEnv, getDomainUrl };


