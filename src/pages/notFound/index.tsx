import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'

import Background from '@/assets/images/Background-nofootPrint.svg'
import DarkmodeBackground from '@/assets/images/Darkmode_Background.png'
import NotFoundImage from '@/assets/images/notFound.png'
import Button from '@/components/common/button'
import Spacing from '@/components/common/Spacing'
import { Text } from '@/components/common/Text'
import { darkModeAtom } from '@/libs/store/darkModeAtom'

const NotFoundPage = () => {
  const [isDarkMode] = useAtom(darkModeAtom)
  const navigate = useNavigate()
  return (
    <Container isDarkMode={isDarkMode}>
      <Image src={NotFoundImage} />
      <Spacing size={30} />
      <Text typo={'Headline_25'} color={isDarkMode ? 'WHITE' : 'BLACK'}>
        {'페이지를 찾을 수 없습니다!'}
      </Text>
      <Button
        buttonType={'ExtraLarge'}
        value={'홈으로'}
        onClick={() => navigate('/')}
        backgroundColor={'WHITE'}
        style={{
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.4)',
          position: 'absolute',
          bottom: '20px',
        }}
      />
    </Container>
  )
}

const Container = styled.div<{ isDarkMode: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => (props.isDarkMode ? DarkmodeBackground : Background)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Image = styled.img``

export default NotFoundPage
