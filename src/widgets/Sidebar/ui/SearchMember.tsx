import { Button, Container, Drawer, Flex, Input } from '@mantine/core'
import { Profile } from '@/features'
import classes from '@/widgets/Sidebar/ui/styles.module.css'

interface SearchMemberProps {
  opened: boolean
  onClose: () => void
}
export const SearchMember = ({ opened, onClose }: SearchMemberProps) => {
  return (
    <Drawer opened={opened} onClose={onClose} className={classes.drawerWrapper}>
      <Container>
        <Input />
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
    </Drawer>
  )
}
