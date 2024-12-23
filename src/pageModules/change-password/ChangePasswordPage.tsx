import {Header} from "@/shared/ui/header";
import {ChangePassword} from "@/features/users/ui/ChangePassword";
import {useSession} from "next-auth/react";

const ChangePasswordPage = () => {

  return (
    <div className="w-full">
      <Header text="비밀번호 변경" isBack isBorder />
      <ChangePassword/>
    </div>
  )
}
export default ChangePasswordPage