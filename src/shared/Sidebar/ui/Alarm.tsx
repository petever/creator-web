import { Button, Container } from '@mantine/core'

interface AlarmProps {
  drawerKey: string
}
export const Alarm = ({ drawerKey }: AlarmProps) => {
  if (!drawerKey || drawerKey === 'search') return null

  return (
    <Container>
      <Button fullWidth radius={20}>
        알람스
      </Button>
    </Container>
  )
}
