import {Button, Flex, MantineProvider, useMantineColorScheme} from "@mantine/core";
import '@mantine/core/styles.css';
import {Sidebar} from "../widgets/ui/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <MantineProvider defaultColorScheme="dark">
          <Flex
            gap='xl'
          >
            <Sidebar isLogin={false}/>
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
