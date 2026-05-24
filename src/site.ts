// Central place for content that changes / gets reused across the site.

import logo from './assets/brand/logo.svg'
import treeAdventure from './assets/brand/tree_adventure.svg'
import treeFitness from './assets/brand/tree_fitness.svg'
import treeSocial from './assets/brand/tree_social.svg'
import treeCreative from './assets/brand/tree_creative.svg'
import treeNight from './assets/brand/tree_night.svg'

export { logo }

// TODO: replace with the real APK / store link once OptiLife ships.
export const DOWNLOAD_URL = '#download'

export type Category = {
  name: string
  color: string // CSS var name from index.css @theme
  tree: string
  blurb: string
}

export const CATEGORIES: Category[] = [
  {
    name: 'Adventure',
    color: 'var(--color-adventure)',
    tree: treeAdventure,
    blurb: 'Go somewhere new. Wander, explore, say yes.',
  },
  {
    name: 'Fitness',
    color: 'var(--color-fitness)',
    tree: treeFitness,
    blurb: 'Move your body. Sweat a little. Grow a strong oak.',
  },
  {
    name: 'Social',
    color: 'var(--color-social)',
    tree: treeSocial,
    blurb: 'Reach out, show up, connect. Flowering trees.',
  },
  {
    name: 'Creative',
    color: 'var(--color-creative)',
    tree: treeCreative,
    blurb: 'Make something. Anything. Grow a rare glowing plant.',
  },
  {
    name: 'Night',
    color: 'var(--color-night)',
    tree: treeNight,
    blurb: 'Wind down, rest well, dream. Moonlit plants.',
  },
]
