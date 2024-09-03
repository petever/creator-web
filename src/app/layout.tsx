import {Button, Flex, MantineProvider, useMantineColorScheme} from "@mantine/core";
import '@mantine/core/styles.css';
import {Sidebar} from "../widgets/ui/Sidebar";
import { ThemeToggleButton} from "../widgets/ui/ThemeToggleButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <MantineProvider defaultColorScheme="dark">
          <Sidebar isLogin={false}/>
          <Flex
            gap='xl'
          >
            <ThemeToggleButton/>
            <Flex
              flex='3'
            >
              {children}
            </Flex>
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
