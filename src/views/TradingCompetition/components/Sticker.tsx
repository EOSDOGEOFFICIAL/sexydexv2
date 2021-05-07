import styled from 'styled-components'
import { Flex } from '../../../components/Pancakeswap/uikit/src'

interface StickerProps {
  backgroundColor?: string
  borderColor?: string
}

const Sticker = styled(Flex)<StickerProps>`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.circle};
  box-shadow: ${({ theme }) => theme.card.boxShadow};
`

export default Sticker
