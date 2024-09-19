import {Button, Container, Flex, Input} from "@mantine/core";
import {Profile} from "@/features";
interface SearchMemberProps {
  drawerKey : string
}
export const SearchMember = ({drawerKey} : SearchMemberProps) => {
  if(!drawerKey || drawerKey === 'alarm') return null

  return (
    <Container>
      <Input/>
      <Profile
        profile={{
          name: 'shinbom',
        }}
        size="sm"
      />
      <Button fullWidth radius={20}>
        구독하기
      </Button>
    </Container>

  )
}
