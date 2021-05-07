import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ApeFinance',
  description:
    'The most popular AMM on BSC by user count! Earn APES through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by ApeFinance), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | ApeFinance',
  },
  '/competition': {
    title: 'Trading Battle | ApeFinance',
  },
  '/prediction': {
    title: 'Prediction | ApeFinance',
  },
  '/farms': {
    title: 'Farms | ApeFinance',
  },
  '/pools': {
    title: 'Pools | ApeFinance',
  },
  '/lottery': {
    title: 'Lottery | ApeFinance',
  },
  '/collectibles': {
    title: 'Collectibles | ApeFinance',
  },
  '/ifo': {
    title: 'Initial Farm Offering | ApeFinance',
  },
  '/teams': {
    title: 'Leaderboard | ApeFinance',
  },
  '/profile/tasks': {
    title: 'Task Center | ApeFinance',
  },
  '/profile': {
    title: 'Your Profile | ApeFinance',
  },
}
