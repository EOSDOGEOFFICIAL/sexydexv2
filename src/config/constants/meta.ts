import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Wifeswap',
  description:
    'The most popular AMM on BSC by user count! Earn Waifu through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Wifeswap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | Wifeswap',
  },
  '/competition': {
    title: 'Trading Battle | Wifeswap',
  },
  '/prediction': {
    title: 'Prediction | Wifeswap',
  },
  '/farms': {
    title: 'Farms | Wifeswap',
  },
  '/pools': {
    title: 'Pools | Wifeswap',
  },
  '/lottery': {
    title: 'Lottery | Wifeswap',
  },
  '/collectibles': {
    title: 'Collectibles | Wifeswap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | Wifeswap',
  },
  '/teams': {
    title: 'Leaderboard | Wifeswap',
  },
  '/profile/tasks': {
    title: 'Task Center | Wifeswap',
  },
  '/profile': {
    title: 'Your Profile | Wifeswap',
  },
}
