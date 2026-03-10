export const timeSince = (dateString) => {
  const seconds = Math.floor((new Date() - new Date(dateString)) / 1000)
  let interval = Math.floor(seconds / 31536000)
  if (interval > 1) {
    return interval + ' years'
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return interval + ' months'
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return interval + ' days'
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return interval + ' hours'
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return interval + ' minutes'
  }
  return Math.floor(seconds) + ' seconds'
}

export const hackathonActive = true
export const currentHackathonYear = '2026'
export const currentHackathonLabel = `Hackathon ${currentHackathonYear}`
export const currentHackathonTitle = `Open Bible Tech Community Hackathon ${currentHackathonYear}`
export const currentHackathonHubUrl =
  'https://unfoldingword.notion.site/OBTC-Hackathon-Hub-2fe72d5af2de80f49eb8d2c2a0aa8b4d'
