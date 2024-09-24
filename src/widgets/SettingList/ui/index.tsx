import {NavLink} from "@mantine/core";
import {SETTING_LISTS} from "@/widgets/SettingList/constants";

export const SettingList = () => {
  return (
    <>
      {
        SETTING_LISTS.map((item, index) => (
          <NavLink
            href={item.href}
            key={item.label}
            // active={index === active}
            label={item.label}
            description={item.description}
            rightSection={item.rightSection}
            leftSection={<item.icon size="1rem" stroke={1.5} />}
            // onClick={() => setActive(index)}
          />
        ))
      }
    </>
  )
}
