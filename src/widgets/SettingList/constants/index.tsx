import {Label} from "@/widgets/types";
import {IconActivity, IconChevronRight, IconFingerprint, IconGauge} from "@tabler/icons-react";
import React from "react";
import {PAGE} from "@/shared/constants/page";

export const SETTING_LISTS: Label[] = [
  { icon: IconGauge, label: '내 정보', description: 'Item with description', href : PAGE.SETTINGS_PROFILE},
  {
    icon: IconFingerprint,
    label: '보안',
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
    href : PAGE.SETTINGS_PROFILE
  },
  { icon: IconActivity, label: '결제', href : PAGE.SETTINGS_PROFILE },
  { icon: IconActivity, label: '결제 내역', href : PAGE.SETTINGS_PROFILE },
]
