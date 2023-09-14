import styled from '@emotion/styled'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import Search from '@/assets/icons/Search'
import { FlexBox } from '@/components/common/flexBox'
import Input from '@/components/common/input'
import { Text } from '@/components/common/text'
import { theme } from '@/styles/theme'
const PostListPage = () => {
  const channelID = useLocation().pathname.split('/')[2]
  const navigate = useNavigate()
  return (
    <FlexBox direction={'column'} align={'center'}>
      <FlexBox direction={'row'} gap={10}>
        <Input width={300} placeholder={'작성자/글 제목으로 검색 가능합니다.'} />
        <Search />
        <NewPostButton>
          <Text
            typo={'Headline_20'}
            as={'span'}
            onClick={() => navigate(`/posts/${channelID}/create`)}
          >
            {'＋'}
          </Text>
        </NewPostButton>
      </FlexBox>
    </FlexBox>
  )
}

export default PostListPage

const NewPostButton = styled.button`
  width: 50px;
  height: 30px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: ${theme.palette.CORAL};
  display: flex;
  align-items: center;
  justify-content: center;
`
